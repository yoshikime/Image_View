<!DOCTYPE HTML>
<html>
<head>	
	<meta charset="utf-8">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
	<title>Image Scroll Zoom</title>

	<style>
		body {
			margin:0 0 0 0;
		}
		#container {
			width: 800px;
			height: 600px; 
			overflow: hidden;
			border:solid 1px #353535;
		}
		#layer1 {
			width: 150px;
			height:150px;
			border:solid 1px #343434;
			z-index: 999;
		}
	
	</style>
</head>
<body>
	<h2>IMAGE SCROLL ZOOM</h2> 
	<div id="container">
		<a href="#" title="test">
			<img src ="http://static.inven.co.kr/image_2011/tos/dataninfo/map/map_4.jpg" alt="이미지"  id="imagename" class="zooom" style="position:relative"/>
		</a>
	</div>
<script src="imgPop.js"></script>
</body>

</html>
