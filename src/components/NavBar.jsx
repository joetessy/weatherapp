import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMode } from '../actions/mode_actions';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.changeMode();
  }

  render() {
    return (
      <div>
        <h1>Weather-App</h1>
        <br></br>
        <button disabled={this.props.mode === 1} onClick={this.handleClick}>Today's Forecast</button>
        <button disabled={this.props.mode === 2} onClick={this.handleClick}>5 day Forecast</button>
      </div>
    )
  }
}


const mapStateToProps = ({ mode }) => ({ mode });
export default connect(mapStateToProps, { changeMode })(NavBar);