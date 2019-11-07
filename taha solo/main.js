function Hotel(name,location,image,hotelDescription){
	var obj = {};
	obj.hotelName = name;
	obj.hotelDescription = hotelDescription;
	obj.image = image;
	obj.location = location;
	
	return obj;
}
//berlin
var berlin1=Hotel("Hotel Riu Plaza Berlin am Kurfürstendamm","berlin","berlin/1.jpg","This 5-star hotel has a large rooftop spa and pool with spectacular views of Berlin. Located in the lively Potsdamer Platz district, 300 m from the Sony Center, it also offers stylish restaurants and bars.")
var berlin2=Hotel("Maritim Hotel Berlin","berlin","berlin/2.jpg","A 1-minute walk from Berlin’s Kurfürstendamm shopping street, the Steigenberger offers a spa with pool, 2 à la carte restaurants, and free WiFi. This is an eco-friendly hotel with carbon emission free energy.")
var berlin3=Hotel(" Grand Hyatt Berlin ","berlin","berlin/3.jpg","This hotel is set in a modern 17-storey building on Berlin's Kurfürstendamm boulevard. The RIU Plaza Berlin is a 5-minute walk from Kurfürstendamm Underground Station and the world-famous KaDeWe department store.")
var berlin4=Hotel("Steigenberger Hotel Berlin","berlin","berlin/4.jpg","This 4-star-First Class Hotel stands beside the Tiergarten Park, just 1 km from Potsdamer Platz. It offers large rooms and a spa area with swimming pool. Free WiFi is available at the hotel.")

//new york 
var newYork1=Hotel("Mr. C Hotel Seaport","newYork","ny/1.jpg","Located in New York (Manhattan), Mr. C Hotel Seaport is within a 10-minute walk of Federal Reserve Bank of New York and Wall Street. Featured amenities include express check-in, complimentary newspapers in the lobby, and dry cleaning/laundry services. Self parking (subject to charges) is available onsite.")
var newYork2=Hotel("Mandarin Oriental","newYork","ny/2.jpg","Excellent wellness hotel. Close to Columbus Circle. Good for sightseeing and located near shopping areas. Great rooms and fantastic service.")
var newYork3=Hotel("The Nomad Hotel","newYork","ny/3.jpg","Excellent hotel for solo travelers. Good for sightseeing with access to public transportation. Great room. Awesome vibe.")
var newYork4=Hotel("Baccarat Hotel And Residences ","newYork","ny/4.jpg","Excellent luxury hotel. Awesome rooms and service in a great location. Awesome vibe.")


//maldive
var maldive1=Hotel("Taj Exotica Resort And Spa","maldive","maldive/1.jpg","Excellent family hotel. Good for sightseeing and has a beach nearby. Fantastic service. Beautiful beach.")
var maldive2=Hotel("Grand Park Kodhipparu","maldive","maldive/2.jpg","When you stay at Taj Coral Reef Resort & Spa Maldives in Hembadhu Island, you'll be close to Madivaru Beyru Dive Site. Featured amenities include a computer station, complimentary newspapers in the lobby, and dry cleaning/laundry services. A roundtrip airport shuttle is available for a surcharge..")
var maldive3=Hotel("Anantara Dhigu Maldives Resort","maldive","maldive/3.jpg","Excellent hotel for solo travelers. Good for sightseeing with access to public transportation. Great room. Awesome vibe.")
var maldive4=Hotel("Waldorf Astoria Maldives Ithaafushi ","maldive","maldive/4.jpg","Waldorf Astoria Maldives Ithaafushi is a luxury destination resort spanning across three islands, encircling a turquoise blue lagoon – home to spectacular underwater life. This new all-villa resort is a 30-minute yacht ride away from Velana International Airport.")


var hotelsObj={
	maldive:[maldive1,maldive2,maldive3,maldive4],
	berlin:[berlin1,berlin2,berlin3,berlin4],
	newYork:[newYork1,newYork2,newYork3,newYork4]
}



//to change background every 2.5 second;
var arr = ["2.jpeg","4.jpeg","8.jpeg","3.jpeg","1.jpeg"];
$(function(){
	var i = 0;
setInterval(function() {
      $("#backgrounds").css("background-image", "url(" + arr[i] + ")")
      i ++
      if (i === arr.length) {
        i = 0;
      }
}, 2500);


//show the section on click
$("#click").click(function(){
	var input = $("input").val();
	for(var key in hotelsObj){
		var k=1;
		for(var j = 0;j<hotelsObj[key].length;j++){
			//console.log(hotelsObj[key][j])
			console.log(hotelsObj[key][j].location)
		if(input.toUpperCase()===hotelsObj[key][j].location.toUpperCase()){
			$("#displayed").fadeIn();
	 	 	$("#hotel"+k).css("background-image","url("+hotelsObj[key][j].image+")")
			$("#hotelh"+k).html(hotelsObj[key][j].hotelName)
			$("#hotel"+k+"p").html(hotelsObj[key][j].hotelDescription)
			 k++
		}
		}
		
		
	}



















	// if($("input").val()===berlin[1].location){
	// 	for(var j=0 ; j<berlin.length ;j++){
	// 		console.log($("input").val())
		
	// 		$("#displayed").fadeIn();
	// 		var k=j+1;
	// 		$("#hotel"+k).css("background-image","url("+berlin[j].image+")")
	// 		$("#hotelh"+k).html(berlin[j].hotelName)
	// 		$("#hotel"+k+"p").html(berlin[j].hotelDescription)

	// 	}
		
	// }

})

//hide the section on click
$("#close").click(function(){
	$("#displayed").fadeOut()
})
})