import React, { useEffect, useState } from 'react';
import './timeline.scss';

const TimeLine = ({ marginTop }) => {
  const [timeLine, setTimeLine] = useState(marginTop);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTimeLine(new Date().getMinutes());
    }, 60000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div style={{ marginTop }}>
      <div className="circle"></div>
      <div className="time-line"></div>
    </div>
  );
};

export default TimeLine;
