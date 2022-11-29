import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import '../../../styles/Dashboard/SubAttendence.scss';
import '../../../styles/Dashboard/Attendence.scss';


const SubjectLab = () => {
  const { subject } = useParams();
  
  return (
    <div className="wrapper">
        <div className="attendenceContainer">
            <h4>{subject}</h4>
            <hr />
        </div>
    </div>
  );
};

export default SubjectLab;
