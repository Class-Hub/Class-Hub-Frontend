import React from 'react';
import Navbar from '../../components/landingPage/Navbar';
import SideImage from '../../components/landingPage/SideImage';
import SignIn from '../../components/landingPage/SignIn';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LandingPage = () => {
  return (
    <>
      <ToastContainer />
      <div
        className="
                container-fluid
                row
                ms-auto
                me-auto
                p-0
                signIncomponent
                "
      >
        <Navbar />
        <SignIn />
        <SideImage />
      </div>
    </>
  );
};

export default LandingPage;
