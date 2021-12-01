import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import profile from '../../../assets/Profile.png';

const Member = ({ a, remove, setStudentsList}) => {
  const { classId } = useParams();
  const removeStudent = async () => {
    await axios
      .delete(`/class/students/delete`, {
        data: {
          classId: classId,
          studentId: a._id,
        },
      })
      .then(response => {
        console.log(response.data);
        setStudentsList(response.data.students);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="student">
      <img src={profile} alt="student" width="40px" height="40px" />
      <h5>{a.name}</h5>
      <h6>{a.email}</h6>
      {remove && <button onClick={removeStudent}>Remove</button>}
    </div>
  );
};

export default Member;
