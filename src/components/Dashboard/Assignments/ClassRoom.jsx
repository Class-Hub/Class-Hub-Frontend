import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../../styles/Dashboard/ClassRoom.scss';

const ClassRoom = () => {
  const { classId } = useParams();
  const [currClass, setCurrClass] = useState(null);
  const [classWork, setClassWork] = useState(null);

  //   useEffect(() => {
  //     axios
  //       .get(`/classwork/class/get/${classId}`)
  //       .then(response => {
  //         console.log(response.data);
  //         // setClassWork(response.data);
  //       })
  //       .catch(err => console.log(err));
  //   }, []);
  useEffect(() => {
    axios
      .get(`/class/get/class/${classId}`)
      .then(response => {
        console.log(response.data);
        setCurrClass(response.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="wrapper">
      <Link to={`/Assignments`}>
        <svg
          width="40"
          height="40"
          className="back"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.6667 20H8.33333"
            stroke="#14279B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 31.6666L8.33333 20L20 8.33331"
            stroke="#14279B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Go Back
      </Link>
      <div className="classBanner">
        {currClass && <h5>{currClass.title}</h5>}
        {currClass && <h6>{currClass.code}</h6>}
      </div>
    </div>
  );
};

export default ClassRoom;
