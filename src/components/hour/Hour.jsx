import React from "react";
import Event from "../event/Event";
import { formatMins } from "../../../src/utils/dateUtils.js";
import TimeLine from "../TimeLine/TimeLine";

const Hour = ({ dataHour, hourEvents, onDelete, dataDay }) => {
    const isToday = dataDay === new Date().getDate();
    const isHour = new Date().getHours() === dataHour;
  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {isToday && isHour ? <TimeLine marginTop={new Date().getMinutes()} /> : null}
      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

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
          />
        );
      })}
    </div>
  );
};

export default Hour;