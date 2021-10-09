import React from 'react';
import '../../styles/Dashboard/TopBar.scss';
import logo from '../../assets/logo.png';
import profile from '../../assets/Profile.png';
import Logout from '../../assets/logout.svg';
import { useProfile } from '../../context/profile.context';

const TopBar = () => {
  const { setProfile } = useProfile();
  const logout = e => {
    e.preventDefault();
    localStorage.removeItem('classHub');
    setProfile(null);
  };
  return (
    <div className="upperContainer">
      <div className="left">
        <img
          src={logo}
          alt="logo"
          className="logo"
          width="40px"
          height="40px"
        />
        <p id="logoname">ClassHub</p>
      </div>

      <div className="right">
        <img src={profile} alt="logo" width="40px" height="40px" />
        Bharat Kumar
        <button onClick={logout} className="btn">
          <img src={Logout} alt="logout" width="30px" height="30px" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;