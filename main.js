var cityInput = document.getElementById("cityInput");
var addInput = document.getElementById("add");
var cityOutput = document.getElementById("cityoutput");
var descOutput = document.getElementById("description");
var tempOutput = document.getElementById("temp");
var windOutput = document.getElementById("wind");
const apiKey = "ecd362bc48cac4c9d1653dfbd50cc341";


function convertToCel(value){
    return (value-273).toFixed(2);
}


async function GetWeather() {
  var weatherResult = await (
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
${cityInput.value}&appid=${apiKey}`)
  ).json();

   setInfo(weatherResult);
}

function setInfo(data) {
  var cityName = data["name"];
  var description = data["weather"][0]["description"];
  var temp = data["main"]["temp"];
  var wind = data["wind"]["speed"];

  cityOutput.innerHTML =`City : ${cityName}`;
  descOutput.innerHTML =`Description : ${description}` ;
  tempOutput.innerHTML =`Temprature : ${convertToCel(temp)}`;
  windOutput.innerHTML =`Wind Speed : ${wind} km/h` ;
}


// Add Enter key functionality
cityInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      GetWeather();
  }
});



addInput.addEventListener("click", GetWeather);
