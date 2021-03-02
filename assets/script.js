
var inputEl = document.querySelector(".city-input");
var buttonEl = document.querySelector(".submit-btn")
buttonEl.addEventListener("click", function(e) {
    e.preventDefault();
    var value = inputEl.value;
    getHotels(value)
})


