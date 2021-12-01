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
            src={!!user?.photo ? user.photo : profile}
            alt="logo"
            width="200px"
            height="200px"
          />
          <h4>{user?.batch ? user.batch : ''}</h4>
          <h6>IIIT - Sonepat</h6>
        </div>
        <div className="userDataContainer">
          <ul>
            <li>
              <label>Name</label>
              <label>{user?.name ? user.name : 'NA'}</label>
            </li>
            <li>
              <label>Roll</label>
              <label>{user?.roll ? user.roll : 'NA'}</label>
            </li>
            <li>
              <label>Course</label>
              <label>{user?.course ? user.course : 'NA'}</label>
            </li>
            <li>
              <label>DOB</label>
              <label>{user?.dob ? user.dob : 'NA'}</label>
            </li>
            <li>
              <label>Phone No.</label>
              <label>{user?.phn ? user.phn : 'NA'}</label>
            </li>
            <li>
              <label>Email</label>
              <label>{user?.email ? user.email : 'NA'}</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
