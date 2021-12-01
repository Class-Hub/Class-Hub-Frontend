import React from 'react';
import { CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SubjectCard = ({ percentage, totalPresent, totalDays, subName }) => {
  return (
    <div className="subjectCard">
      <div className="progressBarContainer">
        <CircularProgressbar
          value={percentage}
          text={`${totalPresent}/${totalDays}`}
        />
      </div>
      {/* <h5>CSL-301</h5> */}
      <h4>{subName}</h4>
    </div>
  );
};

export default SubjectCard;
