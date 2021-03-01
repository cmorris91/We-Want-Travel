
var inputEl = document.querySelector(".city-input");
var buttonEl = document.querySelector(".submit-btn")
buttonEl.addEventListener("click", function(e) {
    e.preventDefault();
    var value = inputEl.value;
    getHotels(value)
})



// api key for national park service:jYdOdqzkRhiMMlcFogbKAbOgJL8Kp3dh8r7OOneR 



// api key for open weather map:2ac1259b720a1255fc6e48f2d466be01