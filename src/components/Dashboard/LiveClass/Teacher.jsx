import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Teacher = ({ data, batch }) => {
  console.log(data);

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
  const startClass = async () => {
    await axios
      .post('/student/classStart', {
        subjectId: data.sub,
      })
      .then(response => {
        // console.log(response);
        if (response.status === 200) {
          toast.success('Class Started');
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
        href={`http://localhost:7000/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button onClick={startClass}>Start CLass</button>
      </a>
      <button onClick={takeAttendence}>Take Attendence</button>
    </div>
  );
};

export default Teacher;
