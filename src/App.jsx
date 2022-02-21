import React, { useState, Component } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange, setDay } from '../src/utils/dateUtils.js';

import './common.scss';

// class App extends Component {
//   state = {
//     weekStartDate: new Date(),
//     visible: false,
//   };

//   handleCreateEvent = () => {
//     this.setState({
//       visible: true,
//     });
//   };

//   handleTodayDate = () => {
//     this.setState({
//       weekStartDate: new Date(),
//     });
//   };

//   handleLeft = () => {
//     this.setState({
//       weekStartDate: setDay(this.state.weekStartDate, false),
//     });
//   };

//   handleRight = () => {
//     this.setState({
//       weekStartDate: setDay(this.state.weekStartDate, true),
//     });
//   };

//   handleCloseModalEvent = () => {
//     this.setState({
//       visible: false,
//     });
//   };

//   render() {
//     const { weekStartDate } = this.state;
//     const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
//     return (
//       <>
//         <Header
//           onCreateEvent={this.handleCreateEvent}
//           onTodayDate={this.handleTodayDate}
//           onPrevMonth={this.handleLeft}
//           onNextMonth={this.handleRight}
//           date={this.state.weekStartDate}
//         />
//         <Calendar
//           weekDates={weekDates}
//           visible={this.state.visible}
//           onClose={this.handleCloseModalEvent}
//         />
//       </>
//     );
//   }
// }

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [visible, setVisible] = useState(false);

  const handleCreateEvent = () => {
    setVisible(true);
  };

  const handleTodayDate = () => {
    setWeekStartDate(new Date());
  };

  const handleLeft = () => {
    setWeekStartDate(setDay(weekStartDate, false));
  };

  const handleRight = () => {
    setWeekStartDate(setDay(weekStartDate, true));
  };

  const handleCloseModalEvent = () => {
    setVisible(false);
  };

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  return (
    <>
      <Header
        onCreateEvent={handleCreateEvent}
        onTodayDate={handleTodayDate}
        onPrevMonth={handleLeft}
        onNextMonth={handleRight}
        date={weekStartDate}
      />
      <Calendar 
      weekDates={weekDates} 
      visible={visible} 
      onClose={handleCloseModalEvent} />
    </>
  );
};

export default App;
