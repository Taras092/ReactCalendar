import React from 'react';
import Hour from '../hour/Hour';

import './day.scss';

const Day = ({ dataDay, dayEvents, onDelete }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
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
