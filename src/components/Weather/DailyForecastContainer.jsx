import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../../actions/weather_actions';
import DailyForecast from './DailyForecast';

// Weather API used to fetch today's weather on openweathermap.org
const DAILY_MODE = 'weather';

class DailyForecastContainer extends Component {

  // fetch weather data for daily forcast, send via weather_actions.js
  componentDidMount() {
    this.props.fetchWeather(this.props.location, DAILY_MODE);
  }

  render() {
    let data = this.formatDataForDailyForecast(this.props.weather.dailyForecast);
    return ( <DailyForecast data={data} type="one_day" /> );
  }
  
  formatDataForDailyForecast(forecast) {
    if (forecast) {
      return { 
        city: forecast.name,
        country: forecast.sys.country,
        icon: forecast.weather[0].icon,
        temp: forecast.main.temp, 
        temp_min: forecast.main.temp_min, 
        temp_max: forecast.main.temp_max 
      }
    }
  }
}

const mapStateToProps = ({ location, weather }) => ({ location, weather });

export default connect(mapStateToProps, { fetchWeather })(DailyForecastContainer);