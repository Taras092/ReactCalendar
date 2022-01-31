import React, { Component } from "react";

import Navigation from "./../navigation/Navigation";
import Week from "../week/Week";
import Sidebar from "../sidebar/Sidebar";
import {
  fetchEventsCalendare,
  createEvent,
  deleteEvent,
} from "../../gateway/events";

import "./calendar.scss";
import Modal from "../modal/Modal";

class Calendar extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents = () => {
    fetchEventsCalendare().then((eventsCalendare) =>
      this.setState({
        events: eventsCalendare,
      })
    );
  }

  handleSubmit = (event) => {
    event.id = Math.random();
    // this.setState({
    //   events: [...this.state.events, event],
    // });

    createEvent(event).then(() => this.fetchEvents());
  };

  handleEventDelete = (id) => {
    deleteEvent(id).then(() => this.fetchEvents());
  };

  render() {
    const { weekDates } = this.props;

    return (
      <section className="calendar">
        <Navigation weekDates={weekDates} />
        <div className="calendar__body">
          <div className="calendar__week-container">
            {this.props.visible && (
              <Modal
                onClose={this.props.onClose}
                onSubmit={this.handleSubmit}
              />
            )}
            <Sidebar />
            <Week
              weekDates={weekDates}
              events={this.state.events}
              onDelete={this.handleEventDelete}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Calendar;
