import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../../styles/Dashboard/SubjectLab.scss';
import SideBar from './SideBarLab'

function Iframe(props) {
  return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}

const SubjectLab = (props) => {
  const { subject } = useParams();

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
        
        <div className='lab-wrapper'>
        <SideBar />

        <div className="gates-wrapper sim">
        <h4>Simulation</h4>
        <Iframe iframe={props.location.state.data.props.simulation} />,
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default SubjectLab;
