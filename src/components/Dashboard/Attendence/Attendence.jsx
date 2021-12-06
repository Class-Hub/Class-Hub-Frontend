import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../../context/User.context';
import '../../../styles/Dashboard/Attendence.scss';
import AttendenceCard from './AttendenceCard';
import SubjectCard from './SubjectCard';

const Attendence = () => {
  const { user, setUser, loadUser } = useUser();
  const [subjects, setSubjects] = useState(null);

  useEffect(() => {
    loadUser();
    if (user) {
      setSubjects(user.teachingSubs);
    }
  }, []);

  const submitAttendance = async subjectId => {
    const response = await axios.post('/student/mark', { subjectId });

    await setUser(response.data.student);
  };

  return (
    <div className="wrapper">
      <div className="attendenceContainer">
        <h4>Attendence</h4>
        <hr />
        {user?.role !== 'admin' && <>This semesters Attendence Summary</>}
        {/* for students  */}
        <>
          <div className="subCardContainer">
            {user?.role !== 'admin' &&
              user?.attendance.map(subject => {
                const { totalDays, totalPresent, subName } = subject;

                return (
                  <SubjectCard
                    key={subject._id}
                    percentage={(totalPresent * 100) / totalDays}
                    totalDays={totalDays}
                    totalPresent={totalPresent}
                    subName={subName}
                  />
                );
              })}
          </div>

          {user?.role !== 'admin' && (
            <>
              <hr />
              <h5>Mark Today's Attendence Here</h5>
            </>
          )}
          <div className="subCardContainer">
            {user?.role !== 'admin'
              ? user?.attendance?.map(subject => {
                  return (
                    <AttendenceCard
                      key={subject._id}
                      subject={subject}
                      submitAttendance={submitAttendance}
                    />
                  );
                })
              : subjects?.length > 0 &&
                subjects?.map(el => {
                  return (
                    <Link key={el._id} to={`Attendence/${el.sub}`}>
                      <div className="subCardsAttendence">
                        {el.subName}
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.37451 18.8805L15.3745 12.8805L9.37451 6.88049"
                            stroke="#14279B"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </Link>
                  );
                })}
          </div>
        </>
        {/* for tachers */}
        {/* <div className="subCardContainer">
          {user &&
            user.role &&
            user.role === 'admin' &&
            subjects &&
            subjects.length > 0 &&
            subjects.map(el => {
              return (
                <Link key={el._id} to={`Attendence/${el.sub}`}>
                  <div className="subCardsAttendence">
                    {el.subName}
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.37451 18.8805L15.3745 12.8805L9.37451 6.88049"
                        stroke="#14279B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              );
            })}
        </div> */}
      </div>
    </div>
  );
};

export default Attendence;
