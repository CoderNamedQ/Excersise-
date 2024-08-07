function showWeatherDetails(event){
    const lat = document.getElementById("latitude").value;
    const long = document.getElementById("longitude").value;
    const apiKey = "edb241abb24109d87f94bf90b89f38bf";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`
    
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML=`<div>Coordinates: ${JSON.stringify(data.coord)}</div> <div>Weather: ${data.weather[0].description}</div> <div>Main: ${data.main.temp}</div>`;
        })
        .catch(error => {
            console.error("Error occured:",error);
            document.getElementById("weatherInfo").innerHTML = `<div>Please try to enter the latitude and the longitude again</div>`;
        });
}