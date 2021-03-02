var inputEl = document.querySelector(".form-control");
var buttonEl = document.querySelector(".btn");
var lat;
var lng;

function getHotels(location) {
    // fetch("http://www.mapquestapi.com/geocoding/v1/address?key=JgWvLdgBrNVGSTkR4kIyGDAmLg2LVUkK&location=" + location)
    // .then(function(response) {
    //     return response.json()
    // })
    // .then(function(data) {
    //     lat = data.results[0].locations[0].latLng.lat.toString();
    //     lng = data.results[0].locations[0].latLng.lng.toString();
    //     fetch("https://hotels-com-free.p.rapidapi.com/srle/listing/v1/brands/hotels.com?lat=" + lat + "&lon=" + lng + "&locale=en_US&currency=USD&pageNumber=1", {
    //     	"method": "GET",
    //     	"headers": {
    //     		"x-rapidapi-key": "307037ba87msh679b27d5898dc92p15467bjsnd808822351aa",
    //     		"x-rapidapi-host": "hotels-com-free.p.rapidapi.com"
    //     	}
    //     })
    //     .then(response => {
    //         // console.log(response);
    //         return response.json();
    //     })
    //     .then(data1 => {
    //         console.log(data1);
    //     }) 
    //     .catch(err => {
    //         console.error(err);
    //     });
    // let queryYelp = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=' + lat + '&longitude=' + lng
    //     console.log(queryYelp)
    //     $.ajax({
    //       'url': queryYelp,
    //       'method': 'GET',
    //       'timeout': 0,
    //       'headers': {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer tkaqOrtgCHbSkTsdf-0m6BjpsTgaj3ecaSVTqvSwCRBG5IPp3zw4M4EyKxegC8FZ3Ft_YEmYKtcXRIO355J5-ENa-_soqS1fwtLmKRYO3ZFyt6PWcxJ7Ib1eRTk9YHYx'
    //       },
    //     }).then(function (response) {
    //       console.log(response);
    //     })
    // })
    // .catch(function(err) {
    //     console.error(err);
    // });
};









buttonEl.addEventListener("click", function(e) {
    e.preventDefault();
    var value = inputEl.value;
    localStorage.setItem("searchValue", value);
    getHotels(value);
    // console.log(value);
    window.location.href = "result.html" 
})



// api key for national park service:jYdOdqzkRhiMMlcFogbKAbOgJL8Kp3dh8r7OOneR 



// api key for open weather map:2ac1259b720a1255fc6e48f2d466be01