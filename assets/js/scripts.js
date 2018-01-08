var canvas = document.querySelector('#canvas');
var width = canvas.offsetWidth,
    height = canvas.offsetHeight;

var renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
});

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 10000);
camera.position.set(0, 0, 300); // center the camera

var light = new THREE.HemisphereLight(0xffffff, 0x182F63, 0.6);
light.position.set(200, 300, 400);
scene.add(light);

var geometry = new THREE.TorusKnotGeometry( 100, 30, 400, 16, 6, 8 );

var material = new THREE.MeshPhongMaterial({
  emissive: 0xFF4747,
  emissiveIntensity: 0.4,
  shininess: 0
})

var shape = new THREE.Mesh(geometry, material);
scene.add(shape);

renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1); // what does this do?
renderer.setSize(width, height);
renderer.setClearColor(0xffffff); // bg color

function rotate() {
  shape.rotation.z = shape.rotation.z + .001;
  // shape.rotation.x = shape.rotation.x + .01;
}

function render(a) {
  requestAnimationFrame(render);
  rotate();
  renderer.render(scene, camera);
}

requestAnimationFrame(render);
