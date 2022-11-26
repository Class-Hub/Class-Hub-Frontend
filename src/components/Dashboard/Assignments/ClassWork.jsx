import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router';
import { useUser } from '../../../context/User.context';
import '../../../styles/Dashboard/ClassWork.scss';
import profile from '../../../assets/Profile.png';
import axios from 'axios';
import Modal from 'react-modal';
import moment from 'moment';
import { toast } from 'react-toastify';
import { useMediaQuery } from '../../../misc/custom-hooks';

const ClassWork = () => {
  const { classId, classWork } = useParams();
  const { user } = useUser();
  const [WorkDetails, setWorkDetails] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [answer, setAnswer] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [inputDeadline, setInputDealine] = useState('');
  const [inputType, setInputType] = useState('');
  const history = useHistory();
  const isMobile = useMediaQuery('(max-width: 992px)');

  const fetchCurrClassWorkDetails = useCallback(async () => {
    await axios
      .get(`/classwork/get/${classWork}`)
      .then(response => {
        // console.log(response.data);
        setWorkDetails(response.data);
      })
      .catch(err => {
        toast.error('Error occured', err);
        console.log(err);
      });
  }, [classWork]);

  useEffect(() => {
    fetchCurrClassWorkDetails();
  }, []);

  const updateWork = async () => {
    await axios
      .patch(`/classwork/update/${classWork}`, {
        title: title,
        description: description,
        classId: classId,
        type: inputType,
        duedate: inputDeadline,
      })
      .then(response => {
        // console.log(response.data);
        toast.success('Classwork Updated Successfully');
        setWorkDetails(response.data.classwork);
      })
      .catch(err => {
        toast.error('Error occured', err);
        console.log(err);
      });
    // fetchCurrClassWorkDetails();
    setModalIsOpen(false);
  };

  const deleteWork = async () => {
    await axios
      .delete(`/classwork/delete/${classWork}`)
      .then(response => {
        // console.log(response.status);
        if (response.status === 200) {
          toast.success('Classwork deleted');
        }
      })
      .catch(err => {
        toast.error('Error occured', err);
        console.log(err);
      });
    history.push(`/Assignments/${classId}`);
  };
  const sendAnswer = async () => {
    await axios
      .post(`/classwork/submit/answer`, {
        classwork: classWork,
        answer: answer,
      })
      .then(response => {
        // console.log(response);
        toast.success('Answer Submitted');
        setAnswer('');
      })
      .catch(err => {
        toast.error('Error occured', err);
        console.log(err);
      });
    fetchCurrClassWorkDetails();
    // console.log(answer);
  };

  return (
    <div className="wrapper">
      <div className="workContainer">
        <Link to={`/Assignments/${classId}`}>
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
        {!WorkDetails && (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {WorkDetails && (
          <>
            <div className="top">
              <h4>{WorkDetails.title}</h4>
              {user && user.role && user.role === 'admin' && (
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  onClick={() => {
                    setModalIsOpen(true);
                    setDescription(WorkDetails.description);
                    setTitle(WorkDetails.title);
                    setInputDealine(WorkDetails.duedate);
                    setInputType(WorkDetails.types);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_216_42)">
                    <path
                      d="M11.9467 4.68976H4.94673C4.4163 4.68976 3.90759 4.90047 3.53252 5.27554C3.15745 5.65062 2.94673 6.15933 2.94673 6.68976V20.6898C2.94673 21.2202 3.15745 21.7289 3.53252 22.104C3.90759 22.479 4.4163 22.6898 4.94673 22.6898H18.9467C19.4772 22.6898 19.9859 22.479 20.3609 22.104C20.736 21.7289 20.9467 21.2202 20.9467 20.6898V13.6898"
                      stroke="#150E56"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.4467 3.18974C19.8446 2.79192 20.3841 2.56842 20.9467 2.56842C21.5093 2.56842 22.0489 2.79192 22.4467 3.18974C22.8446 3.58757 23.0681 4.12713 23.0681 4.68974C23.0681 5.25235 22.8446 5.79192 22.4467 6.18974L12.9467 15.6897L8.94673 16.6897L9.94673 12.6897L19.4467 3.18974Z"
                      stroke="#150E56"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_216_42">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.946732 0.689758)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              )}
              {user && user.role && user.role === 'admin' && (
                <svg
                  width="25"
                  height="25"
                  onClick={deleteWork}
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.06815 6.10931H5.06815H21.0681"
                    stroke="#FF000F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.06815 6.10931V4.10931C8.06815 3.57888 8.27886 3.07017 8.65393 2.6951C9.02901 2.32003 9.53771 2.10931 10.0681 2.10931H14.0681C14.5986 2.10931 15.1073 2.32003 15.4824 2.6951C15.8574 3.07017 16.0681 3.57888 16.0681 4.10931V6.10931M19.0681 6.10931V20.1093C19.0681 20.6397 18.8574 21.1485 18.4824 21.5235C18.1073 21.8986 17.5986 22.1093 17.0681 22.1093H7.06815C6.53771 22.1093 6.029 21.8986 5.65393 21.5235C5.27886 21.1485 5.06815 20.6397 5.06815 20.1093V6.10931H19.0681Z"
                    stroke="#FF000F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.0681 11.1093V17.1093"
                    stroke="#FF000F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.0681 11.1093V17.1093"
                    stroke="#FF000F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>

            <hr />
            <p>{WorkDetails.description}</p>
            <hr />
            <div className="giveAnswer">
              <img src={profile} alt="student" width="40px" height="40px" />
              <textarea
                onChange={e => {
                  setAnswer(e.target.value);
                }}
                value={answer}
                cols="30"
                rows="2"
              />
              <button onClick={sendAnswer}>Send</button>
            </div>
            {WorkDetails.answer?.map(el => {
              return (
                <div key={el._id} className="answers">
                  <img src={profile} alt="student" width="40px" height="40px" />
                  <div className="content">
                    <h6>{el.student.name}</h6>
                    <p>{el.answer}</p>
                    {moment(el.answeredOn).fromNow()}
                  </div>
                </div>
              );
            })}
          </>
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
          Update Work
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
          <label htmlFor="type">Choose a question type:</label>

          <select
            id="type"
            value={inputType}
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
        </div>

        <button onClick={updateWork} className="updateorCreate">
          Update
        </button>
      </Modal>
    </div>
  );
};
export default ClassWork;
