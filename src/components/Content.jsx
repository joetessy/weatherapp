import React, { Component } from 'react';
import { connect } from 'react-redux';
import DailyForcast from './DailyForcast';
import WeeklyForcast from './WeeklyForcast';
import { setLocation, receiveLocationError } from './../actions/location_actions';

class Content extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.props.setLocation, this.props.receiveLocationError);
  }

  render() {
    if (this.props.errors.locationError) {
    return <div>{this.props.errors.locationError}</div>
    } else if (!this.props.location) {
     return ( <div>Requesting Location Information</div> )
    } else {
      return (
        <div>
          {this.props.mode === 1 ? <DailyForcast /> : <WeeklyForcast />}
          <br></br>
        </div>
      )
    }
  };
}

const mapStateToProps = ({ mode, location, errors }) => ({ mode, location, errors });

export default connect(mapStateToProps, { setLocation, receiveLocationError })(Content);