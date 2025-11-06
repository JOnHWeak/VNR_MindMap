// mindmap.js
// Mindmap rendering & interaction with robust non-overlap layout
// - D3 tree layout + per-level collision resolution (1D dodge by rect height)

class VietnameseCommunistPartyMindmap {
    constructor(containerId, data) {
      this.container = d3.select(containerId);
      this.data = data;
  
      this.width = window.innerWidth;
      this.height = window.innerHeight - 60; // trừ header
      this.currentZoom = 1;
      this.selectedNode = null;
  
      // SVG + group
      this.svg = this.container
        .append("svg")
        .attr("id", "mindmap-svg")
        .attr("width", this.width)
        .attr("height", this.height)
        .call(
          d3
            .zoom()
            .scaleExtent([0.25, 3])
            .on("zoom", (event) => this.handleZoom(event))
        )
        .on("click", () => this.deselectAll());
  
      this.g = this.svg.append("g");
  
      // Tooltip
      this.tooltip = d3.select("body").append("div").attr("class", "tooltip");
  
      // khởi tạo
      this.init();
    }
  
    /* ====================== INIT & LAYOUT ====================== */
    init() {
      // dựng hierarchy để giữ parent/children cho interactions
      this.root = d3.hierarchy(this.data);
  
      // Precompute kích thước từng node (cho collision)
      this.root.each((d) => {
        d._w = this.getNodeWidth(d);
        d._h = this.getNodeHeight(d);
      });
  
      // Tính layout + khử va chạm
      this.computeLayoutPositions();
  
      // Vẽ
      this.render();
  
      // Entrance animation (CSS keyframes + transition)
      this.animateEntrance();
    }
  
    // Tạo layout không chồng lấn:
    // 1) dùng d3.tree() cho toàn bộ cây
    // 2) khử va chạm theo từng depth dựa trên chiều cao thực
    computeLayoutPositions() {
      // Tree cơ bản (hướng từ trái sang phải)
      const levelGapX = 200; // Giảm khoảng cách theo trục X
      const levelGapY = 70;  // Giảm khoảng cách dọc
  
      const tree = d3
        .tree()
        .nodeSize([levelGapY, levelGapX])
        .separation((a, b) => (a.parent === b.parent ? 1.1 : 1.6));
  
      // Copy data để layout (không ảnh hưởng this.root)
      const layoutRoot = d3.hierarchy(this.data);
      layoutRoot.each((d) => {
        d._w = this.getNodeWidth(d);
        d._h = this.getNodeHeight(d);
      });
  
      tree(layoutRoot);
  
      // Sau khi tree layout xong, x = dọc, y = ngang (tăng dần theo depth)
      // Khử va chạm theo từng depth: sort theo x, đảm bảo khoảng trống >= (h1/2 + h2/2 + padding)
      const byDepth = d3.group(layoutRoot.descendants(), (d) => d.depth);
      const padY = 12;
  
      for (const [depth, nodes] of byDepth) {
        // root (depth 0) bỏ qua
        if (depth === 0) continue;
  
        // sắp theo x tăng dần
        nodes.sort((a, b) => a.x - b.x);
  
        let lastBottom = -Infinity;
        for (const n of nodes) {
          const half = (n._h || 30) / 2;
          const minX = lastBottom + padY + half;
          if (n.x < minX) n.x = minX;
          lastBottom = n.x + half;
        }
  
        // cân giữa lại cụm level để đỡ bị dồn về 1 phía
        const minX = d3.min(nodes, (n) => n.x - (n._h || 30) / 2);
        const maxX = d3.max(nodes, (n) => n.x + (n._h || 30) / 2);
        const mid = (minX + maxX) / 2;
        const targetMid = d3.mean(nodes, (n) => n.x);
        const shift = targetMid - mid; // nhỏ, chủ yếu để nhìn đều
        nodes.forEach((n) => (n.x += shift));
      }
  
      // Chuẩn hóa toạ độ vào giữa canvas
      const centerX = this.width / 2;
      const centerY = this.height / 2;
  
      // Tạo map id -> {x,y} để render theo this.root (bảo toàn parent/children)
      this.pos = new Map();
      layoutRoot.each((n) => {
        // Căn giữa theo canvas (root ở giữa theo chiều dọc, chiều ngang căn trái/giữa tuỳ depth)
        const X = centerY + n.x; // dọc
        const Y = centerX - 140 + n.y; // đẩy khối sang phải một chút cho dễ nhìn
        this.pos.set(n.data.id, { x: X, y: Y });
      });
  
      // Đảm bảo root đúng giữa (ghi đè)
      this.pos.set(this.root.data.id, { x: centerY, y: centerX });
    }
  
