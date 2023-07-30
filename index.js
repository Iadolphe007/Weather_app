const api_key = '3188dfc0bf210fa37d56de756b126b8c'
const api_url= 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'

const search_input = document.querySelector('.search-input').value
const search_btn = document.querySelector('.search-btn')
// =&units=metric




async function check_weather(city){
    const response = await fetch(api_url + city + `$appid=${api_key}`)
    let data = await response.json()
    
    document.getElementById('#location').innerHTML = data.name
    document.getElementById('#temperature').innerHTML =Math.round(data.main.temp)
    document.querySelector('.humidity').innerHTML = data.main.humidity
    document.querySelector('.wind').innerHTML = data.wind.speed
}

search_btn.addEventListener('click', ()=>{
    check_weather(search_input)
})
