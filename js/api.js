const WeatherAPI = {
  apiKey: "afe304198ed7afb18d4f71d779c20780",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather",

  async getWeather(city) {
    const url = `${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`;

    try {
      const res = await fetch(url);

      if (res.status === 401) {
        throw new Error("Invalid API key");
      }
      if (res.status === 404) {
        throw new Error("City not found");
      }
      if (!res.ok) {
        throw new Error("Network error");
      }

      return await res.json();
    } catch (err) {
      throw err;
    }
  }
};
