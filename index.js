
const api_key = '3188dfc0bf210fa37d56de756b126b8c'
const api_url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const search_input = document.querySelector('.search-input')
const search_btn = document.querySelector('.search-btn')
const weather_icon = document.querySelector('.rain-icon')


async function check_weather(city){
    const response = await fetch(api_url + city + `&appid=${api_key}`)
    

    if(response.status == 404){
        document.querySelector('.current-weather').style.dsiplay = 'none'
        alert('invalid city name/ check your spelling')
        search_input.value=" "
    }
    else if(search_input.value === ''){
        alert('provide city/state')
    }
    else{
        let data = await response.json()
        document.querySelector('.city').innerHTML = data.name
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C'
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
        document.querySelector('.wind').innerHTML = data.wind.speed + 'kmph'

        if(data.weather[0].main == 'Clouds'){
            weather_icon.src = 'image/clouds.png'
        } else if(data.weather[0].main == 'Clear'){
            weather_icon.src = 'image/clear.png'
        } else if(data.weather[0].main == 'rain'){
            weather_icon.src = 'image/rain.png'
        } else if(data.weather[0].main == 'Drizzle'){
            weather_icon.src = 'image/drizzle.png'
        } else if(data.weather[0].main == 'Mist'){
            weather_icon.src = 'image/mist.png'
        }
        // document.querySelector('.current-weather').style.display = 'block'
    }
}

search_btn.addEventListener('click', ()=>{
    check_weather(search_input.value)
})
