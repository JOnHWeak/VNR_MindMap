// mindmap.js — Mindmap + Adaptive layout (1975–nay), central TiltedCard, elbow links

// ===== Cấu hình Tilt cho node trung tâm =====
const CENTRAL_CARD = {
  width: 260,        // px - sẽ được cập nhật theo ảnh
  height: 64,        // px - sẽ được cập nhật theo ảnh
  scaleOnHover: 1.06,
  rotateAmplitude: 12 // độ nghiêng tối đa (độ)
};
const CENTRAL_IMG_SRC = "assets/LSDCSVN.png";
const CENTRAL_SIZE = { MIN_W: 360, MAX_W: 560, MIN_H: 72 }; // biên an toàn (kéo ngang hơn để hợp 2 dòng)

class VietnameseCommunistPartyMindmap {
  constructor(containerId, data) {
    this.container = d3.select(containerId);
    this.data = data;

    this.width = window.innerWidth;
    this.height = window.innerHeight - 60;

    this.svg = this.container
      .append("svg")
      .attr("id", "mindmap-svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .call(d3.zoom().scaleExtent([0.25, 3]).on("zoom", (e) => this.handleZoom(e)))
      .on("click", () => this.deselectAll());

    this.g = this.svg.append("g");
    this.tooltip = d3.select("body").append("div").attr("class", "tooltip");

    this.root = d3.hierarchy(this.data);

    // Tự scale card theo tỉ lệ ảnh trung tâm
    const img = new Image();
    img.onload = () => {
      const ratio = img.naturalWidth / Math.max(1, img.naturalHeight);

      // chọn width mục tiêu trong khoảng an toàn
      const targetW = Math.max(
        CENTRAL_SIZE.MIN_W,
        Math.min(CENTRAL_SIZE.MAX_W, img.naturalWidth)
      );
      const targetH = Math.round(targetW / ratio);

      CENTRAL_CARD.width  = targetW;
      CENTRAL_CARD.height = Math.max(CENTRAL_SIZE.MIN_H, targetH);

      // cập nhật kích thước node rồi layout lại
      this.root.each((d) => { d._w = this.getNodeWidth(d); d._h = this.getNodeHeight(d); });
      this.computeLayoutPositions();

      // render lại nhanh
      this.g.selectAll("*").remove();
      this.render();
      this.animateEntrance();
    };
    img.src = CENTRAL_IMG_SRC;

    this.root.each((d) => { d._w = this.getNodeWidth(d); d._h = this.getNodeHeight(d); });

    this.computeLayoutPositions();
    this.render();
    this.animateEntrance();

    window.addEventListener("resize", () => this.resize());
  }

  /* ----------- helpers xác định giai đoạn / bên ----------- */
  getTopPeriodNode(node) {
    if (node.depth === 0) return null;
    let a = node;
    while (a.parent && a.depth > 1 && a.data?.type !== "period") a = a.parent;
    return a;
  }
  periodStartYear(node) {
    const p = (node.data?.period || "").split("-")[0];
    const n = parseInt(p, 10);
    return Number.isFinite(n) ? n : null;
  }
  sideOf(node) {
    if (node.depth === 0) return 0;
    const anc = this.getTopPeriodNode(node);
    const start = anc ? this.periodStartYear(anc) : null;
    if (start != null) return start >= 1975 ? +1 : -1; // 1975+ => phải
    const label = (anc?.data?.title || anc?.data?.name || anc?.data?.period || "").toLowerCase();
    if (label.includes("1975")) return +1;
    return -1;
  }

  /* -------------------- LAYOUT -------------------- */
  computeLayoutPositions() {
    // Tham số
    const levelGapX = 220;      // khoảng cách ngang cơ sở d3.tree
    const levelGapY = 70;       // khoảng cách dọc cơ sở
    const baseChildGap = 90;    // gap dọc tối thiểu giữa con
    const baseGrandGap = 60;    // gap dọc tối thiểu giữa cháu
    const periodYOffset = 180;  // 1930 lên, 1945 xuống, 1975 ngang
    const padBetweenRootAndPeriod = 36;
    const padBetweenLevels = 56; // đệm ngang cha–con
    const edgeTop = 120, edgeBot = 140; // lề trên/dưới vùng dàn trải 1975–nay

    const tree = d3.tree()
      .nodeSize([levelGapY, levelGapX])
      .separation((a, b) => (a.parent === b.parent ? 1.1 : 1.6));

    // Làm layout trên bản sao để tính toán
    const L = d3.hierarchy(this.data);
    L.each((d) => { d._w = this.getNodeWidth(d); d._h = this.getNodeHeight(d); });

    // Con root: TRÁI trước, PHẢI sau
    if (L.children?.length) {
      L.children.sort((a, b) => {
        const sa = this.sideOf(a);
        const sb = this.sideOf(b);
        if (sa !== sb) return sa - sb;
        const na = (a.data.title || a.data.name || "") + "";
        const nb = (b.data.title || b.data.name || "") + "";
        return na.localeCompare(nb, "vi");
      });
    } else {
      for (const n of depth2Nodes) {
        const topPeriod = this.getTopPeriodNode(n);
        const is1975 = topPeriod && (this.periodStartYear(topPeriod) ?? 0) >= 1975;
        const gapForThis = is1975 ? within1975Gap : baseGrandGap;
        spreadChildrenAdaptive(n, n.x, gapForThis);
      }
    }
    

    tree(L); // layout gốc

    // ---- dàn đều con quanh anchor (gap động theo chiều cao) ----
    const parseYearFromName = (s) => {
      const m = (s || "").match(/(19|20)\d{2}/);
      return m ? parseInt(m[0], 10) : null;
    };
    const spreadChildrenAdaptive = (parent, anchorY, baseGap, explicitGap) => {
      const kids = parent.children || [];
      if (!kids.length) { parent.x = anchorY; return; }
    
      kids.sort((a, b) => {
        const oa = a.data.order ?? null, ob = b.data.order ?? null;
        if (oa != null && ob != null && oa !== ob) return oa - ob;
        const ya = parseYearFromName(a.data.name), yb = parseYearFromName(b.data.name);
        if (ya != null && yb != null && ya !== yb) return ya - yb;
        return (a.data.name || "").localeCompare(b.data.name || "", "vi");
      });
    
      const maxH = d3.max(kids, (k) => k._h || 30) || 30;
      const gapBase = Math.max(baseGap, maxH + 28);
      const gap = (explicitGap != null) ? Math.max(explicitGap, gapBase) : gapBase;
    
      const n = kids.length;
      const start = -(n - 1) / 2;
      for (let i = 0; i < n; i++) kids[i].x = anchorY + (start + i) * gap;
      parent.x = d3.mean(kids, (k) => k.x); // cha đứng giữa
    };    

    // ---- đặt anchor cho 3 giai đoạn ----
    const rootX0 = L.x;
    const periods = (L.children || []).filter((d) => d.data?.type === "period");
    let p1930 = null, p1945 = null, p1975 = null;
    for (const p of periods) {
      const start = this.periodStartYear(p);
      if (start === 1930) p1930 = p;
      else if (start === 1945) p1945 = p;
      else if (start >= 1975) p1975 = p;
    }
    // 1930: trên, 1945: dưới
    if (p1930) spreadChildrenAdaptive(p1930, rootX0 - periodYOffset, baseChildGap);
    if (p1945) spreadChildrenAdaptive(p1945, rootX0 + periodYOffset, baseChildGap);

    // 1975–nay: adaptive theo số lượng con
    if (p1975) {
      const n = (p1975.children || []).length || 1;
      const avail = (this.height - edgeTop - edgeBot);

      // Nếu chỉ có 2 nhánh lớn -> tách mạnh tay để không chồng vùng cháu
      let desired;
      if (n <= 2) {
        desired = Math.max(220, Math.min(320, avail * 0.65));
      } else {
        desired = Math.min(140, Math.max(90, avail / Math.max(2, n - 1)));
      }
      spreadChildrenAdaptive(p1975, rootX0, baseChildGap, desired);
    }

    // ---- dàn đều cháu (depth=2) ----
    const depth2Nodes = L.descendants().filter(
      (d) => d.depth === 2 && d.children && d.children.length
    );
    const within1975Gap = 54; // gap cháu cho 1975–nay (hẹp gọn)

    // 1) Xử lý riêng cụm 1975–nay: dịch 2 nhánh lớn lên/xuống 3 bước
    const p1975Node = (L.children || []).find(
      (c) => (this.periodStartYear(c) ?? 0) >= 1975
    );

    if (p1975Node) {
      const bigKids = (p1975Node.children || []).filter(
        (c) => c.depth === 2 && c.children && c.children.length
      );

      if (bigKids.length >= 2) {
        bigKids.sort((a, b) => a.x - b.x);
        const topKid = bigKids[0];
        const bottomKid = bigKids[1];

        const offset = within1975Gap * 3; // đẩy 3 bậc

        spreadChildrenAdaptive(topKid, topKid.x - offset, within1975Gap);
        spreadChildrenAdaptive(bottomKid, bottomKid.x + offset, within1975Gap);

        const skipIds = new Set([topKid.data.id, bottomKid.data.id]);
        for (const n of depth2Nodes) {
          if (skipIds.has(n.data.id)) continue;
          const topPeriod = this.getTopPeriodNode(n);
          const is1975 = topPeriod && (this.periodStartYear(topPeriod) ?? 0) >= 1975;
          const gapForThis = is1975 ? within1975Gap : baseGrandGap;
          spreadChildrenAdaptive(n, n.x, gapForThis);
        }
      } else {
        for (const n of depth2Nodes) {
          const topPeriod = this.getTopPeriodNode(n);
          const is1975 = topPeriod && (this.periodStartYear(topPeriod) ?? 0) >= 1975;
          const gapForThis = is1975 ? within1975Gap : baseGrandGap;
          spreadChildrenAdaptive(n, n.x, gapForThis);
        }
      }
    } else {
      for (const n of depth2Nodes) {
        const topPeriod = this.getTopPeriodNode(n);
        const is1975 = topPeriod && (this.periodStartYear(topPeriod) ?? 0) >= 1975;
        const gapForThis = is1975 ? within1975Gap : baseGrandGap;
        spreadChildrenAdaptive(n, n.x, gapForThis);
      }
    }

    // ---- chống va chạm trong từng nhóm con cùng cha ----
    const deep1975Parents = L.descendants().filter((d) => {
      if (!d.children || !d.children.length) return false;
      if (d.depth < 3) return false; // chỉ xử lý các nhánh sâu để tách lá
      const topPeriod = this.getTopPeriodNode(d);
      return topPeriod && (this.periodStartYear(topPeriod) ?? 0) >= 1975;
    });

    const leafGap1975 = 54; // có thể tăng 60–70 nếu muốn dãn hơn
    for (const p of deep1975Parents) {
      spreadChildrenAdaptive(p, p.x, leafGap1975);
    }

    const padY = 10;
    const groupsByParent = d3.group(L.descendants().filter(d => d.parent), d => d.parent.data.id);
    for (const [, kids] of groupsByParent) {
      kids.sort((a, b) => a.x - b.x);
      let last = -Infinity;
      for (const k of kids) {
        const half = (k._h || 30) / 2;
        const minX = last + padY + half;
        if (k.x < minX) k.x = minX;
        last = k.x + half;
      }
      const parent = kids[0].parent;
      const mid = d3.mean(kids, (k) => k.x);
      const shift = parent.x - mid;
      kids.forEach((k) => (k.x += shift));
    }

    // ---- tính khoảng cách NGANG tuyệt đối (né dính theo bề rộng) ----
    if (p1975Node) {
      const branchLevel2 = (p1975Node.children || []).filter(
        (b) => b.depth === 2 && b.children && b.children.length
      );
      const subtreePad = 18; // khoảng cách giữa 2 cụm con

      for (const branch of branchLevel2) {
        const subroots = (branch.children || []).filter(
          (c) => c.children && c.children.length
        );
        if (subroots.length <= 1) continue;

        // sắp xếp từ trên xuống dưới theo vị trí hiện tại
        subroots.sort((a, b) => a.x - b.x);
        let cursor = -Infinity;

        for (const sr of subroots) {
          const nodes = sr.descendants();
          let top = Infinity;
          let bottom = -Infinity;

          // tính biên trên/dưới của cả cụm
          for (const node of nodes) {
            const half = (node._h || 30) / 2;
            const t = node.x - half;
            const btm = node.x + half;
            if (t < top) top = t;
            if (btm > bottom) bottom = btm;
          }

          if (cursor === -Infinity) {
            cursor = bottom;
            continue;
          }

          const minTop = cursor + subtreePad;
          if (top < minTop) {
            const shift = minTop - top;
            nodes.forEach((n) => { n.x += shift; });
            top += shift;
            bottom += shift;
          }

          cursor = bottom;
        }
      }
    }
    const rootW = L._w || this.getNodeWidth(L);
    const depth1MinAbs = (p) => {
      const pw = p._w || 160;
      const extra = 60; // nới hơn để thoáng mép
      return (rootW / 2) + (pw / 2) + padBetweenRootAndPeriod + extra;
    };

    L.each((n) => { n._abs = Math.abs(n.y); });
    L.each((n) => { if (n.depth === 1) n._abs = Math.max(n._abs, depth1MinAbs(n)); });

    const nodesByDepth = d3.group(L.descendants(), (d) => d.depth);
    const sortedDepths = Array.from(nodesByDepth.keys()).sort((a, b) => a - b);
    for (const depth of sortedDepths) {
      if (depth === 0) continue;
      for (const n of nodesByDepth.get(depth)) {
        const side = this.sideOf(n);
        if (n.parent) {
          const parentAbs = n.parent._abs || 0;
          const need = (n.parent._w || 140) / 2 + (n._w || 120) / 2 + padBetweenLevels;
          n._abs = Math.max(n._abs, parentAbs + need);
        }
        n._X = n.x;
        n._Y = side === 0 ? 0 : n._abs * side;
      }
    }
    // root tạm thời
    L._X = L.x; L._Y = 0;

    // ---- Đặt root đúng GIỮA CÁC GIAI ĐOẠN ----
    const periodYs = periods.map((p) => p._X);
    const midOfPeriods = periodYs.length ? (d3.min(periodYs) + d3.max(periodYs)) / 2 : 0;
    const globalShift = -midOfPeriods; // dịch toàn bộ để root nằm giữa
    L.each((n) => { n._X = (n._X ?? 0) + globalShift; });
    L._X = (L._X ?? 0) + globalShift; // root = 0 sau recenter

    // ---- Lưu vị trí cuối cùng (đặt giữa canvas) ----
    const cx = this.width / 2;
    const cy = this.height / 2;
    this.pos = new Map();
    L.each((n) => {
      if (!n.data || typeof n.data.id === "undefined") return;
      this.pos.set(n.data.id, { x: cy + n._X, y: cx + n._Y });
    });
    if (this.root?.data?.id) this.pos.set(this.root.data.id, { x: cy, y: cx }); // root giữa canvas
  }

  /* -------------------- RENDER -------------------- */
  render() {
    this.renderLinks();
    this.renderNodes();
  }

  renderLinks() {
    const links = this.root.descendants().slice(1).filter((d) => d.data && d.data.id)
      .map((d) => ({ source: d.parent, target: d }));

    this.linkGroup = this.g.selectAll(".link-group").data(links, (d) => d.target.data.id);
    const gEnter = this.linkGroup.enter().append("g").attr("class", "link-group");

    gEnter.append("path")
      .attr("class", (d) => `link ${this.getLinkClass(d.target)}`)
      .attr("d", (d) => this.createLinkPathElbow(d))
      .style("stroke-dasharray", "1000")
      .style("stroke-dashoffset", "1000");

    this.linkGroup = gEnter.merge(this.linkGroup);
  }

  renderNodes(){
    const nodes=this.root.descendants().filter(d=>d.data.id);
    this.nodeGroup=this.g.selectAll(".node-group").data(nodes, d=>d.data.id);
    const enter=this.nodeGroup.enter().append("g")
      .attr("class","node-group")
      .attr("transform", d=>{ const p=this.pos.get(d.data.id); return `translate(${p.y},${p.x})`; })
      .call(this.dragHandler())
      .style("opacity",0);

    // chia 2 dòng cân chữ (không cho tự quấn thành 3)
    const toTwoLines = (s) => {
      const words = (s || "").trim().split(/\s+/);
      if (words.length <= 2) return `<span>${s}</span>`; // 1 dòng vẫn OK
      let best = 1, min = Infinity;
      for (let i = 1; i < words.length; i++) {
        const L = words.slice(0, i).join(" ").length;
        const R = words.slice(i).join(" ").length;
        const d = Math.abs(L - R);
        if (d < min) { min = d; best = i; }
      }
      const l1 = words.slice(0, best).join(" ");
      const l2 = words.slice(best).join(" ");
      return `<span class="l1">${l1}</span><br/><span class="l2">${l2}</span>`;
    };

    enter.each((d, i, arr)=>{
      const g=d3.select(arr[i]);
      if(d.data.type==="central"){
        const w=CENTRAL_CARD.width, h=CENTRAL_CARD.height;
        const fo=g.append("foreignObject")
          .attr("x",-w/2).attr("y",-h/2).attr("width",w).attr("height",h)
          .style("overflow","visible");

        const root=fo.append("xhtml:div").attr("class","tilted-card-figure")
          .style("width",`${w}px`).style("height",`${h}px`);
        const inner=root.append("div").attr("class","tilted-card-inner")
          .style("width",`${w}px`).style("height",`${h}px`);

        inner.append("img").attr("class","tilted-card-bg").attr("src",CENTRAL_IMG_SRC).attr("alt","Lịch sử ĐCSVN");

        inner.append("div").attr("class","tilted-card-overlay")
          .append("div").attr("class","tilted-card-title two-lines")
          .html(toTwoLines(d.data.name || "Lịch sử Đảng Cộng sản Việt Nam"));

        // tilt (tắt trên mobile)
        const isTouch=("ontouchstart" in window)||navigator.maxTouchPoints>0;
        if(!isTouch){
          let lastY=0, amp=CENTRAL_CARD.rotateAmplitude, scale=CENTRAL_CARD.scaleOnHover;
          function move(ev){
            const r=ev.currentTarget.getBoundingClientRect();
            const cx=r.left+r.width/2, cy=r.top+r.height/2;
            const ox=ev.clientX-cx, oy=ev.clientY-cy;
            const rx=-(oy/(r.height/2))*amp, ry=(ox/(r.width/2))*amp;
            ev.currentTarget.style.transform=`rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`;
            const vY=oy-lastY;
            const ov=ev.currentTarget.querySelector(".tilted-card-overlay");
            if(ov) ov.style.transform=`translateZ(30px) rotate(${(-vY*0.6)}deg)`;
            lastY=oy;
          }
          function enter(ev){ ev.currentTarget.style.transition="transform 120ms ease"; ev.currentTarget.style.transform=`scale(${scale})`; }
          function leave(ev){ ev.currentTarget.style.transition="transform 200ms ease"; ev.currentTarget.style.transform="rotateX(0deg) rotateY(0deg) scale(1)"; const ov=ev.currentTarget.querySelector(".tilted-card-overlay"); if(ov) ov.style.transform="translateZ(30px) rotate(0deg)"; }
          inner.on("mousemove",move).on("mouseenter",enter).on("mouseleave",leave);
        }
      } else {
        g.append("rect")
          .attr("class", d=>`node ${this.getNodeClass(d)}`)
          .attr("width", d=>this.getNodeWidth(d))
          .attr("height", d=>this.getNodeHeight(d))
          .attr("x", d=>-this.getNodeWidth(d)/2)
          .attr("y", d=>-this.getNodeHeight(d)/2)
          .attr("rx",10).attr("ry",10)
          .on("click",(e,d)=>this.handleNodeClick(e,d))
          .on("mouseover",(e,d)=>this.showTooltip(e,d))
          .on("mouseout",()=>this.hideTooltip());

        g.append("text")
          .attr("class", d=>`node-text ${d.data.type}`)
          .attr("dy","0.35em")
          .text(d=>this.getNodeText(d))
          .style("font-size", d=>this.getTextSize(d))
          .style("pointer-events","none")
          .style("text-anchor","middle");
      }
    });

    this.nodeGroup=enter.merge(this.nodeGroup);
  }

  /* -------------------- DRAG -------------------- */
  dragHandler() {
    const that = this;
    function start() { d3.select(this).raise(); that.g.attr("cursor", "grabbing"); }
    function drag(e, d) {
      const p = that.pos.get(d.data.id);
      p.x += e.dy; p.y += e.dx;
      d3.select(this).attr("transform", `translate(${p.y},${p.x})`);
      that.updateLinksForNode(d);
    }
    function end() { that.g.attr("cursor", "grab"); }
    return d3.drag().on("start", start).on("drag", drag).on("end", end);
  }
  updateLinksForNode(node) {
    this.linkGroup.selectAll("path")
      .filter((l) => l.source.data.id === node.data.id || l.target.data.id === node.data.id)
      .attr("d", (d) => this.createLinkPathElbow(d));
  }

  /* -------------------- STYLE HELPERS -------------------- */
  getNodeClass(d) {
    const type = d.data.type;
    let periodClass = "";
    if (d.data.period) {
      const startYear = parseInt(d.data.period.split("-")[0], 10);
      periodClass = startYear >= 1975 ? "period-1975" : `period-${startYear}`;
    }
    if (type === "central") return "node-central";
    if (type === "period")  return `node-period-${(d.data.period || "").split("-")[0]}`;
    if (type === "sub")     return `node-sub ${periodClass}`;
    if (type === "event")   return `node-event ${periodClass}`;
    return "node-default";
  }
  getLinkClass(target) {
    const period = target.data.period ? target.data.period.split("-")[0] : "";
    if (target.data.type === "period") return `link period-${period}`;
    if (target.data.type === "sub")    return `link-sub period-${period}`;
    if (target.data.type === "event")  return `link-event period-${period}`;
    return "link-default";
  }
  getNodeWidth(d) {
    const text = this.getNodeText(d);
    const base = text.length * 8;
    switch (d.data.type) {
      case "central": return CENTRAL_CARD.width;
      case "period":  return Math.max(160, base + 40);
      case "sub":     return Math.max(140, base + 30);
      case "event":   return Math.max(120, base + 24);
      default:        return Math.max(140, base + 30);
    }
  }
  getNodeHeight(d) {
    switch (d.data.type) {
      case "central": return CENTRAL_CARD.height;
      case "period":  return 44;
      case "sub":     return 36;
      case "event":   return 32;
      default:        return 36;
    }
  }
  getTextSize(d) {
    switch (d.data.type) {
      case "central": return "16px";
      case "period":  return "13px";
      case "sub":     return "11px";
      case "event":   return "10px";
      default:        return "11px";
    }
  }
  getNodeText(d) {
    const name = d.data.name || "";
    if (d.data.type === "central") return name;
    const limit = d.data.type === "period" ? 28 : 22;
    return name.length > limit ? name.slice(0, limit) + "..." : name;
  }

  // Elbow-curve để tránh cắt qua ngôi sao & đỡ chồng chéo
  createLinkPathElbow(d) {
    const s = this.pos.get(d.source.data.id);
    const t = this.pos.get(d.target.data.id);
    const sx = s.y, sy = s.x, tx = t.y, ty = t.x;

    const elbow = 60;            // chiều dài đoạn ngang trước khi bẻ
    const dir = tx > sx ? 1 : -1; // phải/trái
    const hx = sx + dir * elbow;

    return `M${sx},${sy} C${hx},${sy} ${hx},${ty} ${tx},${ty}`;
  }

  /* -------------------- ANIM & UI -------------------- */
  animateEntrance() {
    this.nodeGroup
      .transition().delay((_, i) => i * 60).duration(600)
      .style("opacity", 1)
      .attr("transform", (d) => {
        const p = this.pos.get(d.data.id);
        return `translate(${p.y},${p.x})`;
      });
    this.linkGroup.selectAll(".link")
      .transition().delay((_, i) => i * 40 + 150).duration(800)
      .style("stroke-dashoffset", "0");
  }
  handleZoom(e) {
    this.g.attr("transform", e.transform);
    const zl = document.getElementById("zoom-level");
    if (zl) zl.textContent = Math.round(e.transform.k * 100) + "%";
  }
  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight - 60;
    this.svg.attr("width", this.width).attr("height", this.height);
    this.computeLayoutPositions();
    this.nodeGroup.transition().duration(300)
      .attr("transform", (d) => {
        const p = this.pos.get(d.data.id);
        return `translate(${p.y},${p.x})`;
      });
    this.linkGroup.selectAll(".link").transition().duration(300)
      .attr("d", (d) => this.createLinkPathElbow(d));
  }
  filterByPeriod(periods) {
    const show = new Set(periods.map((p) => p.split("-")[0]));
    this.g.selectAll(".node-group").transition().duration(200)
      .style("opacity", (d) => {
        if (d.data.type === "central") return 1;
        if (!d.data.period) return 1;
        return show.size === 0 || show.has(d.data.period.split("-")[0]) ? 1 : 0.06;
      });
    this.g.selectAll(".link").transition().duration(200)
      .style("opacity", (d) => {
        const tgt = d.target.data;
        if (!tgt.period) return 1;
        return show.size === 0 || show.has(tgt.period.split("-")[0]) ? 0.8 : 0.05;
      });
  }

