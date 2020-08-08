import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../../actions/weather_actions';

class WeeklyForecastContainer extends Component {
  // fetch weather data for weekly forcast, send via weather_actions.js
  // 'weather' param will be used to fetch today's weather via openweathermap.org api
  componentDidMount() {
    this.props.fetchWeather(this.props.location, 'daily');
  }
  render() {
    return ( <div>Mode B</div> );
  }
}

const mapStateToProps = ({ location }) => ({ location });

export default connect(mapStateToProps, { fetchWeather })(WeeklyForecastContainer);