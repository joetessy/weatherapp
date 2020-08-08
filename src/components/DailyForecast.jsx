import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/weather_actions';
import merge from 'lodash/merge';

class DailyForecast extends Component {
  componentDidMount() {
    this.props.fetchWeather(merge(this.props.location, { mode: 'weather' }));
  }
  render() {
    return ( <div>Mode A</div> );
  }
}

const mapStateToProps = ({ location }) => ({ location });

export default connect(mapStateToProps, { fetchWeather })(DailyForecast);