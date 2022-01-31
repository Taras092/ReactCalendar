import React, { useState } from "react";

import "./event.scss";

const Event = ({ height, marginTop, title, time, onClick, id }) => {
  const [state, setButtonState] = useState(false);
  const eventStyle = {
    height,
    marginTop,
  };

  const handleDelete = () => {
    onClick(id);
  };

  return (
    <div
      style={eventStyle}
      className="event"
      onClick={() => {
        setButtonState(true);
      }}
    >
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {state && (
        <button key={id} className=" delete-event-btn" onClick={handleDelete}>
          <i
            className="fa fa-trash event__delete-btn_icon"
            aria-hidden="true"
          ></i>
          Delete
        </button>
      )}
    </div>
  );
};

export default Event;
