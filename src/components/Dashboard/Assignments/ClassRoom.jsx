import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../../styles/Dashboard/ClassRoom.scss';
import Member from './Member';
import Modal from 'react-modal';
import { useUser } from '../../../context/User.context';
import profile from '../../../assets/Profile.png';
import moment from 'moment';
import { toast } from 'react-toastify';
import { useMediaQuery } from '../../../misc/custom-hooks';

const ClassRoom = () => {
  const { user } = useUser();
  const { classId } = useParams();
  const [currClass, setCurrClass] = useState(null);
  const [currClassWork, setCurrClassWork] = useState(null);
  const [studentsList, setStudentsList] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [emailOfStudent, setEmailOfStudent] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [inputDeadline, setInputDealine] = useState('');
  const [inputType, setInputType] = useState('long answer');
  const [currentSection, setCurrentSection] = useState(false);
  const isMobile = useMediaQuery('(max-width: 992px)');

  const fetchCurrentClassDetails = useCallback(async () => {
    await axios
      .get(`/class/get/class/${classId}`)
      .then(response => {
        setCurrClass(response.data);
        // console.log(response.data.students);
        setStudentsList(response.data.students);
      })
      .catch(err => {
        toast.error('Error occured', err);
        console.log(err);
      });
  }, [classId]);

  const fetchCurrentClassWork = useCallback(async () => {
    await axios
      .get(`/classwork/class/get/${classId}`)
      .then(response => {
        setCurrClassWork(response.data);
        // console.log(response.data);
      })
      .catch(err => {
        toast.error('Error occured', err);
        console.log(err);
      });
  }, [classId]);

  useEffect(() => {
    fetchCurrentClassDetails();
    fetchCurrentClassWork();
  }, [fetchCurrentClassDetails, fetchCurrentClassWork]);

  const AddStudent = async () => {
    await axios
      .post(`/class/students/register`, {
        classId: classId,
        studentEmail: emailOfStudent,
      })
      .then(response => {
        // console.log(response.status);
        if (response.status === 200) {
          toast.success('Student Added');
        }
      })
      .catch(err => {
        toast.error('Error occured', err);
        console.log(err);
      });
    fetchCurrentClassDetails();
    setModalIsOpen(false);
  };
  const createWork = async () => {
    await axios
      .post(`/classwork/create`, {
        title: title,
        description: description,
        classId: classId,
        type: inputType,
        duedate: inputDeadline,
      })
      .then(response => {
        // console.log(response.status);
        if (response.status === 200) {
          toast.success('Classwork Created');
        }
      })
      .catch(err => {
        toast.error('Error occured', err);
        console.log(err);
      });
    fetchCurrentClassWork();
    setModalIsOpen(false);
  };

  return (
    <div className="wrapper">
      <div className="classroombox">
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
            {!studentsList && (
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
            {studentsList && studentsList.length === 0 && (
              <h5 className="text-center">No Students in Class</h5>
            )}
            {studentsList &&
              studentsList.length > 0 &&
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
        {!currentSection && (
          <div className="classworkBottom">
            {user && user.role && user.role === 'admin' && (
              <h6
                onClick={() => {
                  setModalIsOpen(true);
                }}
              >
                Create Work
              </h6>
            )}
            {!currClassWork && (
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
            {currClassWork && currClassWork.length === 0 && (
              <h5 className="text-center">No ClassWork Found</h5>
            )}

            {currClassWork &&
              currClassWork.length > 0 &&
              currClassWork.map(a => {
                return (
                  <Link key={a._id} to={`${classId}/${a._id}`}>
                    <div className="work row" key={a._id}>
                      <div className="col-2 col-sm-1">
                        <img
                          src={profile}
                          alt="student"
                          width="40px"
                          height="40px"
                        />
                      </div>

                      <div className="workmid col-sm-9">
                        <h3>{a.title}</h3>
                        <p>
                          Posted {moment(a.createdAt).fromNow()}
                          {a.createdAt !== a.updatedAt ? (
                            <span>
                              (updated {moment(a.updatedAt).fromNow()})
                            </span>
                          ) : null}
                          by {a.author.name}
                        </p>
                      </div>

                      {a.duedate ? (
                        <p className="col duedate">
                          Due: {moment(a.duedate).fromNow()}
                        </p>
                      ) : null}
                    </div>
                  </Link>
                );
              })}
          </div>
        )}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        style={
          !isMobile
            ? {
                overlay: {},
                content: {
                  width: '50%',
                  height: 'auto',
                  top: '50%',
                  borderRadius: '10px',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                },
              }
            : {
                overlay: {},
                content: {
                  width: '90%',
                  height: 'auto',
                  top: '50%',
                  borderRadius: '10px',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                },
              }
        }
      >
        <h4 className="modal-Heading">
          {currentSection && <>Add Student</>}
          {!currentSection && <>Create Work</>}
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
          {currentSection && (
            <>
              <label htmlFor="id">Email of the Student</label>{' '}
              <input
                type="email"
                value={emailOfStudent}
                name="id"
                id="id"
                onChange={e => {
                  setEmailOfStudent(e.target.value);
                }}
              />
            </>
          )}
          {!currentSection && (
            <>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                value={title}
                name="title"
                onChange={e => {
                  setTitle(e.target.value);
                }}
              />
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                onChange={e => {
                  setDescription(e.target.value);
                }}
                value={description}
                cols="30"
                rows="10"
              />
              <label htmlFor="type">Choose a car:</label>

              <select
                id="type"
                onChange={e => {
                  setInputType(e.target.value);
                }}
              >
                <option value="long answer">long answer</option>
                <option value="short answer">short answer</option>
              </select>
              <input
                type="datetime-local"
                className="form-control"
                value={inputDeadline}
                onChange={({ target: { value } }) => setInputDealine(value)}
                min={new Date().toJSON().substr(0, 16)}
              />
            </>
          )}
        </div>
        {currentSection && (
          <button onClick={AddStudent} className="updateorCreate">
            Add
          </button>
        )}
        {!currentSection && (
          <button onClick={createWork} className="updateorCreate">
            Create
          </button>
        )}
      </Modal>
    </div>
  );
};

export default ClassRoom;
