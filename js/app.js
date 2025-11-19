const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const toggleThemeBtn = document.getElementById("toggleTheme");

// Load theme from localStorage
if (localStorage.getItem("theme") === "dark") document.body.classList.add("dark");

// Theme toggle
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// Search weather
searchBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (!city) return UI.toast("Enter a city name");

  try {
    const data = await WeatherAPI.getWeather(city);
    UI.renderWeather(data);
    cityInput.value = "";
  } catch (err) {
    UI.toast(err.message);
  }
});

// Enter key support
cityInput.addEventListener("keypress", e => {
  if (e.key === "Enter") searchBtn.click();
});
