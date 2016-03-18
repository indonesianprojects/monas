var OBJLoaded, projector = new THREE.Projector();
var cekLight;
var cekLight2;
			var sky, sunSphere,objects = [],texture_placeholder,box;
var griya = {
  scene: null,
  camera: null,
  renderer: null,
  container: null,
  controls: null,
  clock: null,
  stats: null,
  element: null,
  renderer2: null,
  div: null,

  init: function() { // Initialization

    // create main scene
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0xcce0ff, 0.0003);

	
				
    var SCREEN_WIDTH = window.innerWidth,
        SCREEN_HEIGHT = window.innerHeight;

    // prepare camera
    var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 1, FAR = 2000;
    this.camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
    this.scene.add(this.camera);
    this.camera.position.set(0, 100, 300);
    this.camera.lookAt(new THREE.Vector3(0,0,0));

    // prepare renderer
    this.renderer = new THREE.WebGLRenderer({ antialias:true });
    this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    this.renderer.setClearColor(this.scene.fog.color);
    this.renderer.shadowMapEnabled = true;
    this.renderer.shadowMapSoft = true;

    // prepare container
    this.container = document.createElement('div');
    document.body.appendChild(this.container);
    this.container.appendChild(this.renderer.domElement);

    // events
    THREEx.WindowResize(this.renderer, this.camera);
			
    // prepare controls (OrbitControls)
    this.controls = new THREE.OrbitControls(this.camera);
    this.controls.target = new THREE.Vector3(0, 0, 0);
    this.controls.maxDistance = 500;
    this.controls.minDistance = 250;
	this.controls.maxPolarAngle = Math.PI/2.1; 
   this.minPolarAngle = 0; // radians 
   this.maxPolarAngle = Math.PI; // radians
   this.minDistance = 0; 
    // prepare clock
    this.clock = new THREE.Clock();
	
	


    // prepare stats
    this.stats = new Stats();
    this.stats.domElement.style.position = 'fixed';
    this.stats.domElement.style.right = '20px';
    this.stats.domElement.style.top = '20px';
    this.stats.domElement.style.zIndex = 1;
    this.container.appendChild( this.stats.domElement );
	
      

		this.scene2 = new THREE.Scene();
		/*
// Add Sky Mesh
				sky = new THREE.Sky();
				scene.add( sky.mesh );

				// Add Sun Helper
				sunSphere = new THREE.Mesh(
					new THREE.SphereBufferGeometry( 20000, 16, 8 ),
					new THREE.MeshBasicMaterial( { color: 0xffffff } )
				);
				sunSphere.position.y = - 700000;
				sunSphere.visible = false;
				scene.add( sunSphere );
*/
	//HTML
            this.element = document.createElement('div');
            this.element.innerHTML = '<a onclick="addDatGui()">+</a>';
            this.element.className = 'bounceInDown' ; 
            //this.element.style.background = "#0094ff";

            //CSS Object
            this.div = new THREE.CSS3DObject(this.element);
            this.div.position.x = -25;
            this.div.position.y = 75;
            this.div.position.z = 0;
            this.scene2.add(this.div);

            //CSS3D Renderer
            this.renderer2 = new THREE.CSS3DRenderer();
            this.renderer2.setSize(window.innerWidth, window.innerHeight);
            this.renderer2.domElement.style.position = 'absolute';
            this.renderer2.domElement.style.top = 0;
            this.container.appendChild(this.renderer2.domElement);
  // add directional light
 var dLight = new THREE.DirectionalLight(0xb6b6b6, 1.5);
 cekLight=dLight;
 cekLight2=dLight;
    dLight.castShadow = true;
    dLight.position.set(1000, 1500, 500);
    this.scene.add(dLight);
	
	var materials = [

					loadTexture( 'textures/cube/skybox/px.jpg' ), // right
					loadTexture( 'textures/cube/skybox/nx.jpg' ), // left
					loadTexture( 'textures/cube/skybox/py.jpg' ), // top
					loadTexture( 'textures/cube/skybox/ny.jpg' ), // bottom
					loadTexture( 'textures/cube/skybox/pz.jpg' ), // back
					loadTexture( 'textures/cube/skybox/nz.jpg' )  // front

				];

				mesh = new THREE.Mesh( new THREE.BoxGeometry( 1000, 1000, 1000, 50, 50, 50 ), new THREE.MeshFaceMaterial( materials ) );
				mesh.scale.x = - 1;
				box=mesh;
				this.scene.add( mesh );


/*	  
var spotLight = new THREE.SpotLight(0xffffff, 1, 200, 20, 10);
spotLight.position.set( 0, 150, 0 );
  
var spotTarget = new THREE.Object3D();
spotTarget.position.set(0, 0, 0);
spotLight.target = spotTarget;
  
this.scene.add(spotLight);
this.scene.add(new THREE.PointLightHelper(spotLight, 1));
   var spotlight = new THREE.SpotLight(0xffffff);
   spotlight.position.set(0, 1000, 300); 
   spotlight.lookAt(new THREE.Vector3(0,0,0)); 
   this.scene.add(spotlight);
   */

  
    // load a model
    this.loadModel1();
  },
  loadModel1: function() {

    // prepare loader and load the model
	                var texture = THREE.ImageUtils.loadTexture( 'images/UV_Grid_Sm.jpg' );
    var oLoader = new THREE.OBJMTLLoader();
    oLoader.load('models/monasext3.obj', 'models/monasext3.mtl', function(object) {
OBJLoaded=object;
 // for ( var i = 0, l = object.children.length; i < l; i ++ ) {

  //object.children[ i ].material.map = texture;

   // }

	//alert(object.children.length);
      object.position.x = 0;
      object.position.y = -50;
      object.position.z = 0;
      object.scale.set(2, 2, 2);
	  
      griya.scene.add(object);
    objects.push( object.children[ 3 ] );
    });
	
		 
  }
};

