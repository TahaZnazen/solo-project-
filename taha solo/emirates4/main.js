$(function(){
	var images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg",]
	var i=2;
	$("#right").click(function(){
		$("#thebig").css("background-image", "url("+i+".jpg)")
		i++
		if(i===images.length){
			i=1;
		}
	})
	
	$("#left").click(function(){
		$("#thebig").css("background-image", "url("+i+".jpg)")
		i--
		if(i===0){
			i=images.length;
		}
	})
	$("#hotelpics button").click(function(){
		v=$(this).attr("name");
		$("#thebig").css("background-image","url("+v+".jpg)")
	})


	$("#booknow").click(function(){
		$('#contract').slideToggle()
	})

})