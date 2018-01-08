let canvas = document.querySelector('#canvas');
let width = canvas.offsetWidth,
    height = canvas.offsetHeight;

let renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
});

let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 10000);
camera.position.set(0, 0 300);

renderer.setPixelRatio(window.devicePixelRatio > ? 2 : 1); // what does this do?
renderer.setSize(width, height);
renderer.setClearColor(0xffffff);

function render(a) {
  requestAnimationFrame(render);
  // call rotate function
  renderer.render(scene, camera);
}
