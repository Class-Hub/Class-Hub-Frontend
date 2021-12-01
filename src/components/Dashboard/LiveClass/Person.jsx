import React, { useState } from 'react';

const Person = () => {
  const [classId , setClassId] = useState("abab")
  return (
    <div className="personContainer">
      <div className="video">video showing here</div>
      <h6>Name</h6>
    </div>
  );
};

export default Person;