    /* ====================== RENDER ====================== */
    render() {
      this.renderLinks();
      this.renderNodes();
    }
  
    renderLinks() {
      // Tạo danh sách link dựa trên this.root (để còn parent/children)
      const linksData = this.root
        .descendants()
        .slice(1)
        .map((d) => ({ source: d.parent, target: d }));
  
      this.linkGroup = this.g
        .selectAll(".link-group")
        .data(linksData, (d) => d.target.data.id);
  
      const gEnter = this.linkGroup.enter().append("g").attr("class", "link-group");
  
      gEnter
        .append("path")
        .attr("class", (d) => `link ${this.getLinkClass(d.target)}`)
        .attr("d", (d) => this.createLinkPath(d))
        .style("stroke-dasharray", "1000")
        .style("stroke-dashoffset", "1000");
  
      this.linkGroup = gEnter.merge(this.linkGroup);
    }
  
    renderNodes() {
      const nodes = this.root.descendants();
  
      this.nodeGroup = this.g
        .selectAll(".node-group")
        .data(nodes, (d) => d.data.id);
  
      const enter = this.nodeGroup
        .enter()
        .append("g")
        .attr("class", "node-group")
        .attr("transform", (d) => {
          const p = this.pos.get(d.data.id);
          return `translate(${p.y},${p.x})`;
        })
        .style("opacity", 0);
  
      // rect
      enter
        .append("rect")
        .attr("class", (d) => `node ${this.getNodeClass(d)}`)
        .attr("width", (d) => this.getNodeWidth(d))
        .attr("height", (d) => this.getNodeHeight(d))
        .attr("x", (d) => -this.getNodeWidth(d) / 2)
        .attr("y", (d) => -this.getNodeHeight(d) / 2)
        .attr("rx", 10)
        .attr("ry", 10)
        .on("click", (event, d) => this.handleNodeClick(event, d))
        .on("mouseover", (event, d) => this.showTooltip(event, d))
        .on("mouseout", () => this.hideTooltip());
  
      // văn bản
      enter
        .append("text")
        .attr("class", (d) => `node-text ${d.data.type}`)
        .attr("dy", "0.35em")
        .text((d) => this.getNodeText(d))
        .style("font-size", (d) => this.getTextSize(d))
        .style("pointer-events", "none")
        .style("text-anchor", "middle");
  

  
      this.nodeGroup = enter.merge(this.nodeGroup);
    }
  
    /* ====================== HELPERS (SIZE/TEXT/CLASS) ====================== */
    getNodeClass(d) {
      const type = d.data.type;
      let periodClass = "";
      if (d.data.period) {
        const startYear = parseInt(d.data.period.split("-")[0], 10);
        if (startYear >= 1975) {
          periodClass = "period-1975";
        } else {
          periodClass = `period-${startYear}`;
        }
      }

      if (type === "central") return "node-central";
      if (type === "period") return `node-period-${d.data.period.split("-")[0]}`;
      if (type === "sub") return `node-sub ${periodClass}`;
      if (type === "event") return `node-event ${periodClass}`;
      return "node-default";
    }
  
    getLinkClass(targetNode) {
      const period = targetNode.data.period ? targetNode.data.period.split("-")[0] : "";
      if (targetNode.data.type === "period") return `link period-${period}`;
      if (targetNode.data.type === "sub") return `link-sub period-${period}`;
      if (targetNode.data.type === "event") return `link-event period-${period}`;
      return "link-default";
    }
  
