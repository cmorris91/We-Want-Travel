var resultsEl = $("#results");
var resultsPage = $('.results-page')
var weatherResults = $("#weather-results")
var restaurantResults = $('#restaurants-results');
var showCityName =$('.showcityname')
var searchTerm = localStorage.getItem("searchValue") || ""
var lat;
var lng;

function getWeather(input) {
    var baseWURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&units=imperial&APPID=2ac1259b720a1255fc6e48f2d466be01"; 
    fetch(baseWURL)
    .then(function(response) {
        return response.json()
        })
    .then(function(data) {
        for(var i = 0; i < data.list.length; i += 8) {
           
            var weatherIcon = data.list[i].weather[0].icon;
            var iconURL = "https://openweathermap.org/img/wn/" + weatherIcon + ".png"
            var myDiv = $('<div>')
            var weatherDate = $('<p>')
            var imgEl = $("<img>");
            var skyEl = $('<p>');
            var tempEl = $('<p>');
            
            skyEl.text("Sky Conditions:").html(skyEl.html() + "<br/>" +  data.list[i].weather[0].description ).css('padding', 0);
            tempEl.text("Temp: " + data.list[i].main.temp).css('padding', 0);
            weatherDate.text(data.list[i].dt_txt.substring(0,10))
            imgEl.attr("src", iconURL).css('padding', 0);
            imgEl.attr("alt", "weather-icon");
            myDiv.addClass('col-12 col-md-2')
            myDiv.css('background-color', '#eae0e0').css('margin', '2px').css('border-radius', '5px').css('text-align', 'center');

            myDiv.append(weatherDate);
            myDiv.append(imgEl);
            myDiv.append(tempEl);
            myDiv.append(skyEl);
            
            weatherResults.append(myDiv);
            resultsEl.append(weatherResults);
          
        }
       
    })    
    };

    getWeather(searchTerm)
    // console.log(searchTerm)

var hotelResults = $('.hotel-results');
var hotelImages = ['assets/img/generic hotel.jpg','assets/img/generic hotel 2.jpg','assets/img/generic hotel 3.jpg','assets/img/generic hotel 4.jpg'];

function getHotels(location) {
    showCityName.text("Welcome To " + searchTerm.toUpperCase());
        fetch("https://www.mapquestapi.com/geocoding/v1/address?key=JgWvLdgBrNVGSTkR4kIyGDAmLg2LVUkK&location=" + location)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
           lat = data.results[0].locations[0].latLng.lat.toString();
           lng = data.results[0].locations[0].latLng.lng.toString();
            fetch("https://hotels-com-free.p.rapidapi.com/srle/listing/v1/brands/hotels.com?lat=" + lat + "&lon=" + lng + "&locale=en_US&currency=USD&pageNumber=1&per_page=5", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "a1d63ec0f8msh6f2ae02247681a1p1c8a9djsna249c725882e",
                    "x-rapidapi-host": "hotels-com-free.p.rapidapi.com"
                }
            })
            .then(response => {
                console.log(response)
                return response.json();
            })
            .then(data1 => {
                // console.log(data1);
                var myData1 = data1.data.body.searchResults.results;
                for(var i = 0; i < 4; i++) {
                    // console.log(myData1[i]);
                var myDiv = $('<div>');
                var hotelName = $('<h3>');
                var price = $('<p>');
                var rating = $('<p>');
                var area =  $('<p>');
                
                hotelName.text(myData1[i].name);
                if (myData1[i].ratePlan){
                    price.text("Price: " + myData1[i].ratePlan.price.current);
                } else {
                    price.text("Price: Not available");
                }
                rating.text("Overall Rating: " + myData1[i].starRating);
                area.text("Location: " + myData1[i].neighbourhood);
                myDiv.addClass('col-12 col-lg-3').css('text-align', 'center');

                myDiv.append(hotelName.css('padding',0));
                myDiv.append(price.css('padding',0));
                myDiv.append(rating.css('padding',0));
                myDiv.append(area.css('padding',0));
                var imgDiv = $('<div>');
                var hotelImgEl= $('<img>');

                imgDiv.css('width', '200px').css('height', '200px').css('overflow', 'hidden').css('align-items', 'flex-end')
                hotelImgEl.attr('src', hotelImages[i]).css('width', '200px').css('padding',0);
                imgDiv.append(hotelImgEl)
                myDiv.append(imgDiv);

                hotelResults.append(myDiv);
                
       
    

                
                
            }
        
        })

            .catch(err => {
                console.error(err);
            });
            let queryYelp = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=' + lat + '&longitude=' + lng
            console.log(queryYelp)
            $.ajax({
              'url': queryYelp,
              'method': 'GET',
              'timeout': 0,
              'headers': {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer tkaqOrtgCHbSkTsdf-0m6BjpsTgaj3ecaSVTqvSwCRBG5IPp3zw4M4EyKxegC8FZ3Ft_YEmYKtcXRIO355J5-ENa-_soqS1fwtLmKRYO3ZFyt6PWcxJ7Ib1eRTk9YHYx'
              },
            }).then(function (response) {
              console.log(response)
                var myData2 = response.businesses;

                for(var i= 0; i < 5; i++) {
                    console.log(myData2[i].name);
                    var div2 = $('<div>');
                    var div3 =$('<div>');
                    var restName = $('<h3>');
                    var restRating = $('<p>');
                    var restImgUrl = $('<img>');
                    var restUrl =$('<a>');
                    var type =$('<p>');

                    type.text(myData2[i].categories[0].title);
                    restName.text(myData2[i].name);
                    restRating.text("Rating: " + myData2[i].rating);
                    restImgUrl.attr('src', myData2[i].image_url).css('width', '200px').css('padding',0);
                    restUrl.attr('href', myData2[i].url);
                    restUrl.addClass('link')
                    div2.addClass('col-2').css('flex',1).css('text-align', 'center');
                    console.log(restUrl);
                    
                    div3.css('width', '200px').css('height', '200px').css('overflow', 'hidden').css('align-items', 'flex-end');
                    div3.append(restImgUrl);
                    restUrl.append(div3);
                    div2.append(restName.css('align-items', 'flex-end').css('padding',0));
                    div2.append(type.css('align-items', 'flex-end').css('padding',0));
                    div2.append(restRating.css('align-items', 'flex-end').css('padding',0))
                    div2.append(restUrl);
                    restaurantResults.append(div2);
                    console.log(restaurantResults)
                    
                }

            })
            
        })
        .catch(function(err) {
            console.error(err);
        });
      
        
};
// image_url, url , name , rating 

getHotels(searchTerm);


// a1d63ec0f8msh6f2ae02247681a1p1c8a9djsna249c725882e chelsey
// 2b418f7148msh278a7009415eacfp123f9fjsn4db366fdcc44 sharon