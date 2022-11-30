import React, { useEffect, useState } from 'react';
import { Link, useLocation,useParams } from 'react-router-dom';
import '../../../styles/Dashboard/SideBar.scss';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CalculateIcon from '@mui/icons-material/Calculate';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import QuizIcon from '@mui/icons-material/Quiz';
import SpeedIcon from '@mui/icons-material/Speed';

const SideBar = () => {
  const location = useLocation();
  const [barClass, setBarClass] = useState('sideContainer');
  const { subject } = useParams();

  return (
    <>
      
        <div className={barClass}>
          <ul>
            <Link onClick={onclick} to="/Vlab/:subject/aim">
              <li className={location.pathname === '/Vlab/:subject/aim' ? 'active' : ''}>
              <ModeStandbyIcon></ModeStandbyIcon>
                Aim
              </li>
            </Link>
            <Link onClick={onclick} to="/Vlab/:subject/theory">
              <li className={location.pathname === '/Vlab/:subject/theory' ? 'active' : ''}>
              <AutoStoriesIcon></AutoStoriesIcon>
                Theory
              </li>
            </Link>
            <Link onClick={onclick} to="/Vlab/:subject/pretest">
              <li className={location.pathname === '/Vlab/:subject/pretest' ? 'active' : ''}>
              <QuizIcon ></QuizIcon>
                Pre Test
              </li>
            </Link>
            <Link onClick={onclick} to="/Vlab/:subject/simulation">
              <li className={location.pathname === '/Vlab/:subject/simulation' ? 'active' : ''}>
                <CalculateIcon></CalculateIcon>
                Simulation
              </li>
            </Link>
            <Link onClick={onclick} to="/Vlab/:subject/posttest">
              <li className={location.pathname === '/Vlab/:subject/posttest' ? 'active' : ''}>
                <SpeedIcon></SpeedIcon>
                Post Test
              </li>
            </Link>
          </ul>
        </div>
      
    </>
  );
};

export default SideBar;