    // Ước lượng độ rộng theo số ký tự (nhanh & ổn định)
    getNodeWidth(d) {
      const text = this.getNodeText(d);
      const base = text.length * 8;
      switch (d.data.type) {
        case "central":
          return Math.max(220, base + 60);
        case "period":
          return Math.max(160, base + 40);
        case "sub":
          return Math.max(140, base + 30);
        case "event":
          return Math.max(120, base + 24);
        default:
          return Math.max(140, base + 30);
      }
    }
  
    getNodeHeight(d) {
      switch (d.data.type) {
        case "central":
          return 56;
        case "period":
          return 44;
        case "sub":
          return 36;
        case "event":
          return 32;
        default:
          return 36;
      }
    }
  
    getTextSize(d) {
      switch (d.data.type) {
        case "central":
          return "16px";
        case "period":
          return "13px";
        case "sub":
          return "11px";
        case "event":
          return "10px";
        default:
          return "11px";
      }
    }
  
        getNodeText(d) {
      if (!d.data.name) {
        return ''; // Return an empty string if name is missing
      }
      if (d.data.type === "central") return d.data.name;
      const limit = d.data.type === "period" ? 28 : 22;
      return d.data.name.length > limit ? d.data.name.slice(0, limit) + "..." : d.data.name;
    }
  

  
    /* ====================== PATHS & ANIMATIONS ====================== */
    createLinkPath(d) {
      // Lấy toạ độ đã khử va chạm từ map this.pos
      const s = this.pos.get(d.source.data.id);
      const t = this.pos.get(d.target.data.id);
  
      const sx = s.y,
        sy = s.x;
      const tx = t.y,
        ty = t.x;
  
      // đường cong nhẹ
      const mx = (sx + tx) / 2;
      const my = (sy + ty) / 2;
      return `M${sx},${sy}Q${mx},${my} ${tx},${ty}`;
    }
  
    animateEntrance() {
      this.nodeGroup
        .transition()
        .delay((_, i) => i * 60)
        .duration(600)
        .style("opacity", 1)
        .attr("transform", (d) => {
          const p = this.pos.get(d.data.id);
          return `translate(${p.y},${p.x})`;
        });
  
      this.linkGroup
        .selectAll(".link")
        .transition()
        .delay((_, i) => i * 40 + 150)
        .duration(800)
        .style("stroke-dashoffset", "0");
    }
  
    /* ====================== INTERACTIONS ====================== */
    handleNodeClick(event, d) {
      if (event) event.stopPropagation();
  
      this.g.selectAll(".node").classed("selected", false);
      // target có thể là text/rect => lấy group gần nhất
      const g = d3.select(event?.currentTarget?.parentNode || event?.target?.parentNode);
      g.select(".node").classed("selected", true);
  
      this.selectedNode = d;
  
      // hiển thị panel
      this.showDetailPanel(d);
  
      // highlight liên kết
      this.highlightConnections(d);
    }
  
    highlightConnections(node) {
      this.g.selectAll(".node").classed("dimmed", true).classed("highlighted", false);
      this.g.selectAll(".link").classed("dimmed", true).classed("highlighted", false);
  
      const set = new Set([node]);
      if (node.parent) set.add(node.parent);
      if (node.children) node.children.forEach((c) => set.add(c));
  
      this.g
        .selectAll(".node-group")
        .classed("highlighted", (d) => set.has(d))
        .classed("dimmed", (d) => !set.has(d));
  
      this.g
        .selectAll(".link")
        .classed("highlighted", (d) => set.has(d.source) && set.has(d.target))
        .classed("dimmed", (d) => !(set.has(d.source) && set.has(d.target)));
    }
  
    deselectAll() {
      this.g.selectAll(".node").classed("selected", false);
      this.g.selectAll(".node-group").classed("dimmed", false).classed("highlighted", false);
      this.g.selectAll(".link").classed("dimmed", false).classed("highlighted", false);
      this.selectedNode = null;
      this.hideDetailPanel();
    }
  
