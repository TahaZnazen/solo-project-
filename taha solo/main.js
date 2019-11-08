function Hotel(link,name,location,image,hotelDescription ){
	var obj = {};
	obj.hotelName = name;
	obj.hotelDescription = hotelDescription;
	obj.image = image;
	obj.location = location;
	obj.link=link;
	
	return obj;
}
//berlin
var berlin1=Hotel("berlin1/hotel1.html","Hotel Riu Plaza Berlin am Kurfürstendamm","berlin","berlin/1.jpg","This 5-star hotel has a large rooftop spa and pool with spectacular views of Berlin. Located in the lively Potsdamer Platz district, 300 m from the Sony Center, it also offers stylish restaurants and bars.")
var berlin2=Hotel("berlin2/hotel2.html","Maritim Hotel Berlin","berlin","berlin/2.jpg","A 1-minute walk from Berlin’s Kurfürstendamm shopping street, the Steigenberger offers a spa with pool, 2 à la carte restaurants, and free WiFi. This is an eco-friendly hotel with carbon emission free energy.")
var berlin3=Hotel("berlin3/hotel3.html"," Grand Hyatt Berlin ","berlin","berlin/3.jpg","This hotel is set in a modern 17-storey building on Berlin's Kurfürstendamm boulevard. The RIU Plaza Berlin is a 5-minute walk from Kurfürstendamm Underground Station and the world-famous KaDeWe department store.")
var berlin4=Hotel("berlin4/hotel4.html","Steigenberger Hotel Berlin","berlin","berlin/4.jpg","This 4-star-First Class Hotel stands beside the Tiergarten Park, just 1 km from Potsdamer Platz. It offers large rooms and a spa area with swimming pool. Free WiFi is available at the hotel.")

//new york 
var newYork1=Hotel("newYork1/hotel1.html","Mr. C Hotel Seaport","newYork","ny/1.jpg","Located in New York (Manhattan), Mr. C Hotel Seaport is within a 10-minute walk of Federal Reserve Bank of New York and Wall Street. Featured amenities include express check-in, complimentary newspapers in the lobby, and dry cleaning/laundry services. Self parking (subject to charges) is available onsite.")
var newYork2=Hotel("newYork2/hotel2.html","Mandarin Oriental","newYork","ny/2.jpg","Excellent wellness hotel. Close to Columbus Circle. Good for sightseeing and located near shopping areas. Great rooms and fantastic service.")
var newYork3=Hotel("newYork3/hotel3.html","The Nomad Hotel","newYork","ny/3.jpg","Excellent hotel for solo travelers. Good for sightseeing with access to public transportation. Great room. Awesome vibe.")
var newYork4=Hotel("newYork4/hotel4.html","Baccarat Hotel And Residences ","newYork","ny/4.jpg","Excellent luxury hotel. Awesome rooms and service in a great location. Awesome vibe.")


//maldive
var maldive1=Hotel("maldive1/hotel1.html","Taj Exotica Resort And Spa","maldive","maldive/1.jpg","Excellent family hotel. Good for sightseeing and has a beach nearby. Fantastic service. Beautiful beach.")
var maldive2=Hotel("maldive2/hotel2.html","Grand Park Kodhipparu","maldive","maldive/2.jpg","When you stay at Taj Coral Reef Resort & Spa Maldives in Hembadhu Island, you'll be close to Madivaru Beyru Dive Site. Featured amenities include a computer station, complimentary newspapers in the lobby, and dry cleaning/laundry services. A roundtrip airport shuttle is available for a surcharge..")
var maldive3=Hotel("maldive3/hotel3.html","Anantara Dhigu Maldives Resort","maldive","maldive/3.jpg","Excellent hotel for solo travelers. Good for sightseeing with access to public transportation. Great room. Awesome vibe.")
var maldive4=Hotel("maldive4/hotel4.html","Waldorf Astoria Maldives Ithaafushi ","maldive","maldive/4.jpg","Waldorf Astoria Maldives Ithaafushi is a luxury destination resort spanning across three islands, encircling a turquoise blue lagoon – home to spectacular underwater life. This new all-villa resort is a 30-minute yacht ride away from Velana International Airport.")

//emirates
var emirates1=Hotel("emirates1/hotel1.html","Queen Elizabeth 2 Hotel ","emirates","emirates/1.jpg","The world's most famous steamship, still the world's most famous Dubai destination, the Queen Elizabeth 2 is permanently moored in Mina Rashid Marina. The first floating hotel in the Middle East offers passengers a concentration of culinary and nightlife experiences, a state-of-the-art event center and an attractive historical site, a rare and fascinating reminder of maritime history..")
var emirates2=Hotel("emirates2/hotel2.html","Signature 1 Hotel Tecom","emirates","emirates/2.jpg","Located in the heart of Barsha Heights, Signature 1 Hotel Tecom offers 4-star accommodation. It has a modern and casual design, all in simplicity, all in a welcoming setting.")
var emirates3=Hotel("emirates3/hotel3.html","Al Seef Resort & Spa by Andalus","emirates","emirates/3.jpg","Al Seef Resort & Spa by Andalus has 4 outdoor pools surrounded by sun loungers and palm trees, and is located near the protected natural mangroves of Abu Dhabi. Free Wi-Fi is available in all areas.")
var emirates4=Hotel("emirates4/hotel4.html","Rose Rayhaan by Rotana  ","emirates","emirates/4.jpg","The Rose Rayhaan by Rotana - Dubai is the third tallest hotel in the world with 333 meters of height and 72 floors. A benchmark for comfort and style in Dubai, it is located in a prime location on Sheikh Zayed Road, just steps from the Financial Center subway station and 3 minutes from the Dubai International Financial Center (DIFC).")


var hotelsObj={
	maldive:[maldive1,maldive2,maldive3,maldive4],
	berlin:[berlin1,berlin2,berlin3,berlin4],
	newYork:[newYork1,newYork2,newYork3,newYork4],
	emirates:[emirates1,emirates2,emirates3,emirates4]
}



//to change background every 2.5 second;
var arr = ["2.jpg","3.jpg","4.jpg","5.jpg"];
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
	var input = $("select").val();
	for(var key in hotelsObj){
		var k=1;
		for(var j = 0;j<hotelsObj[key].length;j++){
			//console.log(hotelsObj[key][j])
			console.log(hotelsObj[key][j])
		if(input.toUpperCase()===hotelsObj[key][j].location.toUpperCase()){
			$("#displayed").fadeIn();
	 	 	$("#hotel"+k).css("background-image","url("+hotelsObj[key][j].image+")")
			$("#hotelh"+k).html(hotelsObj[key][j].hotelName)
			$("#hotel"+k+"p").html(hotelsObj[key][j].hotelDescription+"<br><a href="+hotelsObj[key][j].link+" target='_blank'><button style='width: 100px; height: 30px;background:none;border:1px solid white;color: white;font-size: 15px;left:30px;position:relative;margin-top:10px;}'>click</button></a>")

			 k++
		}
		}
		
		//target='_blank'><button style='width: 70px; height: 20px;'
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