import React from 'react';

const Student = ({ data }) => {
  return (
    <div className="tlive">
      <h4> {data.subName} </h4>
      <a
        href={`/dashboard/Class/${data.sub}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Join CLass</button>
      </a>
    </div>
  );
};

export default Student;
