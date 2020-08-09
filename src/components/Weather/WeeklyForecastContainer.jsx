import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../../actions/weather_actions';
import WeeklyForecast from './WeeklyForecast';

// Forecast/daily API used to fetch 5 days weather on openweathermap.org
const WEEKLY_MODE = 'forecast/daily';

class WeeklyForecastContainer extends Component {

  // fetch weather data for weekly forcast, send via weather_actions.js
  // 'weather' param will be used to fetch today's weather via openweathermap.org api
  componentDidMount() {
    this.props.fetchWeather(this.props.location, WEEKLY_MODE);
  }

  render() {
    if (this.props.weather.weeklyForecast) {
      return <WeeklyForecast data={ this.props.weather.weeklyForecast } type="one_day" />;
    } else {
      return <div>Loading...</div>;
    }
  }
}

const mapStateToProps = ({ location, weather }) => ({ location, weather });

export default connect(mapStateToProps, { fetchWeather })(WeeklyForecastContainer);