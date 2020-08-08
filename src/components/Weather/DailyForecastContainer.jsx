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
      return ( <DailyForecast data={this.props.weather.dailyForecast} type="one_day" /> );
  }
}

const mapStateToProps = ({ location, weather }) => ({ location, weather });

export default connect(mapStateToProps, { fetchWeather })(DailyForecastContainer);