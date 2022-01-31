import React from "react";
import moment from "moment";
import { days } from "../../utils/dateUtils.js";

const formatDate = (date) => moment(date).format("L");

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => (
        <div
          key={Math.random()}
          className={
            formatDate(dayDate) === formatDate(new Date())
              ? "calendar__day-label day-label calendar__today"
              : "calendar__day-label day-label"
          }
        >
          <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
          <span className="day-label__day-number">{dayDate.getDate()}</span>
        </div>
      ))}
    </header>
  );
};

export default Navigation;
