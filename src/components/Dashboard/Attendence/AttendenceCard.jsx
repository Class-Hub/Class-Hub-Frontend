import React, { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AttendenceCard = ({ subject, submitAttendance }) => {
  useEffect(() => {
    if (subject.expDate && Date.now() >= subject.expDate) {
      // console.log(subject.expDate);
      axios
        .post('/student/attendanceDisabled', { subjectId: subject.sub })
        .then(response => {
          // console.log(response);
        })
        .catch(err => {
          toast.error('Error occured', err);
          console.log(err);
        });
    }
  }, [subject]);
  return (
    <div className="subjectsContainer">
      <label className="subjects">
        <input
          type="radio"
          onChange={() => submitAttendance(subject.sub)}
          disabled={!subject.isActive}
          defaultChecked={subject.isMarked}
        />
        <span className="checkmark"></span>
        {subject.subName}
      </label>
    </div>
  );
};

export default AttendenceCard;
