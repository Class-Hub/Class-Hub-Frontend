import React, { useEffect, useState } from 'react';
import { Link, useLocation,useParams } from 'react-router-dom';
import '../../../styles/Dashboard/SideBar.scss';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CalculateIcon from '@mui/icons-material/Calculate';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import QuizIcon from '@mui/icons-material/Quiz';
import SpeedIcon from '@mui/icons-material/Speed';

const SideBar = (props) => {
  const locations = useLocation();
  const [barClass, setBarClass] = useState('sideContainer');
  const { subject } = useParams();
  console.log(props.location);

  return (
    <>
      
        <div className={barClass}>
          <ul>
          {/* <Link onClick={onclick} to={{pathname: "/Vlab/:subject/aim",state: {data: props}}}>
              <li className={locations.pathname === '/Vlab/:subject/aim' ? 'active' : ''}>
              <ModeStandbyIcon></ModeStandbyIcon>
                Aim
              </li>
            </Link> */}
            <Link  to={{pathname: `${ locations.pathname}/aim`,state: {data: props}}}>
              <li className={locations.pathname === `${ locations.pathname}/aim` ? 'active' : ''}>
              <ModeStandbyIcon></ModeStandbyIcon>
                Aim
              </li>
            </Link>
            <Link to={{pathname: `${ locations.pathname}/theory`,state: {data: props}}}>
              <li className={locations.pathname === '/Vlab/:subject/theory' ? 'active' : ''}>
              <AutoStoriesIcon></AutoStoriesIcon>
                Theory
              </li>
            </Link>
            <Link  to={{pathname: `${ locations.pathname}/pretest`,state: {data: props}}}>
              <li className={locations.pathname === '/Vlab/:subject/pretest' ? 'active' : ''}>
              <QuizIcon ></QuizIcon>
                Pre Test
              </li>
            </Link>
            <Link  to={{pathname: `${ locations.pathname}/simulation`,state: {data: props}}}>
              <li className={locations.pathname === '/Vlab/:subject/simulation' ? 'active' : ''}>
                <CalculateIcon></CalculateIcon>
                Simulation
              </li>
            </Link>
            <Link  to={{pathname: `${ locations.pathname}/posttest`,state: {data: props}}}>
              <li className={locations.pathname === '/Vlab/:subject/posttest' ? 'active' : ''}>
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
