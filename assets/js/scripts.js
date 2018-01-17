// SET UP

var canvas = document.querySelector("#canvas");
var width = canvas.offsetWidth,
	height = canvas.offsetHeight;

var renderer = new THREE.WebGLRenderer({
	canvas: canvas,
	antialias: true
});

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 10000);
camera.position.set(0, 0, 300); // center the camera

var light = new THREE.HemisphereLight(0xffffff, 0x182f63, 0.6);
light.position.set(200, 300, 400);

var light2 = new THREE.DirectionalLight(0x763ed1, 0.4);
light2.position.set(200, 300, 400);

scene.add(light, light2);

renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1); // what does this do?
renderer.setSize(width, height);
renderer.setClearColor(0xffffff); // bg color

// INSTANTIATE SHAPE

var geometry1 = new THREE.TorusKnotGeometry(100, 30, 400, 16, 2, 8);

var material1 = new THREE.MeshPhongMaterial({
	emissive: 0x5ad95a,
	emissiveIntensity: 0.4,
	shininess: 0
});

var shape1 = new THREE.Mesh(geometry1, material1);

scene.add(shape1);

// FUNCTIONS

// This function calles the changeColor function when the mouse moves into a quadrant of the screen. The quadrants are just +/- 500 x or y which is basically arbitrary but is good for medium size computers. I could change this to be based on screenheight and width which would be way better. Wow I should definitely do that

function onMouseMove(e) {
	var color1 = new THREE.Color(0x06263b);
	var color2 = new THREE.Color(0xa8f9ff);
	var color3 = new THREE.Color(0x5ad95a);
	var color4 = new THREE.Color(0xc2b2b4);

	if (e.clientX < 500 && e.clientY < 500) {
		changeColor(color1);
	} else if (e.clientX > 500 && e.clientY < 500) {
		changeColor(color2);
	} else if (e.clientX < 500 && e.clientY > 500) {
		changeColor(color3);
	} else if (e.clientX > 500 && e.clientY > 500) {
		changeColor(color4);
	}
}

// This uses GSAP to tween to a different rgb color value for emissive property of the material of the shape

function changeColor(c) {
	TweenMax.to(material1.emissive, 4, {
		r: c.r,
		g: c.g,
		b: c.b
	});
}

function rotate(s, increment) {
	s.rotation.z = s.rotation.z + increment;
}

// This is the main function to handle rendering the animation

function render(a) {
	requestAnimationFrame(render);
	rotate(shape1, 0.001);
	renderer.render(scene, camera);
}

// This is a really handy function for handling responsiveness for the canvas

function onResize() {
	canvas.style.width = "";
	canvas.style.height = "";
	width = canvas.offsetWidth;
	height = canvas.offsetHeight;
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
	renderer.setSize(width, height);
}

// All this stuff is for responsiveness

requestAnimationFrame(render);
window.addEventListener("mousemove", onMouseMove);
var resizeTm;
window.addEventListener("resize", function() {
	resizeTm = clearTimeout(resizeTm);
	resizeTm = setTimeout(onResize, 200);
});
