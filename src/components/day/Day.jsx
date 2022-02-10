import React from 'react';
import Hour from '../hour/Hour';
import TimeLine from '../TimeLine/TimeLine';

import './day.scss';

const Day = ({ dataDay, dayEvents, onDelete }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  // const isToday = dataDay === new Date().getDate();
  // const isHour = hours.map(hour => new Date().getHours() === hour);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {/* {isToday && isHour ? <TimeLine /> : null} */}
      {hours.map(hour => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);
        return (
          <Hour
            key={dataDay + hour}
            dataDay={dataDay}
            dataHour={hour}
            hourEvents={hourEvents}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default Day;
