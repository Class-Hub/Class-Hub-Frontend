import React, { useEffect, useState } from 'react';
import { useUser } from '../../../context/User.context';
import '../../../styles/Dashboard/Assignments.scss';
import Subjectcard from './Subjectcard';
import axios from 'axios';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { useMediaQuery } from '../../../misc/custom-hooks';

Modal.setAppElement('#root');
const Assignments = () => {
  const { user } = useUser();
  const [classrooms, setClassrooms] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const isMobile = useMediaQuery('(max-width: 992px)');

  // console.log(user);

  const getClasses = () => {
    axios
      .get(`/class/getAllCLass`)
      .then(response => {
        // console.log(response.data.classes);
        setClassrooms(response.data.classes);
      })
      .catch(err => {
        toast.error('Error occured', err);
        console.log(err);
      });
  };

  useEffect(() => {
    getClasses();
  }, []);

  const createClass = async () => {
    setModalIsOpen(false);

    await axios
      .post(`/class/create`, {
        title: title,
        description: description,
        owner: user._id,
      })
      .then(response => {
        // console.log(response);
        if (response.status === 201) {
          toast.success('Classroom Created Successfully');
        }
      })
      .catch(err => {
        toast.error('Error occured', err);
        console.log(err);
      });
    getClasses();
  };

  return (
    <div className="wrapper">
      <div className="assignmentsContainer">
        <h4>
          Assignments
          {user && user.role && user.role === 'admin' && (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              onClick={() => {
                setModalIsOpen(true);
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#14279B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 8V16"
                stroke="#14279B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 12H16"
                stroke="#14279B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </h4>

        <hr />
        <div className="allsubjects">
          {!classrooms && (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
          {classrooms && classrooms.length === 0 && (
            <h3>No classRooms Found</h3>
          )}
          {classrooms &&
            classrooms.length > 0 &&
            classrooms.map(element => (
              <Subjectcard
                key={element.code}
                element={element}
                getClasses={getClasses}
              />
            ))}
        </div>
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
          Create Class
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
          <label htmlFor="title">Class Title</label>
          <input
            type="text"
            value={title}
            name="title"
            id="title"
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
          <label htmlFor="description">Class Description</label>
          <textarea
            name="description"
            value={description}
            id=""
            cols="30"
            rows="7"
            onChange={e => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <button onClick={createClass} className="updateorCreate">
          Create
        </button>
      </Modal>
    </div>
  );
};

export default Assignments;