  /* -------------------- TOOLTIP / DETAIL -------------------- */
  handleNodeClick(event, d) {
    if (event) event.stopPropagation();
    this.g.selectAll(".node").classed("selected", false);
    const g = d3.select(event?.currentTarget?.parentNode || event?.target?.parentNode);
    g.select(".node").classed("selected", true);
    this.selectedNode = d;
    this.showDetailPanel(d);
    this.highlightConnections(d);
  }
  highlightConnections(node) {
    this.g.selectAll(".node").classed("dimmed", true).classed("highlighted", false);
    this.g.selectAll(".link").classed("dimmed", true).classed("highlighted", false);
    const set = new Set([node]);
    if (node.parent) set.add(node.parent);
    (node.children || []).forEach((c) => set.add(c));
    this.g.selectAll(".node-group")
      .classed("highlighted", (d) => set.has(d))
      .classed("dimmed",     (d) => !set.has(d));
    this.g.selectAll(".link")
      .classed("highlighted", (d) => set.has(d.source) && set.has(d.target))
      .classed("dimmed",      (d) => !(set.has(d.source) && set.has(d.target)));
  }
  deselectAll() {
    this.g.selectAll(".node").classed("selected", false);
    this.g.selectAll(".node-group").classed("dimmed", false).classed("highlighted", false);
    this.g.selectAll(".link").classed("dimmed", false).classed("highlighted", false);
    this.selectedNode = null;
    this.hideDetailPanel();
  }
  showDetailPanel(node) {
    const panel = document.getElementById("detail-panel");
    const title = document.getElementById("detail-title");
    const body  = document.getElementById("detail-body");
    if (title) title.textContent = node.data.name;

    let html = "";
    const c = node.data.content;
    if (c?.summary) html += `<h4>Tóm tắt</h4><p>${c.summary}</p>`;
    if (c?.images?.length) {
      html += "<h4>Hình ảnh</h4>";
      c.images.forEach((img) => html += `<img src="${img.url}" alt="${img.caption}"><p><em>${img.caption || ""}</em></p>`);
    }
    if (c?.videos?.length) {
      html += "<h4>Video liên quan</h4>";
      c.videos.forEach((v) => html += `<div class="video-container"><iframe src="https://www.youtube.com/embed/${v.id}" frameborder="0" allowfullscreen></iframe></div>`);
    }
    if (c?.citations?.length) {
      html += "<h4>Nguồn tham khảo</h4>";
      c.citations.forEach((ci) => (html += `<span class="citation">${ci}</span>`));
    }
    if (body) body.innerHTML = html || "<p>Đang cập nhật nội dung...</p>";
    panel?.classList.add("open");
  }
  hideDetailPanel() { document.getElementById("detail-panel")?.classList.remove("open"); }
  showTooltip(event, d) {
    this.tooltip
      .style("opacity", 1)
      .html(`<strong>${d.data.name}</strong><br>${d.data.description || ""}`)
      .style("left", event.pageX + 10 + "px")
      .style("top", event.pageY - 10 + "px");
  }
  hideTooltip() { this.tooltip.style("opacity", 0); }
}

// Utils (nếu nơi khác có dùng)
const InteractionUtils = {
  isTouch() { return "ontouchstart" in window || navigator.maxTouchPoints > 0; },
};
