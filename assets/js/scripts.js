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


var light2 = new THREE.DirectionalLight(0x763ED1, 0.4);
light2.position.set(200, 300, 400);

scene.add(light, light2);

// shape 1

var geometry1 = new THREE.TorusKnotGeometry( 100, 30, 400, 16, 2, 8 );

var material1 = new THREE.MeshPhongMaterial({
  emissive: 0x5AD95A,
  emissiveIntensity: 0.4,
  shininess: 0
})

var shape1 = new THREE.Mesh(geometry1, material1);
scene.add(shape1);


renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1); // what does this do?
renderer.setSize(width, height);
renderer.setClearColor(0xffffff); // bg color

function rotate(s) {
  s.rotation.z = s.rotation.z + .001;
}

function render(a) {
  requestAnimationFrame(render);
  rotate(shape1);
  renderer.render(scene, camera);
}

function onResize() {
  canvas.style.width = '';
  canvas.style.height = '';
  width = canvas.offsetWidth;
  height = canvas.offsetHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

requestAnimationFrame(render);
var resizeTm;
window.addEventListener("resize", function(){
    resizeTm = clearTimeout(resizeTm);
    resizeTm = setTimeout(onResize, 200);
});
