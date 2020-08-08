import React, { Component } from 'react';
import { connect } from 'react-redux';
import DailyForcast from './DailyForcast';
import WeeklyForcast from './WeeklyForcast';


class Content extends Component {
  render() {
    return (
      <div>
        {this.props.mode === 1 ? <DailyForcast /> : <WeeklyForcast />}
      </div>
    )
  };
}

const mapStateToProps = ({ mode }) => ({ mode });

export default connect(mapStateToProps, null)(Content);