import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../../actions/weather_actions';
import DailyForecast from './DailyForecast'

class DailyForecastContainer extends Component {
  
  // fetch weather data for daily forcast, send via weather_actions.js
  // 'weather' param will be used to fetch today's weather via openweathermap.org api
  componentDidMount() {
    this.props.fetchWeather(this.props.location, 'weather');
  }

  render() {
      return ( <DailyForecast data={this.props.weather.dailyForecast}/> );
  }
}

const mapStateToProps = ({ location, weather }) => ({ location, weather });

export default connect(mapStateToProps, { fetchWeather })(DailyForecastContainer);