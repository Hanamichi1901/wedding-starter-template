const color = [
	{
		name:'pink',
		code:'#fb839e',
		url:'css/skins/pink.css'
	},
	{
		name:'light blue',
		code:'#3e99f4',
		url:'css/skins/light-blue.css'
	},
	{
		name:'light green',
		code:'#3e99f4',
		url:'css/skins/light-green.css'
	},
	{
		name:'red',
		code:'#cc3a3b',
		url:'css/skins/red.css'
	},
	{
		name:'yellow',
		code:'#ff9801',
		url:'css/skins/yellow.css'
	},
]

$(document).ready(function () {
	setColors();
	function setColors(){
		for(let i=0; i<color.length; i++){
			const span = document.createElement("span");
				  span.style.backgroundColor = color[i].code;
				  $(".colors").append(span);
		}
	}

	$(".colors span").click(function(){
		const index = $(this).index();
		$(".alternate-style").attr("href",color[index].url);
	})
	// Theme Light & Dark Mode 
	$(".theme-mode").change(function(){
		if($(this).val() == "light"){
			$("body").removeClass("dark")
		}
		else {
			$("body").addClass("dark")
		}
	})
	// Toggle Setting Box
	$(".s-toggle-btn").click(function(){
		$(".setting").toggleClass("open");
	})
	// Audio
	$(".m-toggle-btn").click(function(){
		if($(this).hasClass("pause")){
			$("#myAudio")[0].play();
		}
		else {
			$("#myAudio")[0].pause();
		}
		$(this).toggleClass("pause");
	})
})