function loadTexture( path ) {

				var texture = new THREE.Texture( texture_placeholder );
				var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );

				var image = new Image();
				image.onload = function () {

					texture.image = this;
					texture.needsUpdate = true;

				};
				image.src = path;

				return material;

			}

	  /*
	  
	    var button = OBJLoaded.children[70].material;
            if (button.addEventListener) {  // all browsers except IE before version 9
                button.addEventListener ("mousedown", function () {zoomModel(false, 6);}, false);
                button.addEventListener ("mouseup", function () {zoomModel(true, 6);}, false);
            }*/
	//window.addEventListener( 'mousedown', zoomModel, false,4 );
	//window.addEventListener( 'mousedown', rot(9), false );
document.addEventListener( 'mousedown', onDocumentMouseDowns, false );



function onDocumentMouseDowns( event ){
        event.preventDefault();
        var mouseX = (event.clientX / window.innerWidth)*2-1;
        var mouseY = -(event.clientY /window.innerHeight)*2+1;
        var vector = new THREE.Vector3( mouseX, mouseY,1 );
        projector.unprojectVector( vector, griya.camera );
        var raycaster = new THREE.Raycaster( griya.camera.position, vector.sub(griya.camera.position ).normalize() );
        var intersects = raycaster.intersectObjects( OBJLoaded.children );
		
		//alert(griya.scene.children.length);
        //console.log( intersects[0].point);
  if ( intersects.length > 0 ) {
            _SELECTED_DOWN = true;
			OBJLoaded.children[ 3 ].material.map = griya.texture;
            //alert("selected!");
    }  
//alert(intersects.length);	
    }
	

//GUI
var FizzyText = function() {
var color = 0xffffff;
  this.color0 = "#ffae23"; // CSS string
  this.color1 = [ 0, 128, 255 ]; // RGB array
  this.color2 = [ 0, 128, 255, 0.3 ]; // RGB with alpha
  this.color3 = { h: 350, s: 0.9, v: 0.3 }; // Hue, saturation, value
  this.color4 = color // RGB array

  // Define render logic ...

};

function dec2hex(i) {
  var result = "0x000000";
  if (i >= 0 && i <= 15) { result = "0x00000" + i.toString(16); }
  else if (i >= 16 && i <= 255) { result = "0x0000" + i.toString(16); }
  else if (i >= 256 && i <= 4095) { result = "0x000" + i.toString(16); }
  else if (i >= 4096 && i <= 65535) { result = "0x00" + i.toString(16); }
  else if (i >= 65535 && i <= 1048575) { result = "0x0" + i.toString(16); }
  else if (i >= 1048575 ) { result = '0x' + i.toString(16); }
  //console.log(result);
 return result
} 

		
var Clight = new function() {
this.load=function(){
griya.loadModel1();
}
	this.changelight = function() {
		if (cekLight instanceof THREE.DirectionalLight) {
			alert('THREE.SpotLight'); 
			griya.scene.remove(cekLight2);
				var spotLight = new THREE.SpotLight(0xffffff, 1, 200, 20, 10);
				spotLight.position.set( 0, 150, 0 );
				  
				var spotTarget = new THREE.Object3D();
				spotTarget.position.set(0, 0, 0);
				spotLight.target = spotTarget;
				  
				griya.scene.add(spotLight);
				
				griya.scene.add(new THREE.PointLightHelper(spotLight, 1));
				
			   var spotlight = new THREE.SpotLight(0xffffff);
			   spotlight.position.set(0, 1000, 300); 
			   spotlight.lookAt(new THREE.Vector3(0,0,0)); 
			   griya.scene.add(spotlight);
				cekLight=spotLight;
		}else{ 
			alert('THREE.DirectionalLight');
				 var dLights = new THREE.DirectionalLight(0xffffff, 1.5);
				 cekLight=dLights;
				dLights.castShadow = true;
				dLights.position.set(500, 1000, 500);
			   dLights.lookAt(new THREE.Vector3(0,0,0)); 
				griya.scene.add(dLights);
		}          
	}
}

