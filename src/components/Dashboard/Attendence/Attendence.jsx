import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../../context/User.context';
import '../../../styles/Dashboard/Attendence.scss';
import SubjectCard from './SubjectCard';

const Attendence = () => {
  const { user, setUser, loadUser } = useUser();
  const [subjects, setSubjects] = useState(null);

  useEffect(() => {
    loadUser();
    if (user) {
      setSubjects(user.teachingSubs);
    }
  }, [loadUser, user]);

  const submitAttendance = async subjectId => {
    // const token = localStorage.getItem('classHub');
    // const config = {
    //   headers: {
    //     Authorization: 'Bearer ' + token,
    //   },
    // };
    const response = await axios.post('/student/mark', { subjectId });

    await setUser(response.data.student);
  };

  return (
    <div className="wrapper">
      <div className="attendenceContainer">
        <h4>Attendence</h4>
        <hr />
        This semesters Attendence Summary
        {/* for students  */}
        <>
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
                    <div key={subject._id} className="subjectsContainer">
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
