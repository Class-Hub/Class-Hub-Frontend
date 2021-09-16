import React from 'react';
import study from '../../assets/classHub.svg';

const SideImage = () => {
  return (
    <div
      className="
                    container
                    col-6
                    d-none
                    d-lg-flex
                    justify-content-center
                    align-items-center
                    imagebox
                "
    >
      <img
        src={study}
        alt="study"
        width="450"
        height="350"
        className="img-fluid"
      />
    </div>
  );
};

export default SideImage;
