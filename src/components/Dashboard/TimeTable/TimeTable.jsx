import React from 'react';
import timeTable from '../../../assets/TimeTable.jpg';
import timeTable1 from '../../../assets/TimeTable1.jpeg';
import timeTable2 from '../../../assets/TimeTable2.jpg';
import '../../../styles/Dashboard/TimeTable.scss';

const TimeTable = () => {
  return (
    <div className="wrapper">
      <h4>1st Semester Time Table</h4>
      <hr/>
      <div className="timetable">
        <img src={timeTable1} alt="Time Table" />
      </div>
      <br/>
      <br/>
      <h4>3rd Semester Time Table</h4>
      <hr/>
      <div className="timetable">
        <img src={timeTable} alt="Time Table" />
      </div>
      <br/>
      <br/>
      <h4>5th Semester Time Table</h4>
      <hr/>
      <div className="timetable">
        <img src={timeTable2} alt="Time Table" />
      </div>
    </div>
  );
};

export default TimeTable;
