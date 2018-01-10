var canvas = document.querySelector('#canvas');
var width = canvas.offsetWidth,
    height = canvas.offsetHeight;

var renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
});

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 100, width / height, 0.1, 10000 );
camera.position.set( 0, 0, 300 ); // center the camera

var light = new THREE.HemisphereLight( 0xffffff, 0x182F63, 0.6 );
light.position.set( 200, 300, 400 );


var light2 = new THREE.DirectionalLight( 0x763ED1, 0.4 );
light2.position.set(200, 300, 400);

scene.add( light, light2 );

// shape 1

var geometry1 = new THREE.TorusKnotGeometry( 100, 30, 400, 16, 2, 8 );

var material1 = new THREE.MeshPhongMaterial({
  emissive: 0x5AD95A,
  emissiveIntensity: 0.4,
  shininess: 0
})

var shape1 = new THREE.Mesh( geometry1, material1 );
scene.add(shape1);


renderer.setPixelRatio( window.devicePixelRatio > 1 ? 2 : 1 ); // what does this do?
renderer.setSize( width, height );
renderer.setClearColor( 0xffffff ); // bg color

function rotate(s, increment) {
  s.rotation.z = s.rotation.z + increment;
}

function render(a) {
  requestAnimationFrame(render);
  rotate(shape1, .001);
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

function onMouseMove(e) {
  console.log(e.clientX, e.clientY);
  if ( e.clientX < 500  && e.clientY < 500 ) {
    changeLightColor('red');
  } else if ( e.clientX > 500 && e.clientY < 500 ) {

  } else if ( e.clientX < 500 && e.clientY > 500 ) {

  } else if ( e.clientX > 500 && e.clientY > 500 ) {

  }
}

function changeLightColor (value){
    var initial = new THREE.Color(light2.color.getHex());

    var value = new THREE.Color(value.color.getHex());

    TweenMax.to(initial, 1, {
      r: value.r,
      g: value.g,
      b: value.b,
      ease: Cubic.easeInOut,
      onUpdate: function() { light2.color = initial; }
    });
}

requestAnimationFrame(render);
window.addEventListener("mousemove", onMouseMove);
var resizeTm;
window.addEventListener("resize", function(){
    resizeTm = clearTimeout(resizeTm);
    resizeTm = setTimeout(onResize, 200);
});
