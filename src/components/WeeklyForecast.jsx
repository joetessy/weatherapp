import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/weather_actions';
import merge from 'lodash/merge';

class WeeklyForecast extends Component {
  componentDidMount() {
    this.props.fetchWeather(merge(this.props.location, { mode: 'forecast' }));
  }
  render() {
    return ( <div>Mode B</div> );
  }
}

const mapStateToProps = ({ location }) => ({ location });

export default connect(mapStateToProps, { fetchWeather })(WeeklyForecast);