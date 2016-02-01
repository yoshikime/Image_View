
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
		imgcomp(); 
	}); 	


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
var mode;
//�巡�׽� �̹����� â������ ������ �ʰ� �ϱ����� draggable ������Ʈ�� container ���� �巡�׽ø��� �������ش�.
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
//�̹��� ����� ������ �����ϰ� �巡�׸� Ȱ��ȭ ��Ų��. 
function initializer() {
	img = $("img");
	bgWidth = img.width(); 
	bgHeight = img.height();

	if(bgWidth > 800 && bgHeight > 600) {
	
		$("img").css("cursor", "move");
	}	
}
//���콺��ǥ�� ��ġ�� ���Ѵ�. 
function getCurLoc() {
	
		$("img").on("mousemove", function(e) {
			currentMouseX = e.pageX; 
			currentMouseY = e.pageY;
			curL = parseInt(img.css("left").replace('px',''));
			curT = parseInt(img.css("top").replace('px', ''));		

			//�̹�����ġ�� �������� ���콺 ��ǥ�� ���� 
			lPosition = Math.floor(bgWidth+curL-currentMouseX); 
			tPosition = Math.floor(bgHeight+curT-currentMouseY); 
			//�̹����� ���콺������ ���� ��� 
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


//��ũ�ѽ� �� �� �ƿ� 
function scrollZoom() {
		
		$("img").on('wheel', function(e) {
		
			var delta = e.originalEvent.deltaY;
			curL = parseInt(img.css("left").replace('px',''));
			curT = parseInt(img.css("top").replace('px', ''));
			var ratioW = bgWidth*0.1;
			var ratioH = bgHeight*0.1;				
			var mouseX = ratioW-lPosition*0.1; 
			var mouseY = ratioH-tPosition*0.1; 			

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

function imgcomp() { 
	mode = true; 


}



