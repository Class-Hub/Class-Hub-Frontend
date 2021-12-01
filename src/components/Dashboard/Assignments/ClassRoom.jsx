import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../../styles/Dashboard/ClassRoom.scss';
import Member from './Member';
import Modal from 'react-modal';
import { useUser } from '../../../context/User.context';

const ClassRoom = () => {
  const { user } = useUser();
  const { classId } = useParams();
  const [currClass, setCurrClass] = useState(null);
  const [studentsList, setStudentsList] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [emailOfStudent, setEmailOfStudent] = useState('');
  const [currentSection, setCurrentSection] = useState(false);

  const fetchCurrentClassDetails = useCallback(async () => {
    await axios
      .get(`/class/get/class/${classId}`)
      .then(response => {
        setCurrClass(response.data);
        // console.log(response.data.students);
        setStudentsList(response.data.students);
      })
      .catch(err => console.log(err));
  }, [classId]);
  useEffect(() => {
    fetchCurrentClassDetails();
  }, [fetchCurrentClassDetails]);

  const AddStudent = async () => {
    await axios
      .post(`/class/students/register`, {
        classId: classId,
        studentEmail: emailOfStudent,
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => console.log(err));
    fetchCurrentClassDetails();
    setModalIsOpen(false);
  };

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
      <div className="classroombox">
        <div className="classBanner">
          {currClass && <h5>{currClass.title}</h5>}
          {currClass && <h6>{currClass.code}</h6>}
        </div>
        <div className="classroomOptions">
          <li
            className={!currentSection ? 'active' : ''}
            onClick={() => {
              setCurrentSection(!currentSection);
            }}
          >
            ClassWork
          </li>
          <li
            className={currentSection ? 'active' : ''}
            onClick={() => {
              setCurrentSection(!currentSection);
            }}
          >
            Students
          </li>
        </div>

        {/* students section */}
        {currentSection && (
          <div className="studentsBottom">
            {user && user.role && user.role === 'admin' && (
              <h6
                onClick={() => {
                  setModalIsOpen(true);
                }}
              >
                Add Student
              </h6>
            )}
            {studentsList &&
              studentsList.map(a => {
                return (
                  <Member
                    key={a._id}
                    a={a}
                    setStudentsList={setStudentsList}
                    email={emailOfStudent}
                    remove={user && user.role && user.role === 'admin'}
                  />
                );
              })}
          </div>
        )}

        {/* Classwork section */}
        {!currentSection && <div>bhart</div>}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        style={{
          overlay: {},
          content: {
            width: '50%',
            height: 'auto',
            top: '50%',
            borderRadius: '30px',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <h4 className="modal-Heading">
          Add Student
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            onClick={() => {
              setModalIsOpen(false);
            }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3745 6.42627L6.3745 18.4263"
              stroke="#393939"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.3745 6.42627L18.3745 18.4263"
              stroke="#393939"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </h4>
        <hr />
        <div className="modalForm">
          <label htmlFor="id">Id of the Student</label>
          <input
            type="email"
            value={emailOfStudent}
            name="id"
            id="id"
            onChange={e => {
              setEmailOfStudent(e.target.value);
            }}
          />
        </div>
        <button onClick={AddStudent} className="updateorCreate">
          Add
        </button>
      </Modal>
    </div>
  );
};

export default ClassRoom;
