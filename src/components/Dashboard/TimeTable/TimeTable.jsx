import React from 'react';
import timeTable from '../../../assets/TimeTable.jpg';
import '../../../styles/Dashboard/TimeTable.scss';

const TimeTable = () => {
  return (
    <div className="wrapper">
      <div className="timetable">
        <img src={timeTable} alt="Time Table" />
      </div>
    </div>
  );
};

export default TimeTable;
