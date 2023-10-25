const url = "https://api.open-meteo.com/v1/forecast?latitude=42.3584&longitude=-71.0598&current=temperature_2m&hourly=temperature_2m&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch";

// maybe find a way to use a constructor

const div = document.querySelector(".container");
var data;

async function logWeatherData() {
    const res = await fetch(url);
    data = await res.json();
    console.log(data);

    const header = document.querySelector("#header");
    if (data.current.temperature_2m < 50) {
        header.innerHTML = "It's Chilly!"
    } else if (data.current.temperature_2m > 50 && data.current.temperature_2m < 65) {
        header.innerHTML = "It's Alright..."
    }
    const span = document.createElement("span");
    var temp = data.current.temperature_2m;
    span.innerHTML = "Temp: "
    span.innerHTML += temp;

    div.appendChild(span);
    
};

logWeatherData();