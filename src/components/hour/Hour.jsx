import React, { useState } from "react";

import Event from "../event/Event";
import { formatMins } from "../../../src/utils/dateUtils.js";

const Hour = ({ dataHour, hourEvents, onDelete }) => {
  // const [ currentEvent, setCurrentEvent ] = useState();

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, dateFrom, dateTo, title, description }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(
          dateFrom.getMinutes()
        )}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(
          dateTo.getMinutes()
        )}`;

        return (
          <Event
            key={id}
            //calculating event height = duration of event in minutes
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            id={id}
            onClick={onDelete}
            // onClick={() => {
            //   setCurrentEvent({ id, title, description, dateFrom, dateTo });
            // }}
          />
          // {/* {currentEvent && (
          //   <div key={currentEvent.id}>{currentEvent.title}</div>
          // )} */}
        );
      })}
    </div>
  );
};

export default Hour;