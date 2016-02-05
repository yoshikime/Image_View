
$(function(){
	initializer();	
	
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
var zlPosition, ztPosition;


var mode = 1, html;

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
			
			//0.0 를 기준으로 이미지 마우스 좌표 설정.
			zlPosition = -(Math.floor(currentMouseX/2)+currentMouseX); 
			ztPosition = -(Math.floor(currentMouseY/2)+currentMouseY)+80;
						
		});

}



function imgcomp(title) { 
	mode = 1 - mode; 
	//console.log(mode);
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
	if(mode == 1){
		getCurLoc();			
		$("img").css("cursor", "none");		
		$(title).css({
			"left": currentMouseX+5,
			"top": currentMouseY+5,
			"display": "block",
			"background-image": "url("+$(document).find('img').attr('src')+")",
			"background-position": "left "+Math.floor(zlPosition)+"px "+"top "+Math.floor(ztPosition)+"px",
			"cursor":"none",
			"background-size": bgWidth+Math.floor(bgWidth/2)+"px "+parseInt(bgHeight+Math.floor(bgHeight/2))+"px",
			"background-repeat": "no-repeat"

		});
	}
	else {
		console.log('false');
	}	
}



