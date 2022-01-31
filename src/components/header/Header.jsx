import React from "react";
import { months } from "../../utils/dateUtils.js";

import "./header.scss";

const setMonth = (value) => {
  return months.find((month, index) => {
    if (index === value) {
      return month;
    }
  });
};

const Header = ({ onCreateEvent, onTodayDate, onPrevMonth, onNextMonth, date }) => {
  const currentMonth = setMonth(date.getMonth()).slice(0, 3);
  const nextMouth = setMonth((date.getMonth() + 1) % 12).slice(0, 3);

  return (
    <header className="header">
      <div className="header__title">Calendar</div>
      <div className="header__description">
        <button className="button create-event-btn" onClick={onCreateEvent}>
          <i className="fas fa-plus create-event-btn__icon"></i>Create
        </button>
        <div className="navigation">
          <button
            className="navigation__today-btn button"
            onClick={onTodayDate}
          >
            Today
          </button>
          <button
            className="icon-button navigation__nav-icon"
            onClick={onPrevMonth}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="icon-button navigation__nav-icon"
            onClick={onNextMonth}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          <span className="navigation__displayed-month">
            {`${currentMonth} - ${nextMouth}`}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
