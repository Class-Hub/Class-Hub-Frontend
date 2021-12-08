import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../../styles/Dashboard/SubAttendence.scss';
import StudentRow from './StudentRow';

const SubAttendence = () => {
  const { subId } = useParams();
  const [studentsInClass, setStudentsInClass] = useState(null);
  const fetchSubDetails = useCallback(async () => {
    await axios
      .post(`/student/getStudent/${subId}`)
      .then(response => {
        // console.log(response.data);
        setStudentsInClass(response.data.students);
      })
      .catch(err => console.log(err));
  }, [subId]);
  useEffect(() => {
    fetchSubDetails();
  }, [fetchSubDetails]);
  return (
    <div className="wrapper">
      <div className="students">
        <Link to={`/Attendence`}>
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
        {!studentsInClass && (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {studentsInClass && studentsInClass.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Student Name</th>
                <th scope="col">Email</th>
                <th scope="col">Attendence</th>
              </tr>
            </thead>
            <tbody>
              {studentsInClass.map(el => {
                return (
                  <StudentRow
                    key={el._id}
                    data={el}
                    index={studentsInClass.indexOf(el)}
                    subId={subId}
                  />
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default SubAttendence;
