var resultsEl = $("#results");
var tempresults = $("#temp-results")
var searchTerm = localStorage.getItem("searchValue") || ""

function getWeather(input) {
    var baseWURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + input + "&units=imperial&APPID=2ac1259b720a1255fc6e48f2d466be01"; 
    fetch(baseWURL)
    .then(function(response) {
        return response.json()
        })
    .then(function(data) {
        for(var i = 0; i < data.list.length; i += 8) {
            var temp = data.list[i].main.temp;
            var sky = data.list[i].weather[0].description;
            var weatherDate = data.list[i].dt_txt.substring(0,10);
            var weatherIcon = data.list[i].weather[0].icon;
            var iconURL = "http://openweathermap.org/img/wn/" + weatherIcon + ".png"
            var imgEl = $("<img>");
            imgEl.attr("src", iconURL);
            imgEl.attr("alt", "weather-icon");
            // $(".weather-icon").attr("src", iconURL)
            // var temp = document.createElement("p");
            // temp.textContent = data.list[0].main.temp;
            // document.main.appendChild(temp)
            // create a for loop to populate the 5 day forecast. cycle 0-5 under list array
            // 0,8,16,24,32
            // console.log(temp);
            resultsEl.append(imgEl)
            tempresults.append(temp)
        }
        // console.log(data);
    })    
    };

    getWeather(searchTerm)
    // console.log(searchTerm)

var hotelResults = $('.hotel-results');

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
                var myData1 = data1.data.body.searchResults.results
                // console.log(myData1)
                for(var i = 0; i < 5; i++); {
                    console.log(myData1[i]);
                var myDiv = $('<div>');
                var hotelName = $('<h3>');
                var price = $('<p>');
                var rating = $('<p>');
                var area =  $('<p>');

                hotelName.text(myData1[i].name);
                price.text("Price: " + myData1[i].ratePlan.price.current);
                rating.text("Overall Rating: " + myData1[i].guestReviews.rating);
                area.text("Location: " + myData1[i].neighbourhood)
    
                myDiv.append(hotelName);
                myDiv.append(price);
                myDiv.append(rating);
                myDiv.append(area);

                hotelResults.append(myDiv);
            }

            }) 
            .catch(err => {
                console.error(err);
            });
        })
        .catch(function(err) {
            console.error(err);
        });
    };

    getHotels(searchTerm);