import React from "react";
import { months } from "../../utils/dateUtils.js";
import moment from "moment";

import "./header.scss";

const setMonth = (value) => {
  return months.find((month, index) => {
    if (index === value) {
      return month;
    }
  });
};
const month1 = setMonth(new Date().getMonth()).slice(0, 3);
const mouth2 = setMonth(new Date().getMonth() + 1).slice(0, 3);



const Header = () => {
  return (
    <header className="header">
      <div className="header__title">Calendar</div>
      <div className="header__description">
        <button className="button create-event-btn">
          <i className="fas fa-plus create-event-btn__icon"></i>Create
        </button>
        <div className="navigation">
          <button className="navigation__today-btn button">Today</button>
          <button className="icon-button navigation__nav-icon">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="icon-button navigation__nav-icon">
            <i className="fas fa-chevron-right"></i>
          </button>
          <span className="navigation__displayed-month">
            {`${month1} - ${mouth2}`}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
