const onGeoOk = function (position) {
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&nits=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector(".main__content__weather__my-weather")
        const city = document.querySelector(".main__content__weather__my-city")
        city.innerText = data.name
        weather.innerText = `${data.weather[0].main}`
    });
}
const onGeoError = function () {
    alert("위치를 찾을 수 없습니다. 날씨 정보를 줄 수 없어요.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)