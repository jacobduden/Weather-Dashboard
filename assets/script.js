// fetches data from API and appends to page
var getWeather = function () {

    $(".searchBtn").click(function () {
        $(".weekWeather").empty();
        $(".weatherContainer").empty();
        $(".fiveDayBox").empty();
        let userInput = $(".city-search").val();
        let lastSearched = JSON.parse(localStorage.getItem("city")) || [];
        if (lastSearched.indexOf(userInput) == -1) {
            lastSearched.push(userInput);
            localStorage.setItem("city", JSON.stringify(lastSearched));
        }
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&units=imperial&appid=e15d200fe840af78fa3fc7361e1e0070")
            .then(function (response) {
                return (response.json())
            })
            .then(function (data) {
                console.log(data);

                var cityName = data.city.name;
                var Date = data.list[0].dt_txt;
                var temperature = data.list[0].main.temp;
                var humidity = data.list[0].main.humidity;
                var wind = data.list[0].wind.speed;
                var weatherIcon = data.list[0].weather[0].icon;
                $(".weatherContainer").append("<h1>" + cityName + " " + Date + "</h1><h3>Temperature: " + temperature + " F</h3><h3>Humidity: " + humidity + " %</h3><h3>Wind Speed: " + wind + " MPH</h3><img id='wicon' src ='http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png' alt='Weather Icon'>");

                var secondDate = data.list[7].dt_txt;
                var secondTemperature = data.list[7].main.temp;
                var secondHumidity = data.list[7].main.humidity;
                var secondWind = data.list[7].wind.speed;
                var secondWeatherIcon = data.list[7].weather[0].icon;
                $(".weekWeather").append("<div class='fiveDayBox'><h5>" + secondDate + "</h5><p>Temperature: " + secondTemperature + " F</p><p>Humidity: " + secondHumidity + " %</p><p>Wind Speed: " + secondWind + " MPH</p><img id='wicon' src ='http://openweathermap.org/img/wn/" + secondWeatherIcon + "@2x.png' alt='Weather Icon'></div>");

                var thirdDate = data.list[21].dt_txt;
                var thirdTemperature = data.list[21].main.temp;
                var thirdHumidity = data.list[21].main.humidity;
                var thirdWind = data.list[21].wind.speed;
                var thirdWeatherIcon = data.list[21].weather[0].icon;
                $(".weekWeather").append("<div class='fiveDayBox'><h5>" + thirdDate + "</h5><p>Temperature: " + thirdTemperature + " F</p><p>Humidity: " + thirdHumidity + " %</p><p>Wind Speed: " + thirdWind + " MPH</p><img id='wicon' src ='http://openweathermap.org/img/wn/" + thirdWeatherIcon + "@2x.png' alt='Weather Icon'></div>");

                var fourthDate = data.list[28].dt_txt;
                var fourthTemperature = data.list[28].main.temp;
                var fourthHumidity = data.list[28].main.humidity;
                var fourthWind = data.list[28].wind.speed;
                var fourthWeatherIcon = data.list[28].weather[0].icon;
                $(".weekWeather").append("<div class='fiveDayBox'><h5>" + fourthDate + "</h5><p>Temperature: " + fourthTemperature + " F</p><p>Humidity: " + fourthHumidity + " %</p><p>Wind Speed: " + fourthWind + " MPH</p><img id='wicon' src ='http://openweathermap.org/img/wn/" + fourthWeatherIcon + "@2x.png' alt='Weather Icon'></div>");

                var fifthDate = data.list[34].dt_txt;
                var fifthTemperature = data.list[34].main.temp;
                var fifthHumidity = data.list[34].main.humidity;
                var fifthWind = data.list[34].wind.speed;
                var fifthWeatherIcon = data.list[34].weather[0].icon;
                $(".weekWeather").append("<div class='fiveDayBox'><h5>" + fifthDate + "</h5><p>Temperature: " + fifthTemperature + " F</p><p>Humidity: " + fifthHumidity + " %</p><p>Wind Speed: " + fifthWind + " MPH</p><img id='wicon' src ='http://openweathermap.org/img/wn/" + fifthWeatherIcon + "@2x.png' alt='Weather Icon'></div>");

                var sixthDate = data.list[39].dt_txt;
                var sixthTemperature = data.list[39].main.temp;
                var sixthHumidity = data.list[39].main.humidity;
                var sixthWind = data.list[39].wind.speed;
                var sixthWeatherIcon = data.list[39].weather[0].icon;
                $(".weekWeather").append("<div class='fiveDayBox'><h5>" + sixthDate + "</h5><p>Temperature: " + sixthTemperature + " F</p><p>Humidity: " + sixthHumidity + " %</p><p>Wind Speed: " + sixthWind + " MPH</p><img id='wicon' src ='http://openweathermap.org/img/wn/" + sixthWeatherIcon + "@2x.png' alt='Weather Icon'></div>");

                lastLookedUp();
            })
    })
}
getWeather();
// stores last searched cities into localStorage
var lastLookedUp = function () {
    let lastSearched = JSON.parse(localStorage.getItem("city"));
    $("#searchHistory").empty();
    for (var i = 0; i < lastSearched.length; i++) {
        $("#searchHistory").append("<button class='lastSearched' type='submit' value='" + lastSearched[i] + "'>" + lastSearched[i] + "</button>")

    }
    // appends buttons to look-up past searched cities.
    $(".lastSearched").on("click", function (event) {
        
        $(".weekWeather").empty();
        $(".weatherContainer").empty();
        $(".fiveDayBox").empty();
        let userInput = event.target.value;
        console.log(userInput);
        let lastSearched = JSON.parse(localStorage.getItem("city")) || [];
        if (lastSearched.indexOf(userInput) == -1) {
            lastSearched.push(userInput);
            localStorage.setItem("city", JSON.stringify(lastSearched));
        }
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + userInput  + "&units=imperial&appid=e15d200fe840af78fa3fc7361e1e0070")
            .then(function (response) {
                return (response.json())
            })
            .then(function (data) {
                console.log(data);

                var cityName = data.city.name;
                var Date = data.list[0].dt_txt;
                var temperature = data.list[0].main.temp;
                var humidity = data.list[0].main.humidity;
                var wind = data.list[0].wind.speed;
                var weatherIcon = data.list[0].weather[0].icon;
                $(".weatherContainer").append("<h1>" + cityName + " " + Date + "</h1><h3>Temperature: " + temperature + " F</h3><h3>Humidity: " + humidity + " %</h3><h3>Wind Speed: " + wind + " MPH</h3><img id='wicon' src ='http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png' alt='Weather Icon'>");

                var secondDate = data.list[7].dt_txt;
                var secondTemperature = data.list[7].main.temp;
                var secondHumidity = data.list[7].main.humidity;
                var secondWind = data.list[7].wind.speed;
                var secondWeatherIcon = data.list[7].weather[0].icon;
                $(".weekWeather").append("<div class='fiveDayBox'><h5>" + secondDate + "</h5><p>Temperature: " + secondTemperature + " F</p><p>Humidity: " + secondHumidity + " %</p><p>Wind Speed: " + secondWind + " MPH</p><img id='wicon' src ='http://openweathermap.org/img/wn/" + secondWeatherIcon + "@2x.png' alt='Weather Icon'></div>");

                var thirdDate = data.list[21].dt_txt;
                var thirdTemperature = data.list[21].main.temp;
                var thirdHumidity = data.list[21].main.humidity;
                var thirdWind = data.list[21].wind.speed;
                var thirdWeatherIcon = data.list[21].weather[0].icon;
                $(".weekWeather").append("<div class='fiveDayBox'><h5>" + thirdDate + "</h5><p>Temperature: " + thirdTemperature + " F</p><p>Humidity: " + thirdHumidity + " %</p><p>Wind Speed: " + thirdWind + " MPH</p><img id='wicon' src ='http://openweathermap.org/img/wn/" + thirdWeatherIcon + "@2x.png' alt='Weather Icon'></div>");

                var fourthDate = data.list[28].dt_txt;
                var fourthTemperature = data.list[28].main.temp;
                var fourthHumidity = data.list[28].main.humidity;
                var fourthWind = data.list[28].wind.speed;
                var fourthWeatherIcon = data.list[28].weather[0].icon;
                $(".weekWeather").append("<div class='fiveDayBox'><h5>" + fourthDate + "</h5><p>Temperature: " + fourthTemperature + " F</p><p>Humidity: " + fourthHumidity + " %</p><p>Wind Speed: " + fourthWind + " MPH</p><img id='wicon' src ='http://openweathermap.org/img/wn/" + fourthWeatherIcon + "@2x.png' alt='Weather Icon'></div>");

                var fifthDate = data.list[34].dt_txt;
                var fifthTemperature = data.list[34].main.temp;
                var fifthHumidity = data.list[34].main.humidity;
                var fifthWind = data.list[34].wind.speed;
                var fifthWeatherIcon = data.list[34].weather[0].icon;
                $(".weekWeather").append("<div class='fiveDayBox'><h5>" + fifthDate + "</h5><p>Temperature: " + fifthTemperature + " F</p><p>Humidity: " + fifthHumidity + " %</p><p>Wind Speed: " + fifthWind + " MPH</p><img id='wicon' src ='http://openweathermap.org/img/wn/" + fifthWeatherIcon + "@2x.png' alt='Weather Icon'></div>");

                var sixthDate = data.list[39].dt_txt;
                var sixthTemperature = data.list[39].main.temp;
                var sixthHumidity = data.list[39].main.humidity;
                var sixthWind = data.list[39].wind.speed;
                var sixthWeatherIcon = data.list[39].weather[0].icon;
                $(".weekWeather").append("<div class='fiveDayBox'><h5>" + sixthDate + "</h5><p>Temperature: " + sixthTemperature + " F</p><p>Humidity: " + sixthHumidity + " %</p><p>Wind Speed: " + sixthWind + " MPH</p><img id='wicon' src ='http://openweathermap.org/img/wn/" + sixthWeatherIcon + "@2x.png' alt='Weather Icon'></div>");

            })
    })

}
// clears local storage
    $(".clearHistory").on("click", function(){
      localStorage.clear();
      location.reload();  
    })

lastLookedUp();

