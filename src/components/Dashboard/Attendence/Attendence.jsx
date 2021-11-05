import React from 'react';
import '../../../styles/Dashboard/Attendence.scss';
import SubjectCard from './SubjectCard';

const Attendence = () => {
  return (
    <div className="wrapper">
      <div className="attendenceContainer">
        <h4>Attendence</h4>
        <hr />
        This semesters Attendence Summary
        <div className="subCardContainer">
          <SubjectCard percentage={30} />
          <SubjectCard percentage={30} />
        </div>
        <hr />
        <h5>Mark Today's Attendence Here</h5>
        <div className="subjectsContainer">
          <label className="subjects">
            <input type="checkbox" />
            <span class="checkmark"></span>
            Descrete Mathematics
          </label>
          <label className="subjects">
            <input type="checkbox" />
            <span class="checkmark"></span>
            Computer Organisation
          </label>
          <label className="subjects">
            <input type="checkbox" />
            <span class="checkmark"></span>
            Digital systems Design
          </label>
          <label className="subjects">
            <input type="checkbox" />
            <span class="checkmark"></span>
            Automata and Formal Languages
          </label>
          <label className="subjects">
            <input type="checkbox" />
            <span class="checkmark"></span>
            Digital Stystems Design Lab
          </label>
        </div>
      </div>
    </div>
  );
};

export default Attendence;
