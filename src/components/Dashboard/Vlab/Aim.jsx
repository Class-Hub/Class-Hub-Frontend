import React from 'react';
// import '../../../styles/Dashboard/TimeTable.scss';
// import '../../../styles/Dashboard/Attendence.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SideBar from './SideBarLab'



const Aim = (props) => {
    // const { subId } = useParams();
  let subjects = ["Electronics Lab"]
  console.log(props);
  return (
    <div className="wrapper">
        <div >
      <Link to={`/Vlab`}>
          <svg
            width="40"
            height="40"
            className="back"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.6667 20H8.33333"
              stroke="#14279B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 31.6666L8.33333 20L20 8.33331"
              stroke="#14279B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Go Back
        </Link>
        <h4>Logic Gates Virtual Lab</h4>
        <hr/>
        <div className='lab-wrapper'>
            <SideBar/>
            <div className='gates-wrapper'>
            <h4>Aim</h4>
            <h5>{props.location.state.data.props.aim}</h5>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default Aim;
