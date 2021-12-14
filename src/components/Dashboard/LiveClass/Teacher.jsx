import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Teacher = ({ data, batch }) => {
  const takeAttendence = async () => {
    await axios
      .post('/student/dayTotal', {
        subjectId: data.sub,
      })
      .then(response => {
        // console.log(response);
        if (response.status === 200) {
          toast.success('Attendence Sent');
        }
      })
      .catch(err => {
        toast.error('Error occured', err);
        console.log(err);
      });
  };

  const join = () => {
    console.log('joined');
  };

  return (
    <div className="tlive">
      <h4> {data.subName} </h4>
      <h6> Batch : {batch} </h6>
      <a
        href={`https://class-hub-backend.herokuapp.com/liveClass`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button onClick={join}>Start CLass</button>
      </a>
      <button onClick={takeAttendence}>Take Attendence</button>
    </div>
  );
};

export default Teacher;
