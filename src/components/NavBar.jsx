import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMode } from '../actions/mode_actions';

class NavBar extends Component {
  
  // Button click handler toggles state of UI via mode_actions.js
  handleClick() {
    this.props.changeMode();
  }

  render() {
    return (
      <div>
        <h1>Weather-App</h1>
        <br/>
        <button disabled={this.props.mode === 1} onClick={this.handleClick.bind(this)}>Today's Forecast</button>
        <button disabled={this.props.mode === 2} onClick={this.handleClick.bind(this)}>5 day Forecast</button>
      </div>
    )
  }
}

const mapStateToProps = ({ mode }) => ({ mode });

export default connect(mapStateToProps, { changeMode })(NavBar);