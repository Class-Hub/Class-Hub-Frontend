import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SubjectCard = ({ percentage }) => {
  return (
    <div className="subjectCard">
      <div className="progressBarContainer">
        <CircularProgressbar value={percentage} text={`35/60`} />
      </div>
      <h5>CSL-301</h5>
      <h4>Discrete Mathematics</h4>
    </div>
  );
};

export default SubjectCard;
