function getHotels(location) {
    fetch("http://www.mapquestapi.com/geocoding/v1/address?key=JgWvLdgBrNVGSTkR4kIyGDAmLg2LVUkK&location=" + location)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        var lat = data.results[0].locations[0].latLng.lat.toString();
        var lng = data.results[0].locations[0].latLng.lng.toString();
        fetch("https://hotels-com-free.p.rapidapi.com/srle/listing/v1/brands/hotels.com?lat=" + lat + "&lon=" + lng + "&locale=en_US&currency=USD&pageNumber=1", {
        	"method": "GET",
        	"headers": {
        		"x-rapidapi-key": "307037ba87msh679b27d5898dc92p15467bjsnd808822351aa",
        		"x-rapidapi-host": "hotels-com-free.p.rapidapi.com"
        	}
        })
        .then(response => {
            // console.log(response);
            return response.json();
        })
        .then(data1 => {
            console.log(data1);
        }) 
        .catch(err => {
            console.error(err);
        });
    })
    .catch(function(err) {
        console.error(err);
    });
};

var inputEl = document.querySelector(".city-input");
var buttonEl = document.querySelector(".submit-btn")
buttonEl.addEventListener("click", function(e) {
    e.preventDefault();
    var value = inputEl.value;
    getHotels(value)
})



// api key for national park service:jYdOdqzkRhiMMlcFogbKAbOgJL8Kp3dh8r7OOneR 



// api key for open weather map:2ac1259b720a1255fc6e48f2d466be01