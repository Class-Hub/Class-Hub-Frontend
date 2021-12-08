import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import profile from '../../../assets/Profile.png';
import { useUser } from '../../../context/User.context';

const TheChat = ({
  socket,
  currentTeacher,
  allConversationId,
  isMobile,
  ToggleChatList,
}) => {
  const { user } = useUser();
  const [msg, setMsg] = useState();
  const [chatLog, setChatLog] = useState([]);
  const [conversationId, setConversationId] = useState('');
  const chatRef = useRef();
  console.log(chatRef);

  //   const [allConversationId, setAllConversationId] = useState();

  const openChat = async (receiverId, roomConversationId) => {
    if (roomConversationId === '') {
      const myData = {
        senderId: user._id,
        receiverId,
      };
      const response = await axios.post('/conversation', myData);
      setConversationId(response.data._id);
      const allChat = await axios.get(`/message/${response?.data._id}`);
      setChatLog(allChat.data);
    }

    if (allConversationId?.includes(roomConversationId)) {
      const allChat = await axios.get(`/message/${roomConversationId}`);
      setConversationId(roomConversationId);
      setChatLog(allChat.data);
    }
  };

  console.log('anscsa', conversationId);

  useEffect(async () => {
    await openChat(currentTeacher?.teacher._id, currentTeacher?.convoId);
    console.log(currentTeacher);
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [currentTeacher?.convoId, chatRef]);

  useEffect(() => {
    socket.emit('addUser', user?._id);
    socket.on('getUsers', users => {
      console.log(users);
    });

    socket.on('getMessage', data => {
      console.log(data);
      setChatLog(prev => [...prev, data]);
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    });
  }, [socket]);

  const submitMessage = async e => {
    e.preventDefault();

    socket.emit('sendMessage', currentTeacher?.teacher?._id, user?._id, msg);
    setChatLog(prev => [
      ...prev,
      {
        sender: user?._id,
        text: msg,
      },
    ]);

    const myData = {
      conversationId,
      sender: user._id,
      text: msg,
    };
    await axios.post('/message', myData);
    setMsg('');
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  };

  return (
    <div className="theChat">
      <div className="top">
        {/* fiowhefo */}
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
                d="M3.37451 12.8805H21.3745"
                stroke="#E6E6E6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.37451 6.88049H21.3745"
                stroke="#E6E6E6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.37451 18.8805H21.3745"
                stroke="#E6E6E6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}

        {/* fiowhefo */}

        {currentTeacher?.teacher?.name}
      </div>
      <div className="mid" ref={chatRef}>
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
              <img src={user.photo || profile} alt="teachersimage" />
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
            // console.log(e);
            setMsg(e.target.value);
          }}
        />
        <button onClick={submitMessage}>Send</button>
      </div>
    </div>
  );
};

export default TheChat;
