import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import profile from '../../../assets/Profile.png';
import { toast } from 'react-toastify';

const Member = ({ a, remove, setStudentsList }) => {
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
        // console.log(response.data);
        if (response.status === 200) {
          toast.success('Student removed');
          setStudentsList(response.data.data.students);
        }
      })
      .catch(err => {
        toast.error('Error occured', err);
        console.log(err);
      });
  };

  return (
    <div className="student row">
      <div className="col-1">
        <img
          src={a.photo || profile}
          alt="student"
          width="40px"
          height="40px"
        />
      </div>
      <h5 className="col-5">{a.name}</h5>
      {!remove && <h6 className="col-6">{a.email}</h6>}
      {remove && (
        <>
          <h6 className="col-5">{a.email}</h6>
          <button className="col-1" onClick={removeStudent}>
            Remove
          </button>
        </>
      )}
    </div>
  );
};

export default Member;
