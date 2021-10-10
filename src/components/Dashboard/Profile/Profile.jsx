import React from 'react';
import profile from '../../../assets/Profile.png';
import { useUser } from '../../../context/User.context';
import '../../../styles/Dashboard/Profile.scss';

const Profile = () => {
  const { user } = useUser();
  return (
    <div className="wrapper">
      <div className="profileWrapper">
        <div className="imgContainer">
          <img
            src={user ? user.photo : profile}
            alt="logo"
            width="200px"
            height="200px"
          />
          <h4>{user ? user.batch : ''}</h4>
          <h6>IIIT - Sonepat</h6>
        </div>
        <div className="userDataContainer">
          <ul>
            <li>
              <label>Name</label>
              <label>{user ? user.name : ''}</label>
            </li>
            <li>
              <label>Roll</label>
              <label>{user ? user.roll : ''}</label>
            </li>
            <li>
              <label>Course</label>
              <label>{user ? user.course : ''}</label>
            </li>
            <li>
              <label>DOB</label>
              <label>{user ? user.dob : ''}</label>
            </li>
            <li>
              <label>Phone No.</label>
              <label>{user ? user.phn : ''}</label>
            </li>
            <li>
              <label>Email</label>
              <label>{user ? user.email : ''}</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
