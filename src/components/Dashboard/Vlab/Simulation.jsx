import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../../styles/Dashboard/SubjectLab.scss';
import SideBar from './SideBarLab'

const SubjectLab = () => {
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
          <div class="gate not">
            <div class="name">not</div>
            <input class="i2" type="checkbox" />
            <div class="out"></div>
          </div>
          <div class="gate and">
            <input class="i1" type="checkbox" />
            <div class="name">and</div>
            <input class="i2" type="checkbox" />
            <div class="out"></div>
          </div>
          <div class="gate or">
            <input class="i1" type="checkbox" />
            <div class="name">or</div>
            <input class="i2" type="checkbox" />
            <div class="out"></div>
          </div>
          <div class="gate nand">
            <input class="i1" type="checkbox" />
            <div class="name">nand</div>
            <input class="i2" type="checkbox" />
            <div class="out"></div>
          </div>
          <div class="gate nor">
            <input class="i1" type="checkbox" />
            <div class="name">nor</div>
            <input class="i2" type="checkbox" />
            <div class="out"></div>
          </div>
          <div class="gate xor">
            <input class="i1" type="checkbox" />
            <div class="name">xor</div>
            <input class="i2" type="checkbox" />
            <div class="out"></div>
          </div>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default SubjectLab;
