import React from 'react';
import profile from '../../../assets/Profile.png';

const FloatChat = ({ close }) => {
  return (
    <div id="floatContainer">
      <div className="top">
        <h5>Chat</h5>
        <button onClick={close}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="#e6e6e6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3745 6.42627L6.3745 18.4263"
              stroke="#14279b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.3745 6.42627L18.3745 18.4263"
              stroke="#14279b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="mid">
        <div className="message1">
          <img src={profile} alt="sender" />
          <div className="current">
            <h6>teachers name</h6>
            <p>Hello there i am coming</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <input type="text" />
        <button>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.9384 2.84363L11.9384 13.8436"
              stroke="#14279B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.9384 2.84363L15.9384 22.8436L11.9384 13.8436L2.93842 9.84363L22.9384 2.84363Z"
              stroke="#14279B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FloatChat;
