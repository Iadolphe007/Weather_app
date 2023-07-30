const api_key = '3188dfc0bf210fa37d56de756b126b8c'
const api_url= 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'

const search_input = document.querySelector('.search-input').value
const search_btn = document.querySelector('.search-btn')
const weather_icon = document.querySelector('.rain-icon')
// =&units=metric




async function check_weather(city){
    const response = await fetch(api_url + city + `$appid=${api_key}`)
    

    if(response.status == 404){
        document.querySelector('.error-input').style.siplay = 'block'
        document.querySelector('.current-weather').style.siplay = 'none'
    }
    else{
        let data = await response.json()
        document.getElementById('#location').innerHTML = data.name
        document.getElementById('#temperature').innerHTML =Math.round(data.main.temp)
        document.querySelector('.humidity').innerHTML = data.main.humidity
        document.querySelector('.wind').innerHTML = data.wind.speed
        document.querySelector('.current-weather').style.siplay = 'block'
        document.querySelector('.error-input').style.siplay = 'none'
        // check_weather_condition()
        // display()
    }
}

search_btn.addEventListener('click', ()=>{
    check_weather(search_input)
})

function check_weather_condition(){
    if(data.weather[0].main == 'cloud'){
        weather_icon.src = 'image/clouds.png'
    } else if(data.weather[0].main == 'clear'){
        weather_icon.src = 'image/clear.png'
    } else if(data.weather[0].main == 'rain'){
        weather_icon.src = 'image/rain.png'
    } else if(data.weather[0].main == 'Drizzle'){
        weather_ico.src = 'image/Drizzle.png'
    } else if(data.weather[0].main == 'Mist'){
        weather_icon.src = 'image/Mist.png'
    }
}

// function display(){
//     document.querySelector('.current-weather').style.siplay = 'block'
// document.querySelector('.error-input').style.siplay = 'none'  
// }