function addDatGui(){
  var text = new FizzyText();
    var gui = new dat.GUI();
    gui.add(griya.camera.position, 'x', -500,500).step(5);
    gui.add(griya.camera.position, 'y', -500,500).step(5);
    gui.add(griya.camera.position, 'z', 1000,5000).step(5);
    gui.add(griya.div.position, 'x', -500,500).step(5);
    gui.add(griya.div.position, 'y', -500,500).step(5);
    gui.add(griya.div.position, 'z', -500,500).step(5);
    gui.add(Clight, 'changelight');
gui.add(Clight, 'load');
//zoom	
var params = {
    z: 100
}	
gui.add(params, 'z', -500,500).step(5).onChange(function(value){
        changeCameraZ(value);
    });
function changeCameraZ(value){
    griya.camera.position.z = value;
}
//
  gui.add( griya.camera.position , 'z', -500, 500 ).step(5);
gui.addColor( text, 'color4').onChange( function() {
// console.log( box3Config.color1 );
  OBJLoaded.material.color.setHex( dec2hex(text.color4) ); 
  OBJLoaded.material.ambient.setHex( dec2hex(text.color4) ); 
  //alert(dec2hex(text.color4));
} );
gui.addColor( text, 'color4').onChange( function() {
// console.log( box3Config.color1 );
  OBJLoaded.children[8].material.color.setHex( dec2hex(text.color4) ); 
  OBJLoaded.children[8].material.ambient.setHex( dec2hex(text.color4) ); 
  //alert(dec2hex(text.color4));
} );

var controls = new function() {
            this.perspective = "Perspective";
            this.switchCamera = function() {
		  
			   if (griya.camera instanceof THREE.PerspectiveCamera) {
                    griya.camera = new THREE.OrthographicCamera( window.innerWidth / - 16, window.innerWidth / 16, window.innerHeight / 16, window.innerHeight / - 16, -200, 500 );
                    griya.camera.position.x = 2;
                    griya.camera.position.y = 1;
                    griya.camera.position.z = 3;
                    griya.camera.lookAt(scene.position);
                    this.perspective = "Orthographic";
                } else {
                    griya.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
                    griya.camera.position.x = 120;
                    griya.camera.position.y = 60;
                    griya.camera.position.z = 180;

                    griya.camera.lookAt(this.scene.position);
                    this.perspective = "Perspective";
                }
         
			};
        }
        gui.add(controls, 'switchCamera');
        gui.add(controls, 'perspective').listen();
		
}


// Animate the scene
function animate() {
  requestAnimationFrame(animate);
 
  
  render();
  update();
}

// Update controls and stats
function update() {
  griya.controls.update(griya.clock.getDelta());
  griya.stats.update();
}

function rot(nl){
var rotSpeed = nl;
    if (OBJLoaded) 
    { 
        OBJLoaded.rotation.y -= rotSpeed;
        box.rotation.y -= rotSpeed;
		griya.div.rotation.y-=rotSpeed;
    }
}
// Render the scene
function render() {
rot(0.001);
if (griya.renderer) {
   griya.renderer.render(griya.scene, griya.camera);

}  
if (griya.renderer2) {
	griya.renderer2.render(griya.scene2, griya.camera);
}
 
}

function zoomModel(isZoomOut, scale) {
  if(isZoomOut){
      griya.controls.dollyIn(scale);
  }else{
      griya.controls.dollyOut(scale);
  }
}
// Initialize lesson on page load
function initializeLesson() {
  griya.init();
  animate();
}

if (window.addEventListener)
  window.addEventListener('load', initializeLesson, false);
else if (window.attachEvent)
  window.attachEvent('onload', initializeLesson);
else window.onload = initializeLesson;
