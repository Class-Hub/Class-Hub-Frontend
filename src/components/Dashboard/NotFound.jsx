import React from 'react';
import Error from '../../assets/Error.png';
const NotFound = () => {
  return (
    <div
      style={{
          width: "100%",
          height: "100%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img src={Error} width="600px" height="auto" alt="error page" />
    </div>
  );
};

export default NotFound;
