# Weather-App for Vroom

[Weather-app][live]

[live]: https://www.joetessy.com/weather-app

Weather-app is a front-end application built with React.
Users can toggle a UI to display daily or weekly weather information

## Set Up

1. Clone git repository
2. Inside the repository, run `npm install` to install node modules.
3. Run `webpack --watch` to build JavaScript Bundle
4. Run `npm start` to start development server
5. View application at `http://localhost:3000/`

## Components
- NavBar
- Content

### Weather Components
- DailyorecastContainer
- WeeklyForecastContainer
- WeeklyForecast
- DailyForecast

## Reducers
- Mode - handles Application UI state
- Location - handles user location information
- Weather - handles weather content fetched from openweather.org API
- Errors - handles errors caused by failure to fetch location or weather data

## Actions

### Location Actions
- setLocation - sets user loaction
- receiveLocationError - sets error message

### Mode Actions
- changeMode - toggles UI application state between daily and weekly forecasts

### Weather actions
- receiveWeather - sets weather data for weekly or daily forcast
- receiveWeatherError - sets error message

## 3rd Party Libraries
- Axios is used to fetch data from openweather.org API
- Lodash is used to merge objects
- Redux is used for state management