import React, { Component } from "react";

import "./modal.scss";

class Modal extends Component {
  state = {
    title:'',
    description:'',
    date:new Date(),
    startTime: '',
    endTime:'',

  }

  handleChange = (event) => {
    const { name, value } = event.target;
        this.setState({
          [name]: value,
        });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { title, description, date, startTime, endTime } = this.state;
    if (this.props.onSubmit) {
      this.props.onSubmit({
        title,
        description,
        dateFrom: new Date(`${date} ${startTime}`),
        dateTo: new Date(`${date} ${endTime}`),
      });
    }
    this.props.onClose();
  }

  render() {
    return (
      <div className="modal overlay">
        <div className="modal__content">
          <div className="create-event">
            <button
              className="create-event__close-btn"
              onClick={this.props.onClose}
            >
              +
            </button>
            <form className="event-form" onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="event-form__field"
                onChange={this.handleChange}
                value={this.state.title}
              />
              <div className="event-form__time">
                <input
                  type="date"
                  name="date"
                  className="event-form__field"
                  onChange={this.handleChange}
                  value={this.state.date}
                />
                <input
                  type="time"
                  name="startTime"
                  className="event-form__field"
                  onChange={this.handleChange}
                  value={this.state.startTime}
                />
                <span>-</span>
                <input
                  type="time"
                  name="endTime"
                  className="event-form__field"
                  onChange={this.handleChange}
                  value={this.state.endTime}
                />
              </div>
              <textarea
                name="description"
                placeholder="Description"
                className="event-form__field"
                onChange={this.handleChange}
                value={this.state.description}
              ></textarea>
              <button type="submit" className="event-form__submit-btn">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
