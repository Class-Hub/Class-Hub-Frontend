import React, { useState } from 'react';
import '../../../styles/Dashboard/TheClass.scss';
import FloatChat from './FloatChat';
import Person from './Person';

const TheClass = () => {
  const [mic, setMic] = useState(false);
  const [cam, setCam] = useState(false);
  const [present, setPresent] = useState(false);
  const [chat, setChat] = useState(false);

  const open = () => {
    const floatContainer = document.querySelector('#floatContainer');
    floatContainer.style.display = 'block';
    if(!chat){

      setChat(chat => !chat);
    }
  };
  const close = () => {
    const floatContainer = document.querySelector('#floatContainer');
    floatContainer.style.display = 'none';
    setChat(chat => !chat);
  };

  const onMic = () => {
    setMic(mic => !mic);
  };
  const onCam = () => {
    setCam(cam => !cam);
  };
  const onPresent = () => {
    setPresent(present => !present);
  };
  const endCall = ()=>{
    window.close();
  }

  return (
    <div className="classWrapper">
      <div className="top">
        <h5>Class Name</h5>
      </div>
      <div className="middle">
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
      </div>
      <div className="bottom">
        <div className="mic" onClick={onMic}>
          {mic && (
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_204_72)">
                <path
                  d="M1.93842 1L23.9384 23"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.9384 9.33997V3.99997C15.9392 3.256 15.6634 2.53829 15.1648 1.98617C14.6661 1.43405 13.9801 1.08691 13.2399 1.01214C12.4997 0.937375 11.7581 1.14031 11.1591 1.58156C10.5601 2.0228 10.1465 2.67088 9.99842 3.39997M9.93842 8.99997V12C9.93894 12.5929 10.1152 13.1724 10.4448 13.6653C10.7745 14.1582 11.2429 14.5423 11.7907 14.7691C12.3386 14.996 12.9414 15.0554 13.523 14.9398C14.1046 14.8243 14.6389 14.539 15.0584 14.12L9.93842 8.99997Z"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.9384 10V12C19.9381 12.4124 19.9013 12.824 19.8284 13.23M17.9384 16.95C16.9622 17.9464 15.7105 18.6285 14.344 18.9086C12.9775 19.1887 11.5585 19.0542 10.2689 18.5223C8.97938 17.9903 7.87818 17.0853 7.10659 15.9232C6.335 14.761 5.92821 13.3949 5.93842 12V10L17.9384 16.95Z"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.9384 19V23"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.93842 23H16.9384"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_204_72">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.938416)"
                  />
                </clipPath>
              </defs>
            </svg>
          )}
          {!mic && (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1C11.2044 1 10.4413 1.31607 9.87868 1.87868C9.31607 2.44129 9 3.20435 9 4V12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12V4C15 3.20435 14.6839 2.44129 14.1213 1.87868C13.5587 1.31607 12.7956 1 12 1V1Z"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 10V12C19 13.8565 18.2625 15.637 16.9497 16.9497C15.637 18.2625 13.8565 19 12 19C10.1435 19 8.36301 18.2625 7.05025 16.9497C5.7375 15.637 5 13.8565 5 12V10"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 19V23"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 23H16"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <div className="cam" onClick={onCam}>
          {cam && (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L23 23"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.28 15.28C14.9481 15.765 14.5134 16.171 14.0068 16.469C13.5002 16.7669 12.9342 16.9496 12.3489 17.004C11.7637 17.0584 11.1737 16.9831 10.6209 16.7836C10.0681 16.5841 9.56601 16.2652 9.15042 15.8496C8.73483 15.434 8.41593 14.9319 8.2164 14.3791C8.01688 13.8263 7.94163 13.2363 7.99601 12.6511C8.05039 12.0658 8.23306 11.4998 8.53103 10.9932C8.829 10.4866 9.23495 10.0519 9.72 9.72M21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H6L21 21ZM9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V17.34L9 3Z"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {!cam && (
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_204_78)">
                <path
                  d="M23.9384 19C23.9384 19.5304 23.7277 20.0391 23.3526 20.4142C22.9776 20.7893 22.4688 21 21.9384 21H3.93842C3.40798 21 2.89927 20.7893 2.5242 20.4142C2.14913 20.0391 1.93842 19.5304 1.93842 19V8C1.93842 7.46957 2.14913 6.96086 2.5242 6.58579C2.89927 6.21071 3.40798 6 3.93842 6H7.93842L9.93842 3H15.9384L17.9384 6H21.9384C22.4688 6 22.9776 6.21071 23.3526 6.58579C23.7277 6.96086 23.9384 7.46957 23.9384 8V19Z"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.9384 17C15.1476 17 16.9384 15.2091 16.9384 13C16.9384 10.7909 15.1476 9 12.9384 9C10.7293 9 8.93842 10.7909 8.93842 13C8.93842 15.2091 10.7293 17 12.9384 17Z"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_204_78">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.938416)"
                  />
                </clipPath>
              </defs>
            </svg>
          )}
        </div>
        <div className="present" onClick={onPresent}>
          {present && (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 12L12 16L16 12"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 8V16"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {!present && (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 12L12 8L8 12"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 16V8"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <div className="classChat" onClick={open}>
          {!chat && (
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.9384 15.8436C21.9384 16.3741 21.7277 16.8828 21.3526 17.2578C20.9776 17.6329 20.4688 17.8436 19.9384 17.8436H7.93842L3.93842 21.8436V5.84363C3.93842 5.31319 4.14913 4.80449 4.5242 4.42941C4.89927 4.05434 5.40798 3.84363 5.93842 3.84363H19.9384C20.4688 3.84363 20.9776 4.05434 21.3526 4.42941C21.7277 4.80449 21.9384 5.31319 21.9384 5.84363V15.8436Z"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {chat && (
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_209_39)">
                <path
                  d="M24 0L0 24"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_209_39">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.374496 0.42627)"
                  />
                </clipPath>
              </defs>
            </svg>
          )}
        </div>
        <div className="endcall" onClick={endCall}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.18999 12.81C3.50585 10.213 2.45435 7.25714 2.11999 4.17997C2.095 3.90344 2.12787 3.62474 2.21649 3.3616C2.30512 3.09846 2.44756 2.85666 2.63476 2.6516C2.82196 2.44653 3.0498 2.28268 3.30379 2.1705C3.55777 2.05831 3.83233 2.00024 4.10999 1.99997H7.10999C7.5953 1.9952 8.06579 2.16705 8.43376 2.48351C8.80173 2.79996 9.04207 3.23942 9.10999 3.71997C9.23662 4.68004 9.47144 5.6227 9.80999 6.52997C9.94454 6.8879 9.97366 7.27689 9.8939 7.65086C9.81415 8.02482 9.62886 8.36809 9.35999 8.63998L8.08999 9.90997M10.68 13.31C11.6948 14.3257 12.8418 15.2002 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0554 17.47 14.19C18.3773 14.5285 19.3199 14.7634 20.28 14.89C20.7605 14.9579 21.2 15.1982 21.5165 15.5662C21.8329 15.9342 22.0048 16.4047 22 16.89V19.89C22.0011 20.1685 21.9441 20.4441 21.8325 20.6993C21.7209 20.9545 21.5573 21.1836 21.3521 21.3718C21.1468 21.5601 20.9046 21.7035 20.6407 21.7927C20.3769 21.8819 20.0974 21.915 19.82 21.89C16.7428 21.5556 13.787 20.5041 11.19 18.82C9.98526 18.055 8.86852 17.1596 7.85999 16.15L10.68 13.31Z"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23 1L1 23"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <FloatChat close={close} />
    </div>
  );
};

export default TheClass;
