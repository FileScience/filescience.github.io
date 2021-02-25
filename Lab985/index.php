<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">		
		<meta charset="UTF-8">
		<style>
			body {
				margin: 0;
				overflow-x:hidden;
				font-family: Verdana, Arial, Helvetica, sans-serif;
			}
			.topnav, .row.hasnav {
				overflow: hidden;
				min-height: 20vh;
			}
			.topnav a {
				display: inline-block;
				color: white;
				text-align: center;
				padding: 14px 16px;
				text-decoration: none;
				font-size: 16px;
				font-weight:700;
				vertical-align: middle;
			}
			.nav.navlink.whitebtn {
				background-color: white;
				border-radius: 10px;
				color: black;
			}
			.topnav a:hover {
			font-weight: bold;
			}
			.topnav a.active {
			background-color: #4CAF50;
			color: white;
			}
			.topnav .icon {
			display: none;
			}
			@media screen and (max-width: 900px) {
			.topnav a:not(:last-child) {display: none;}
			.topnav a.icon {
			float: right;
			display: block;
			}
			}
			@media screen and (max-width: 900px) {
			.topnav.responsive {position: relative;}
			.topnav.responsive .icon {
			position: absolute;
			right: 30px;
			top: 30px;
			}
			.topnav.responsive a {
			float: none;
			display: block;
			text-align: left;
			}
			}
			.col-1 {width: 8.33%;}
			.col-2 {width: 16.66%;}
			.col-3 {width: 25%;}
			.col-4 {width: 33.33%;}
			.col-5 {width: 41.66%;}
			.col-6 {width: 50%;}
			.col-7 {width: 58.33%;}
			.col-8 {width: 66.66%;}
			.col-9 {width: 75%;}
			.col-10 {width: 83.33%;}
			.col-11 {width: 91.66%;}
			.col-12 {width: 100%;} 
			[class*="col-"] {
			float: left;
			} 
			.white {
			color: white;
			}
			.bolder {
			font-weight:bolder;
			}
			.titleContainer {
			padding: 30px;
			}
			.titleContainer h1 {
				font-size: max(3.7vw, 26px);
			}
			#gif_1 {
			padding: 30px;
			text-align: center;
			
			}
			#gif_1 img {
			width:80%;
			}
			.thin {
			font-weight: lighter;
			font-size: 16px;
			}
			.navimage {
			float: left;
			}
			.navlinks {
			float: right;
			padding: 30px;
			}
			.row.fullheight {
				min-height:100vh;
			}
			.bigh2 {
			font-size:42px;
			}
			.padding-x-30 {
				padding-right:30px;
				padding-left:30px;
			}
			.fontsize21 {
				font-size:21px;
			}
			.fontsize17 {
				font-size:17px;
			}
			.padding-top-10 {
				padding-top:10%;
			}
			.width100 {
				width:100%;
			}
			.width50 {
				width:50%;
			}
			.container_1 {
				padding:30px;
			}
			a.nounderline {
				text-decoration: none;
			}
			.fifth {
				width:20%;
				float:left;
			}
			.third {
				width:33.33%;
				float:left;
			}
			.center {
				text-align:center;
			}
			.left {
				text-align:left;
			}
			.right {
				text-align:right;
			}
			.inline-block {
				display:inline-block;
			}
			.padding-top-100 {
				padding-top:100px;
			}
			.white-border {
				border: 3px solid white;
				border-radius:10px;
			}
			.padding-10 {
				padding:10px;
			}
			.btn {
				border-radius:5px;
				padding:10px;
				font-size:21px;
				font-weight:bolder;
			}
			.white-bg {
				background-color:white;
			}
			.purple-text {
				color: #E05983;
			}
			.width67 {
				width:67%;
			}
			.padding-30 {
				padding:30px;
			}
			.softborder div {
				border-radius:10px;
			}
			.width80 {
				width:80%;
			}
			input {
				padding-top: 10px;
				padding-bottom: 10px;
				width: 50%;
				text-align: center;
				margin-bottom: 10px;
				border-radius: 10px;
				color: white;
				background-color: transparent;
				border: 3px solid white;
			}
			.floatleft {
				float:left;
			}
			.footer {
				background-color: #1D1B40;
				min-height:33vh;
				display:inline-block;
				min-width:100%;
			}
			.noxmargin p {
				margin-top:0;
				margin-bottom:0;
			}
			.nopadding {
				padding-left:5px;
			}
			.nopadding.noxmargin p a {
				text-decoration: none;
			}
			.nopadding.noxmargin p a:hover {
				text-decoration: underline;
			}
			@media screen and (max-width:900px) {
				.col-6, .col-3, .col-5, .col-7, .footer .col-4, .third, .fifth, div.width50.funnel {
				  width: 100%;
				}
				.width80 {
				  width: 100%
				}
				#gif_1 {
				  padding:0;
				}
				#gif_1  img {
				  width: 100%;
				}
				.responsive .navlinks, .responsive .navlinks a:not(:last-child) {
				  width: 80%;
				  text-align: center;
				}
				.navlinks a.icon {
				  font-size: 24px;
				  padding:0px;
				}
			}
			@media screen and (max-width:900px) {
				html {
					background-color:black;
				}
				body {
					background: url('https://filescience.io/Lab985/media/m.svg') no-repeat right center black;
					background-size:contain;
					display:table;
					background-position-y: 80%;
				}
				.logo img{
					max-width:40vw;
				}
				.fontsize17 {
					font-size: 14px;
				}
				
				
			}
			@media screen and (min-width:901px) {
				html {
					background-color:black;
				}
				body {
					background: url('https://filescience.io/Lab985/media/d.svg') no-repeat right center black;
					background-size:cover;
					display:table;
					background-position-y: 75%;
				}
				.logo img{
					max-width:20vw;
				}
				.fontsize17 {
					font-size: 1.25vw;
				}
				img.width50 {
					width:30%;
					padding-top:20%;
				}
			}
		</style>
	</head>
	<body>
		<div class="row fullheight padding-x-30 Single985">
			<div class="col-6">
				<div class="titleContainer">
					<img class="width50" loading="lazy" src="https://filescience.io/Lab985/media/t.svg" />
				</div>
				<div class="titleContainer">
					<p class="white bolder fontsize17 p985 first">Lab985 - Founded to develop radically new technologies to solve some of the world's most difficult problems.</p>
					<p class="white fontsize17 p985">985 is a diverse group of inventors and strategists who build and launch solutions that will drastically alter the current world. Our goal: 50x impact on the world's most intractable problems. We approach projects that have the aspiration and riskiness of research with the speed and ambition of a startup.</p>
				</div>
			</div>
			<div class="col-6" style="">
				
			</div>
		</div>
		<a class="logo" href="https://filescience.io"><img src="https://filescience.io/Lab985/media/l.svg" style="position: fixed;top: 10px;right: 10px;"></a>
		<script>
			function myFunction() {
			  var x = document.getElementById("myTopnav");
			  if (x.className === "topnav") {
			    x.className += " responsive";
			  } else {
			    x.className = "topnav";
			  }
			}
		</script>
	</body>
</html>

