
$(function(){
	initializer();	
	scrollZoom();

	$('img').draggable(
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
var mode, html, mouseX,mouseY;
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

	if(bgWidth > 800 && bgHeight > 600) {
	
		$("img").css("cursor", "move");
	}	
}
//마우스좌표의 위치를 구한다. 
function getCurLoc() {
	
		$("img").on("mousemove", function(e) {
			currentMouseX = e.pageX; 
			currentMouseY = e.pageY;
			curL = parseInt(img.css("left").replace('px',''));
			curT = parseInt(img.css("top").replace('px', ''));		

			//이미지위치를 기준으로 마우스 좌표를 설정 
			lPosition = Math.floor(bgWidth+curL-currentMouseX); 
			tPosition = Math.floor(bgHeight+curT-currentMouseY); 
			//0.0 를 기준으로 이미지 마우스 좌표 설정.
			zlPosition = Math.floor(curL-currentMouseX); 
			ztPosition = Math.floor(curT-currentMouseY);  

			//이미지위 마우스영역에 따른 계산 
			if(currentMouseX < container.width()*0.5) {
				mTerritoryX = -currentMouseX*0.1-10;				
			}
			else if(currentMouseX > container.width()*0.5) {
				mTerritoryX = 0;
			}
			if(currentMouseY < container.height()*0.5) {
				mTerritoryY = -currentMouseY*0.1-10
			}	
			else if(currentMouseY > container.height()*0.5) {
				mTerritoryY = 0;
			}	
						
		});

}


//스크롤시 줌 인 아웃 
function scrollZoom() {
		
		$("img").on('wheel', function(e) {
		
			var delta = e.originalEvent.deltaY;
			curL = parseInt(img.css("left").replace('px',''));
			curT = parseInt(img.css("top").replace('px', ''));
			var ratioW = bgWidth*0.1;
			var ratioH = bgHeight*0.1;				
			mouseX = ratioW-lPosition*0.1; 
			mouseY = ratioH-tPosition*0.1; 			

			if (delta > 0) {			
				if (bgWidth >850) {					
						img.css("width",(bgWidth = bgWidth - ratioW)+"px");
						img.css("height",(bgHeight = bgHeight- ratioH)+"px");

						if (curT < 0 || curL < 0) {
							img.css("left", (curL += mouseX-mTerritoryX)+"px");
							img.css("top", (curT += mouseY-mTerritoryY)+"px");							
						}
						if (bgWidth < 850) {
							img.position({
							"at": "left top",
							"of": $("#container"),
							"collision": "fit"
							});	
						}								
										
				}

			}
			else {
				if(bgWidth < 3000) {	
						img.css("width", (bgWidth = bgWidth + ratioW)+"px");
						img.css("height", (bgHeight = bgHeight + ratioH)+"px");
						img.css("left", (curL -= mouseX+mTerritoryX)+"px");
						img.css("top", (curT -= mouseY+mTerritoryY)+"px");				
				}
			}
		});

		
}

function imgcomp(title) { 
	mode = true; 
	html = "<div id='"+title+"'style='display:none;'>test</div>";
	$("body").append(html); 
	//layerShow("#"+title); 
}


function layerHide(title){
	if (mode == true) {
		$(title).hide();
	}
}

function layerInit(title) {
		getCurLoc();	
		var style = {
			left: currentMouseX+10,
			top: currentMouseY+10, 
			display:"block", 
			backgroundimage: "url("+$(document).find('img').attr('src')+")" 
		};
		//console.log(mouseX, mouseY); 
		$(title).css({
			"left": currentMouseX+10,
			"top": currentMouseY+10,
			"display": "block",
			"background-image": "url("+$(document).find('img').attr('src')+")",
			"background-position": "left "+Math.floor(zlPosition)+"px "+"top "+Math.floor(ztPosition)+"px"
		});	
}



