<!DOCTYPE HTML>
<html>
<head>	
	<meta charset="utf-8">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
	<title>Image Scroll Zoom</title>

	<style>
		#container {
			border:solid 1px #353535;
			position: relative;
		}
		#container img{
			position:absolute;
			left:0;
			top:0;
		}
		#layer1 {
			width: 150px;
			height:150px;
			/*border:solid 1px #343434;*/
			border-radius: 50%;
			z-index: 999;
			position:absolute;

		}

	
	</style>
</head>
<body>
	<h2>IMAGE ZOOMMER</h2> 
	<div id="container">
		<a href="#" >
			<img src ="http://cdn.shopify.com/s/files/1/0216/0202/products/prs-c24-wl-bo-0851-main_1024x1024.jpg?v=1417629147" alt="이미지"  id="imagename" class="zooom" style="position:relative"/>
		</a>
	</div>
<script src="imgglass.js"></script>
</body>

</html>
