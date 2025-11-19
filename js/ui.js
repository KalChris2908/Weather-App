const UI = {
  renderWeather(data) {
    const container = document.getElementById("weatherContainer");
    container.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon">
      <p>${data.weather[0].description}</p>
      <p>🌡️ ${data.main.temp}°C | Feels like ${data.main.feels_like}°C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬️ Wind: ${data.wind.speed} m/s</p>
    `;
  },

  toast(msg) {
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.style.opacity = 1;
    setTimeout(() => { toast.style.opacity = 0; }, 2000);
  }
};
