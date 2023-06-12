/* getting the api key and api url from an api site
* called open weather map
*/
const apiKey = "b71b50441caf041ffa6f41b4cbd9d6a2";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// creating a few variables
const lookup = document.querySelector(".lookup input");
const lookupBtn = document.querySelector(".lookup button");
const weatherImage = document.querySelector(".weatherImage");
// creating a function to lookup the weather 

async function lookupWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var info = await response.json();

    // fetching the location info from the api
    document.querySelector(".location").innerHTML = info.name;
   
    /*fetching the temperature info from the api
    and using math.round to convert decimal numbers
    into integers
    */
    document.querySelector(".temperature").innerHTML = Math.round(info.main.temp)  + "°C"; 

    // using if statements the update the images depending on weather conditions
    if(info.weather[0].main == "Clouds"){
        weatherImage.src = "cloudy.jpg";

    }
    else if(info.weather[0].main == "Rain"){
        weatherImage.src = "rainy.png";

    }
    else if(info.weather[0].main == "Clear"){
        weatherImage.src = "sunny1.jpg";

    }
    else if(info.weather[0].main == "Mist"){
        weatherImage.src = "sunny.jpg";

    }

}

// creating an event listener once the button is clicked
lookupBtn.addEventListener("click", () =>{
lookupWeather(lookup.value); // to display the weather whenever the site loads
})
