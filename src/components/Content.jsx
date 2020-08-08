import React, { Component } from 'react';
import { connect } from 'react-redux';
import DailyForecastContainer from './weather/DailyForecastContainer';
import WeeklyForecastContainer from './weather/WeeklyForecastContainer';
import { setLocation, receiveLocationError } from './../actions/location_actions';

class Content extends Component {

  // Retrieve current location and send via location_action.js on success or error
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.props.setLocation, this.props.receiveLocationError);
  }

  // Conditionally render content based on application UI state, set in NavBar.jsx and managed in mode_reducer.js
  render() {
    if (this.props.errors.locationError) {
    return <div>{this.props.errors.locationError}</div>
    } else if (!this.props.location) {
     return ( <div>Loading...<br/></div> )
    } else {
      return (
        <div>
          {this.props.mode === 1 ? <DailyForecastContainer /> : <WeeklyForecastContainer />}
          <br></br>
        </div>
      )
    }
  };
}

const mapStateToProps = ({ mode, location, errors }) => ({ mode, location, errors });

export default connect(mapStateToProps, { setLocation, receiveLocationError })(Content);