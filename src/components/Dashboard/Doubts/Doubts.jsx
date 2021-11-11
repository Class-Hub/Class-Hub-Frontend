import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../styles/Dashboard/Doubts.scss';
import profile from '../../../assets/Profile.png';

const Doubts = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="wrapper">
      <div className="doubtsContainer">
        <ul className="teacherList">
          <Link onClick={onclick} to="">
            <li className={location.pathname === '/' ? 'active' : ''}>
              <img src={profile} alt="Teacher image" />
              Teachers Name
            </li>
          </Link>
        </ul>
        <div className="theChat">
          <div className="top">Teachers Name</div>
          <div className="mid">
            <div className="chat">
              <img src={profile} alt="teachersimage" />
              <p className="message">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eveniet, laboriosam. Tempora, explicabo? Lorem ipsum dolor sit
                qui quibusdam reiciendis.
              </p>
            </div>
            <div className="chat studentMessage">
              <img src={profile} alt="teachersimage" />
              <p className="message">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eveniet, laboriosam. Tempora, explicabo? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Facilis dolore nihil odit
                obcaecati, velit illum delectus iste nam .
              </p>
            </div>
          </div>
          <div className="bottom">
            <input />
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doubts;
