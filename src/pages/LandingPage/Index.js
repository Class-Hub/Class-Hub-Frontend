import React from 'react';
import { useLocation } from 'react-router';
import Info from '../../components/landingPage/Info';
import Navbar from '../../components/landingPage/Navbar';
import SideImage from '../../components/landingPage/SideImage';
import SignIn from '../../components/landingPage/SignIn';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LandingPage = () => {
  const location = useLocation();
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div
        className="
                container-fluid
                row
                mt-3
                mb-2
                ms-auto
                me-auto
            "
      >
        {location.pathname === '/signIn' ? <SignIn /> : <Info />}
        <SideImage />
      </div>
    </>
  );
};

export default LandingPage;
