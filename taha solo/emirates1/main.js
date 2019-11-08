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
	$("#submit").click(function(){
		if(($("#name").val()!== "" && $("#secname").val()!== "" && $("#phone").val()!== "" && $("#date").val()!== "" && $("#time").val()!== "")){
		//confirm($("#name").val()+" "+$("#secname").val()+"\n"+$("#phone").val()+"\n"+$("#room").val()+" "+$("#class").val()+"\n"+" for "+$("#date").val()+" at "+$("#time").val());
			$("#myModal h1").html("HI MR' "+$("#name").val()+" "+$("#secname").val())
			$("#myModal h2").html("With phone number : "+$("#phone").val())
			$("#myModal h3").html("You booked "+$("#room").val()+" For: "+$("#person").val()+ "<br><br><br> In the "+$("#class").val()+"<br><br><br>"+" for "+$("#date").val()+" at "+$("#time").val())
			$("#myModal").show()
			$("#myModal button").click(function(){
			$("#myModal").hide()
			})

		}
		else{
			$("#mysecModal h1").html("PLEASE FILL ALL THE FIELD ")
			$("#mysecModal").show()
			$("#mysecModal button").click(function(){
				$("#mysecModal").hide()
			})
		}
	})

})