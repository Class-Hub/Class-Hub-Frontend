import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useUser } from '../../../context/User.context';
import '../../../styles/Dashboard/Attendence.scss';
import SubjectCard from './SubjectCard';

const Attendence = () => {
  const { user, setUser, loadUser } = useUser();

  useEffect(() => {
    loadUser();
  }, []);

  // console.log('ujjwal', user);

  const submitAttendance = async subjectId => {
    const token = localStorage.getItem('classHub');
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    const response = await axios.post('/student/mark', { subjectId }, config);

    await setUser(response.data.student);
  };

  return (
    <div className="wrapper">
      <div className="attendenceContainer">
        <h4>Attendence</h4>
        <hr />
        This semesters Attendence Summary
        <div className="subCardContainer">
          {user?.role !== 'admin' &&
            user?.attendance.map(subject => {
              const { totalDays, totalPresent, subName } = subject;

              return (
                <>
                  <SubjectCard
                    percentage={(totalPresent * 100) / totalDays}
                    totalDays={totalDays}
                    totalPresent={totalPresent}
                    subName={subName}
                  />
                  {/* <SubjectCard percentage={30} /> */}
                </>
              );
            })}
        </div>
        <hr />
        <h5>Mark Today's Attendence Here</h5>
        <div className="subCardContainer">
          {user?.role !== 'admin'
            ? user?.attendance?.map(subject => {
                return (
                  <>
                    <div className="subjectsContainer">
                      <label className="subjects">
                        <input
                          type="radio"
                          onChange={() => submitAttendance(subject.sub)}
                          disabled={!subject.isActive}
                          defaultChecked={subject.isMarked}
                        />
                        <span class="checkmark"></span>
                        {subject.subName}
                      </label>
                    </div>
                  </>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Attendence;
