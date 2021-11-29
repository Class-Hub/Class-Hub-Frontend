import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../styles/Dashboard/Doubts.scss';
import profile from '../../../assets/Profile.png';
import axios from 'axios';
import { useUser } from '../../../context/User.context';

const Doubts = () => {
  const location = useLocation();
  const [teachers, setTeachers] = useState();
  const [chatLog, setChatLog] = useState([]);
  const [conversationId, setConversationId] = useState('');
  const [allConversationId, setAllConversationId] = useState();
  const [msg, setMsg] = useState([]);
  const [currentTeacher, setCurrentTeacher] = useState();
  const { user } = useUser();
  const token = localStorage.getItem('classHub');
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  useEffect(() => {
    axios.get(`/conversation/getTeachers/${user?._id}`).then(response => {
      console.log('ujjwal teachers', response);
      setTeachers(response.data.data);
    });

    axios
      .post('/conversation/getAllConversation', {}, config)
      .then(response => {
        console.log('ujjwal all id ', response.data.conversations);
        setAllConversationId(response.data.conversations);
      });
  }, [user?._id]);

  const openChat = async (receiverId, roomConversationId) => {
    setChatLog([]);
    await axios.get(`/conversation/getTeachers/${user?._id}`).then(response => {
      setTeachers(response.data.data);
    });
    console.log('ujjwal open chat', conversationId);
    if (
      (!!allConversationId.length &&
        allConversationId?.includes(roomConversationId)) ||
      roomConversationId === ''
    ) {
      const myData = {
        senderId: user._id,
        receiverId,
      };
      const response = await axios.post('/conversation', myData, config);
      setConversationId(response.data._id);
      console.log('ujjwal coversationId', response.data);
      const allChat = await axios.get(`/message/${response?.data._id}`, config);
      console.log('ujjwal chat log', allChat.data);
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

  const submitMessage = async e => {
    e.preventDefault();
    console.log('ujjwal input', msg);
    const myData = {
      conversationId,
      sender: user._id,
      text: msg,
    };
    const messageArr = await axios.post('/message', myData, config);
    console.log('ujjwal onsubmit', messageArr.data);
    setMsg('');
    const allChat = await axios.get(`/message/${conversationId}`, config);
    console.log('ujjwal chat log', allChat.data);
    setChatLog(allChat.data);
  };

  console.log('ujjwal setChatlog', chatLog, teachers);
  return (
    <div className="wrapper">
      <div className="doubtsContainer">
        <ul className="teacherList">
          {teachers?.map(teacher => {
            console.log('ujjwal teach', teacher.teacher);
            return (
              <Link
                onClick={() => {
                  setCurrentTeacher(teacher);
                  openChat(teacher?.teacher?._id, user?._id);
                }}
                to="/Doubts"
              >
                <li
                  className={location.pathname === '/Doubts' ? 'active' : ''}
                  style={{ marginBottom: '1rem' }}
                >
                  <img src={profile} alt="Teacher image" />
                  {teacher?.teacher?.name}
                </li>
              </Link>
            );
          })}
        </ul>
        <div className="theChat">
          <div className="top">{currentTeacher?.name}</div>
          <div className="mid">
            {chatLog?.map(log => {
              if (log.sender !== user._id) {
                return (
                  <div className="chat">
                    <img src={profile} alt="teachersimage" />
                    <p className="message">{log.text}</p>
                  </div>
                );
              }
              return (
                <div className="chat studentMessage">
                  <img src={profile} alt="teachersimage" />
                  <p className="message">{log.text}</p>
                </div>
              );
            })}
            {/* <div className="chat">
              <img src={profile} alt="teachersimage" />
              <p className="message">Reciver</p>
            </div> */}
            {/* <div className="chat studentMessage">
              <img src={profile} alt="teachersimage" />
              <p className="message">User</p>
            </div> */}
          </div>
          <div className="bottom">
            <form className="">
              <input
                type="text"
                value={msg}
                onChange={e => setMsg(e.target.value)}
              />
              <button type="submit" onClick={submitMessage}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doubts;
