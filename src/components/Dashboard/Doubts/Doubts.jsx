import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../styles/Dashboard/Doubts.scss';
import profile from '../../../assets/Profile.png';
import axios from 'axios';
import { useUser } from '../../../context/User.context';
import { io } from 'socket.io-client';
import getNameInitials from '../../../misc/helpers';
import { useMediaQuery } from '../../../misc/custom-hooks';
import TheChat from './TheChat';

const Doubts = () => {
  const location = useLocation();
  const [teachers, setTeachers] = useState([]);
  const [allConversationId, setAllConversationId] = useState();
  const [currentTeacher, setCurrentTeacher] = useState();
  const [chatListOpenend, setChatListOpenend] = useState(true);
  const [listClass, setListClass] = useState('teacherList');
  const { user } = useUser();
  const isMobile = useMediaQuery('(max-width : 800px)');
  // const socket = io('https://class-hub-backend.herokuapp.com/');
  const socket = io('http://localhost:8000/');

  socket.on('connect', () => {
    // console.log(socket.id);
  });

  const ToggleChatList = () => {
    setChatListOpenend(p => !p);
    console.log('toggle');
  };

  useEffect(() => {
    if (!!user) {
      axios
        .get(
          `/conversation/${
            user?.role === 'admin' ? 'getStudents' : 'getTeachers'
          }/${user?._id}`
        )
        .then(response => {
          console.log('teachers', response.data);
          setTeachers(response.data.data);
        });
      axios.post('/conversation/getAllConversation', {}).then(response => {
        setAllConversationId(response.data.conversations);
      });
    }
  }, [user?._id]);
  console.log('all conversation ids ', allConversationId);

  useEffect(() => {
    if (isMobile && chatListOpenend) {
      setListClass('teacherList isMobile listOpened');
    } else if (isMobile && !chatListOpenend) {
      setListClass('teacherList isMobile');
    } else {
      setListClass('teacherList');
    }
  }, [isMobile, chatListOpenend, setListClass]);

  return (
    <div className="wrapper">
      <div className="doubtsContainer">
        <ul className={listClass}>
          {isMobile && (
            <span onClick={ToggleChatList}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3745 6.42627L6.3745 18.4263"
                  stroke="#E6E6E6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.3745 6.42627L18.3745 18.4263"
                  stroke="#E6E6E6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          )}
          {teachers?.map((teacher, index) => {
            console.log('teacher', teacher);
            return (
              <Link
                key={index}
                onClick={() => {
                  setCurrentTeacher(teacher);
                  setChatListOpenend(p => !p);
                }}
                to={`/Doubts/${teacher.teacher._id}`}
              >
                <li
                  className={
                    location.pathname === `/Doubts/${teacher.teacher._id}`
                      ? 'active'
                      : ''
                  }
                  style={{ marginBottom: '1rem' }}
                >
                  <img src={profile} alt="Teacher image" />
                  {teacher?.teacher?.name}
                </li>
              </Link>
            );
          })}
        </ul>
        <TheChat
          socket={socket}
          allConversationId={allConversationId}
          currentTeacher={currentTeacher}
          isMobile={isMobile}
          ToggleChatList={ToggleChatList}
        />
      </div>
    </div>
  );
};

export default Doubts;
