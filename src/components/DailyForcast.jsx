import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from './../actions/weather_actions';

class DailyForcast extends Component {
  render() {
    return ( <div>Mode A</div> );
  }
}

export default connect(null, { fetchWeather })(DailyForcast);