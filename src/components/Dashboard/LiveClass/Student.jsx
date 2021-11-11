import React, { useState } from 'react';

const Student = () => {
  const [classId , setClassId] = useState("abab")
  return (
    <div className="tlive">
      <h4> Digital ELectronics </h4>
      <h5> Teachers Name </h5>
      <a href={`http://localhost:3000/Class/${classId}`} target="_blank" rel="noopener noreferrer">
        <button>Join CLass</button>
      </a>
    </div>
  );
};

export default Student;
