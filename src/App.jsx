import React, { Component } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";

import {
  getWeekStartDate,
  generateWeekRange,
  setDay,
} from "../src/utils/dateUtils.js";

import "./common.scss";

class App extends Component {
  state = {
    weekStartDate: new Date(),
    visible: false,
  };

  handleCreateEvent = () => {
    this.setState({
      visible: true,
    });
  };

  handleTodayDate = () => {
    this.setState({
      weekStartDate: new Date(),
    });
  };

  handleLeft = () => {
    this.setState({
      weekStartDate: setDay(this.state.weekStartDate,false),
    });
  };

  handleRight = () => {
    this.setState({
      weekStartDate: setDay(this.state.weekStartDate, true),
    });
  };

  handleCloseModalEvent = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { weekStartDate } = this.state;
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

    return (
      <>
        <Header
          handleCreateEvent={this.handleCreateEvent}
          handleTodayDate={this.handleTodayDate}
          handleLeft={this.handleLeft}
          handleRight={this.handleRight}
          date={this.state.weekStartDate}
        />
        <Calendar
          weekDates={weekDates}
          visible={this.state.visible}
          onClose={this.handleCloseModalEvent}
        />
      </>
    );
  }
}

export default App;
