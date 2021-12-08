import axios from 'axios';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useUser } from '../../../context/User.context';
import { useMediaQuery } from '../../../misc/custom-hooks';
import '../../../styles/Dashboard/Assignments.scss';

const Subjectcard = ({ element, getClasses }) => {
  const { user } = useUser();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState(element.title);
  const [description, setDescription] = useState(element.description);
  const isMobile = useMediaQuery('(max-width: 992px)');

  const updateClass = async () => {
    setModalIsOpen(false);
    // console.log(title, description);

    await axios
      .patch(`/class/update`, {
        classId: element._id,
        title: title,
        description: description,
      })
      .then(response => {
        // console.log(response);
        if (response.status === 200) {
          toast.success('Classroom Updated Successfully');
        }
        getClasses();
      })
      .catch(err => {
        toast.error('Error occured', err);
        console.log(err);
      });
  };
  return (
    <div className="subjectCard">
      <Link key={element.code} to={`Assignments/${element._id}`}>
        <h5>{element.title}</h5>
        <p>{element.code}</p>
      </Link>
      {user && user.role && user.role === 'admin' && (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          onClick={() => {
            setModalIsOpen(true);
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
          Update Class
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
        <button onClick={updateClass} className="updateorCreate">
          Update
        </button>
      </Modal>
    </div>
  );
};

export default Subjectcard;
