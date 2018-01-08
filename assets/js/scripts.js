let canvas = document.getElementById('canvas');
let width = canvas.offsetWidth,
    height = canvas.offestHeight;

let renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
renderer.setSize(width, height);
renderer.setClearColor(0xfafafa); // background color
