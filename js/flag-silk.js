
// Vanilla Three.js silk background (port of reactbits 'Silk'), fixed behind app.
(function initSilkFlag(){
  if (document.querySelector('.vn-flag-silk')) return;

  // === Container
  const host = document.createElement('div');
  host.className = 'vn-flag-silk';
  host.setAttribute('aria-hidden','true');
  document.body.prepend(host);

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduced.matches){ host.dataset.reduced = '1'; }

  // === Require THREE from CDN if not present
  function ensureThree(cb){
    if (window.THREE) return cb();
    const s = document.createElement('script');
    s.src = 'https://unpkg.com/three@0.160.0/build/three.min.js';
    s.onload = cb;
    document.head.appendChild(s);
  }

  ensureThree(() => {
    const THREE = window.THREE;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    host.appendChild(renderer.domElement);

    // Scene & camera (screen-space quad)
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // Shaders (ported)
    const vertexShader = `
      varying vec2 vUv;
      void main(){
        vUv = uv;
        gl_Position = vec4(position,1.0);
      }
    `;

    const fragmentShader = `
      varying vec2 vUv;
      uniform float uTime;
      uniform vec3  uColor;
      uniform float uSpeed;
      uniform float uScale;
      uniform float uRotation;
      uniform float uNoiseIntensity;

      const float e = 2.71828182845904523536;

      float noise(vec2 texCoord) {
        float G = e;
        vec2  r = (G * sin(G * texCoord));
        return fract(r.x * r.y * (1.0 + texCoord.x));
      }

      vec2 rotateUvs(vec2 uv, float angle) {
        float c = cos(angle);
        float s = sin(angle);
        mat2  rot = mat2(c, -s, s, c);
        return rot * uv;
      }

      void main() {
        float rnd        = noise(gl_FragCoord.xy);
        vec2  uv         = rotateUvs(vUv * uScale, uRotation);
        vec2  tex        = uv * uScale;
        float tOffset    = uSpeed * uTime;

        tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

        float pattern = 0.6 +
                        0.4 * sin(5.0 * (tex.x + tex.y +
                                         cos(3.0 * tex.x + 5.0 * tex.y) +
                                         0.02 * tOffset) +
                                 sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

        vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
        col.a = 1.0;
        gl_FragColor = col;
      }
    `;

    // Material uniforms — tuned for dark red silk
    const uniforms = {
      uSpeed: { value: 5.0 },
      uScale: { value: 1.0 },
      uNoiseIntensity: { value: 1.4 },
      uColor: { value: new THREE.Color('#8d1010') }, // deep red
      uRotation: { value: 0.0 },
      uTime: { value: 0.0 }
    };

    const mat = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      depthTest: false,
      depthWrite: false
    });

    const geo = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    // Yellow star overlay (SVG)
    const starWrap = document.createElement('div');
    starWrap.className = 'vn-flag-star';
    starWrap.innerHTML = `
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <polygon points="50,12 60,40 90,40 65,58 74,86 50,70 26,86 35,58 10,40 40,40"
                 fill="#FFCD00"/>
      </svg>`;
    host.appendChild(starWrap);

    // Animation loop
    let t0 = performance.now();
    function animate(now){
      if (reduced.matches){ return; }
      const dt = (now - t0) / 1000;
      t0 = now;
      uniforms.uTime.value += 0.1 * dt;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    // Resize
    function onResize(){
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    }
    window.addEventListener('resize', onResize);

    // Public quick-tune API (optional)
    window.__SilkFlag = {
      setColor: (hex) => { uniforms.uColor.value = new THREE.Color(hex); },
      setSpeed: (v) => { uniforms.uSpeed.value = v; },
      setNoise: (v) => { uniforms.uNoiseIntensity.value = v; },
      setRotation: (rad) => { uniforms.uRotation.value = rad; },
      setScale: (s) => { uniforms.uScale.value = s; }
    };
  });
})();
