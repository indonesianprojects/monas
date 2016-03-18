$(function() 
{
	/*
	$("#infoBox")
	.css( 
	{
	   "background":"rgba(255,255,255,0.5)"
	})
	.dialog({ autoOpen: false, 
		show: { effect: 'fade', duration: 500 },
		hide: { effect: 'fade', duration: 500 } 
	});
*/	
	 $("#infoButton")
       .text("") // sets text to empty
	.css(
	{ "z-index":"2",
	  "background":"rgba(0,0,0,0)", "opacity":"0.9", 
	  "position":"absolute", "top":"4px", "left":"4px"
	}) // adds CSS
    .append("<button>Home</button>")
    .button()
	.click( 
		function() 
		{ 
			$("#infoBox").dialog("open");
		});
		
		//------button 2----
	$("#infoButton2")
       .text("") // sets text to empty
	.css(
	{ "z-index":"2",
	  "background":"rgba(0,0,0,0)", "opacity":"0.9", 
	  "position":"absolute", "top":"40px", "left":"4px"
	}) // adds CSS
    .append("<button>Zoom +</button>")
    .button()
.click( 
		function() 
		{ 
			 zoomModel(true, 2);
  //zoomModel(false, 4);
		});	
		
			//------button 3----
	$("#infoButton3")
       .text("") // sets text to empty
	.css(
	{ "z-index":"2",
	  "background":"rgba(0,0,0,0)", "opacity":"0.9", 
	  "position":"absolute", "top":"80px", "left":"4px"
	}) // adds CSS
    .append("<button>Zoom -</button>")
    .button()
.click( 
		function() 
		{ 
			 zoomModel(false, 4);
		});		
		
		
		
		//------wrn1 ----
	$("#infoButton4")
       .text("") // sets text to empty
	.css(
	{ "z-index":"2",
	  "background":"#FFB380", "opacity":"0.9", 
	  "position":"absolute", "top":"120px", "left":"4px"
	}) // adds CSS
    .append("<button>COKELAT</button>")
    .button()
.click( 
		function() 
		{ 
  OBJLoaded.children[70].material.color.setHex( 0xffb380); 
  OBJLoaded.children[70].material.ambient.setHex( 0xffb380 ); 
  //zoomModel(false, 4);
		});	
		
		
			//------wrn2 ----
	$("#infoButton5")
       .text("") // sets text to empty
	.css(
	{ "z-index":"2",
	  "background":"rgba(0,0,0,0)", "opacity":"0.9", 
	  "position":"absolute", "top":"180px", "left":"4px"
	}) // adds CSS
    .append("<button>HIJAU </button>")
    .button()
.click( 
		function() 
		{ 
  OBJLoaded.children[70].material.color.setHex( 0x99FF66); 
  OBJLoaded.children[70].material.ambient.setHex( 0x99FF66 ); 
  //zoomModel(false, 4);
		});	
			//------wrn1 ----
	$("#infoButton6")
       .text("") // sets text to empty
	.css(
	{ "z-index":"2",
	  "background":"rgba(0,0,0,0)", "opacity":"0.9", 
	  "position":"absolute", "top":"220px", "left":"4px"
	}) // adds CSS
    .append("<button>BIRU</button>")
    .button()
.click( 
		function() 
		{ 
  OBJLoaded.children[70].material.color.setHex( 0x99CCFF); 
  OBJLoaded.children[70].material.ambient.setHex( 0x99CCFF ); 
  //zoomModel(false, 4);
		});	
			//------wrn1 ----
	$("#infoButton7")
       .text("") // sets text to empty
	.css(
	{ "z-index":"2",
	  "background":"rgba(0,0,0,0)", "opacity":"0.9", 
	  "position":"absolute", "top":"260px", "left":"4px"
	}) // adds CSS
    .append("<button>ROSE</button>")
    .button()
.click( 
		function() 
		{ 
  OBJLoaded.children[70].material.color.setHex( 0xFF9999); 
  OBJLoaded.children[70].material.ambient.setHex( 0xFF9999 ); 
  //zoomModel(false, 4);
		});	
			
});



