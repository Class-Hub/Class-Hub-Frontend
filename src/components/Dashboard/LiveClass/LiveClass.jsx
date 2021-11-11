import React, { useState } from 'react';
import '../../../styles/Dashboard/LiveClass.scss';
import Student from './Student';
import Teacher from './Teacher';

const LiveClass = () => {
  const [isTeacher, setIsTeacher] = useState(false);
  return (
    <div className="wrapper">
      <div className="LiveContainer">
        <h4>Live Class</h4>
        <hr />
        <div className="liveclasses">
          {isTeacher && <Teacher />}
          {!isTeacher && <Student />}
        </div>
      </div>
    </div>
  );
};

export default LiveClass;
