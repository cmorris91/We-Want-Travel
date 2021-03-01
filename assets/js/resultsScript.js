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
            console.log(temp);
            resultsEl.append(imgEl)
            tempresults.append(temp)
        }
        console.log(data);
    })    
    };

    getWeather(searchTerm)
    console.log(searchTerm)