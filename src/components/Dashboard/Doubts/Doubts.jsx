import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { io } from 'socket.io-client';
import '../../../styles/Dashboard/Doubts.scss';
import profile from '../../../assets/Profile.png';
import axios from 'axios';
import { useUser } from '../../../context/User.context';
import getNameInitials from '../../../misc/helpers';
import { useMediaQuery } from '../../../misc/custom-hooks';

// const socket = io.connect('http://localhost:8000');
const Doubts = () => {
  const location = useLocation();
  const [teachers, setTeachers] = useState();
  const [chatLog, setChatLog] = useState([]);
  const [conversationId, setConversationId] = useState('');
  const [allConversationId, setAllConversationId] = useState();
  const [msg, setMsg] = useState([]);
  const [currentTeacher, setCurrentTeacher] = useState();
  const { user } = useUser();
  const showInitials = useMediaQuery('(max-width : 800px)');

  const token = localStorage.getItem('classHub');
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  useEffect(() => {
    if (!!user) {
      axios
        .get(
          `/conversation/${
            user?.role === 'admin' ? 'getStudents' : 'getTeachers'
          }/${user?._id}`,
          config
        )
        .then(response => {
          setTeachers(response.data.data);
        });
      axios
        .post('/conversation/getAllConversation', {}, config)
        .then(response => {
          setAllConversationId(response.data.conversations);
        });
    }
  }, [user?._id]);

  const openChat = async (receiverId, roomConversationId) => {
    setChatLog([]);
    axios
      .get(
        `/conversation/${
          user?.role === 'admin' ? 'getStudents' : 'getTeachers'
        }/${user?._id}`
      )
      .then(response => {
        setTeachers(response.data.data);
      });

    if (roomConversationId === '') {
      const myData = {
        senderId: user._id,
        receiverId,
      };
      const response = await axios.post('/conversation', myData, config);
      setConversationId(response.data._id);
      const allChat = await axios.get(`/message/${response?.data._id}`, config);
      setChatLog(allChat.data);
    }

    if (allConversationId?.includes(roomConversationId)) {
      const allChat = await axios.get(`/message/${roomConversationId}`, config);
      setConversationId(roomConversationId);
      setChatLog(allChat.data);
    }
  };

  // const getConvertion = async () => {
  //   const allChat = await axios.get(`/message/${conversationId}`, config);
  //   console.log('ujjwal chat log', allChat.data);
  //   setChatLog(allChat.data);
  // };

  // useEffect(() => {
  //   getConvertion();
  // }, [chatLog, conversationId]);

  // console.log('ujjwal current cov', conversationId);
  const submitMessage = async e => {
    e.preventDefault();

    const myData = {
      conversationId,
      sender: user._id,
      text: msg,
    };
    const messageArr = await axios.post('/message', myData, config);

    setMsg('');
    const allChat = await axios.get(`/message/${conversationId}`, config);
    setChatLog(allChat.data);
  };

  return (
    <div className="wrapper">
      <div className="doubtsContainer">
        <ul className="teacherList">
          {teachers?.map((teacher, index) => {
            return (
              <Link
                key={index}
                onClick={() => {
                  setCurrentTeacher(teacher);
                  openChat(teacher?.teacher?._id, teacher?.convoId);
                }}
                to="/Doubts"
              >
                <li
                  className={location.pathname === '/Doubts' ? 'active' : ''}
                  style={{ marginBottom: '1rem' }}
                >
                  {!showInitials && (
                    <>
                      <img src={profile} alt="Teacher image" />
                      {teacher?.teacher?.name}
                    </>
                  )}
                  {showInitials && teacher?.teacher
                    ? getNameInitials(teacher?.teacher?.name)
                    : ''}
                </li>
              </Link>
            );
          })}
        </ul>
        <div className="theChat">
          <div className="top">{currentTeacher?.teacher.name}</div>
          <div className="mid">
            {chatLog?.map((log, index) => {
              if (log.sender !== user._id) {
                return (
                  <div key={index} className="chat">
                    <img src={profile} alt="teachersimage" />
                    <p className="message">{log.text}</p>
                  </div>
                );
              }
              return (
                <div key={index} className="chat studentMessage">
                  <img src={profile} alt="teachersimage" />
                  <p className="message">{log.text}</p>
                </div>
              );
            })}
          </div>
          <div className="bottom">
            <input
              type="text"
              value={msg}
              onKeyPress={e => {
                if (e.charCode === 13) {
                  submitMessage(e);
                }
              }}
              onChange={e => {
                console.log(e);
                setMsg(e.target.value);
              }}
            />
            <button onClick={submitMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doubts;
