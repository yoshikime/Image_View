
$(function(){
	initializer();	
	//scrollZoom();

	/*$('img').draggable(
		{
	    distance: 3,
	    revert: false,
	    scroll: false,
	    drag: getSize,
	    containment: [wrapperOffset.left - bgConwrapperX,
	        wrapperOffset.top - bgConwrapperY,
	        wrapperOffset.left,
	        wrapperOffset.top]
	   	});
	*/
	getCurLoc();

	$('img').dblclick(function(){
		imgcomp('layer1'); 
	}); 	
	$('img').on('mousemove', function() {			
			layerInit('#layer1');		
	})
	$('img').on('mouseleave', function() {
		layerHide('#layer1');
	})


})

var img;
var currentMouseX = null;currentMouseY = null; lPosition = null; tPosition = null; bgWidth = null; bgHeight = null; 
var curL = null; curT = null;
var wrapperOffset = $("#container").offset();
var bgConwrapperX, bgConwrapperY;
var container = $("#container");
var bgConwrapperX = 0; 
var bgConwrapperY = 0;
var mTerritoryX = 0; 
var mTerritoryY = 0;
var conWidth = container.css("width", bgWidth);
var conHeight = container.css("height", bgHeight);
var mode = 1, html;
//드래그시 이미지가 창밖으로 나가지 않게 하기위해 draggable 오브젝트의 container 값을 드래그시마다 지정해준다.
function getSize(){
	if (bgWidth <= container.width()){
		bgConwrapperX = 0;
	}
	else if(bgWidth > container.width()){
		bgConwrapperX = bgWidth-container.width();
	}


	if (bgHeight <= container.height()){
		bgConwrapperY = 0;
	}
	else if(bgHeight > container.height()){
		bgConwrapperY = bgHeight-container.height();
	}
	img.data('uiDraggable').containment[0] = wrapperOffset.left - bgConwrapperX;
	img.data('uiDraggable').containment[1] = wrapperOffset.top - bgConwrapperY;
}
//이미지 사이즈를 변수에 지정하고 드래그를 활성화 시킨다. 
function initializer() {
	img = $("img");
	bgWidth = img.width(); 
	bgHeight = img.height();
	$("img").css("cursor", "default");

	/*if(bgWidth > 800 && bgHeight > 600) {
	
		
	}*/	
}
//마우스좌표의 위치를 구한다. 
function getCurLoc() {
	
		$("img").on("mousemove", function(e) {
			currentMouseX = e.pageX; 
			currentMouseY = e.pageY;

			curL = parseInt(img.css("left").replace('px',''));
			curT = parseInt(img.css("top").replace('px', ''));		

			var fixX = bgWidth/2;
			var fixY = bgHeight/2;
			//0.0 를 기준으로 이미지 마우스 좌표 설정.
			zlPosition = -(Math.floor(currentMouseX/2)+currentMouseX); 
			ztPosition = -(Math.floor(currentMouseY/2)+currentMouseY)+100;
						
		});

}



function imgcomp(title) { 
	mode = 1 - mode; 
	console.log(mode);
	if(mode == 1){
	html = "<div id='"+title+"'style='display:none;'></div>";
	$("body").append(html);
	}
	else {
	 	layerHide(title);
	 	$("img").css("cursor", "default");
	} 
	//layerShow("#"+title); 
}


function layerHide(title){
		$(title).hide();	
}

function layerInit(title) {
	//mode = 1 - mode;
	//console.log("2nd mode:" + mode);
	if(mode == 1){
		getCurLoc();			
		$("img").css("cursor", "none");
		var style = {
			left: currentMouseX+10,
			top: currentMouseY+10, 
			display:"block", 
			backgroundimage: "url("+$(document).find('img').attr('src')+")"
			
		};
		//console.log(mouseX, mouseY); 
		$(title).css({
			"left": currentMouseX+5,
			"top": currentMouseY+5,
			"display": "block",
			"background-image": "url("+$(document).find('img').attr('src')+")",
			"background-position": "left "+Math.floor(zlPosition)+"px "+"top "+Math.floor(ztPosition)+"px",
			"cursor":"none",
			"background-size": bgWidth+Math.floor(bgWidth/2)+"px "+parseInt(bgHeight+Math.floor(bgHeight/2))+"px"		
		});
	}
	else {
		console.log('false');
	}	
}



