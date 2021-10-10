import React from 'react';
import profile from '../../../assets/Profile.png';
import '../../../styles/Dashboard/Profile.scss';

const Profile = () => {
  return (
    <div className="wrapper">
      <div className="profileWrapper">
        <div className="imgContainer">
          <img src={profile} alt="logo" width="200px" height="200px" />
          <h4>2020 - 2024</h4>
          <h6>IIIT - Sonepat</h6>
        </div>
        <div className="userDataContainer">
          <ul>
            <li>
              <label>Name</label>
              <label>Bharat Kumar</label>
            </li>
            <li>
              <label>Roll</label>
              <label>1201105264</label>
            </li>
            <li>
              <label>Course</label>
              <label>B.Tech (CSE)</label>
            </li>
            <li>
              <label>DOB</label>
              <label>15/08/2001</label>
            </li>
            <li>
              <label>Phone No.</label>
              <label>9711082565</label>
            </li>
            <li>
              <label>Email</label>
              <label>kumabharat123@gmail.com</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
