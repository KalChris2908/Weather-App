const WeatherAPI = {
  apiKey: "YOUR_OPENWEATHERMAP_API_KEY", // replace with your API key
  baseUrl: "https://api.openweathermap.org/data/2.5/weather",

  async getWeather(city) {
    try {
      const res = await fetch(`${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`);
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      return data;
    } catch (err) {
      throw err;
    }
  }
};
