let weather = {
  apiKey: "ea82df00f75875384b4f70a503f40b0a",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  },
  displayWeather: function (data) {},
};