    showDetailPanel(nodeData) {
      const panel = document.getElementById("detail-panel");
      const title = document.getElementById("detail-title");
      const body = document.getElementById("detail-body");
  
      title.textContent = nodeData.data.name;
  
      let html = "";
      if (nodeData.data.content) {
        const c = nodeData.data.content;
        if (c.summary) html += `<h4>Tóm tắt</h4><p>${c.summary}</p>`;
        if (c.images && c.images.length) {
          html += "<h4>Hình ảnh</h4>";
          c.images.forEach((img) => {
            html += `<img src="${img.url}" alt="${img.caption}"><p><em>${img.caption || ""}</em></p>`;
          });
        }
        if (c.videos && c.videos.length) {
          html += "<h4>Video liên quan</h4>";
          c.videos.forEach((v) => {
            html += `<div class="video-container">
                        <iframe src="https://www.youtube.com/embed/${v.id}" frameborder="0" allowfullscreen></iframe>
                     </div>`;
          });
        }
        if (c.citations && c.citations.length) {
          html += "<h4>Nguồn tham khảo</h4>";
          c.citations.forEach((ci) => (html += `<span class="citation">${ci}</span>`));
        }
      }
      body.innerHTML = html || "<p>Đang cập nhật nội dung...</p>";
      panel.classList.add("open");
    }
  
    hideDetailPanel() {
      const panel = document.getElementById("detail-panel");
      panel?.classList.remove("open");
    }
  
    showTooltip(event, d) {
      this.tooltip
        .style("opacity", 1)
        .html(`<strong>${d.data.name}</strong><br>${d.data.description || ""}`)
        .style("left", event.pageX + 10 + "px")
        .style("top", event.pageY - 10 + "px");
    }
  
    hideTooltip() {
      this.tooltip.style("opacity", 0);
    }
  
    /* ====================== ZOOM / RESIZE / FILTER ====================== */
    handleZoom(event) {
      this.g.attr("transform", event.transform);
      this.currentZoom = event.transform.k;
      const zl = document.getElementById("zoom-level");
      if (zl) zl.textContent = Math.round(this.currentZoom * 100) + "%";
    }
  
    zoomIn() {
      this.svg
        .transition()
        .duration(250)
        .call(d3.zoom().scaleBy, 1.2);
    }
  
    zoomOut() {
      this.svg
        .transition()
        .duration(250)
        .call(d3.zoom().scaleBy, 0.8);
    }
  
    resetView() {
      this.svg.transition().duration(300).call(d3.zoom().transform, d3.zoomIdentity);
    }
  
    resize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight - 60;
      this.svg.attr("width", this.width).attr("height", this.height);
  
      // Tính lại layout & redraw
      this.computeLayoutPositions();
  
      // Cập nhật node
      this.nodeGroup
        .interrupt()
        .transition()
        .duration(300)
        .attr("transform", (d) => {
          const p = this.pos.get(d.data.id);
          return `translate(${p.y},${p.x})`;
        });
  
      // Cập nhật link
      this.linkGroup
        .selectAll(".link")
        .interrupt()
        .transition()
        .duration(300)
        .attr("d", (d) => this.createLinkPath(d));
    }
  
    // Bật/tắt theo giai đoạn (được Interactions gọi)
    filterByPeriod(periods) {
      // nếu mảng rỗng => ẩn hết
      const showSet = new Set(periods.map((p) => p.split("-")[0]));
  
      // node
      this.g
        .selectAll(".node-group")
        .transition()
        .duration(200)
        .style("opacity", (d) => {
          if (d.data.type === "central") return 1;
          if (!d.data.period) return 1;
          return showSet.size === 0 || showSet.has(d.data.period.split("-")[0]) ? 1 : 0.06;
        });
  
      // link
      this.g
        .selectAll(".link")
        .transition()
        .duration(200)
        .style("opacity", (d) => {
          const tgt = d.target.data;
          if (!tgt.period) return 1;
          return showSet.size === 0 || showSet.has(tgt.period.split("-")[0]) ? 0.8 : 0.05;
        });
    }
  }
  
  // Utils có thể cần ngoài class
  const InteractionUtils = {
    isTouch() {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    },
  };
  
  