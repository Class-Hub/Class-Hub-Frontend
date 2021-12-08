import React, { useCallback, useEffect, useState } from 'react';
import '../../styles/Dashboard/TopBar.scss';
import logo from '../../assets/logo.png';
import profile from '../../assets/Profile.png';
import { useProfile } from '../../context/profile.context';
import { useUser } from '../../context/User.context';
import Modal from 'react-modal';
import axios from 'axios';
import { useMediaQuery } from '../../misc/custom-hooks';

const TopBar = () => {
  const { setProfile } = useProfile();
  const { user, sidebarOpened, ToggleSideBar } = useUser();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currPass, setCurrPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [checked, setChecked] = useState(null);
  const isMobile = useMediaQuery('(max-width: 992px)');
  const smalldev = useMediaQuery('(max-width: 600px)');
  const logout = e => {
    e.preventDefault();
    localStorage.removeItem('classHub');
    setProfile(null);
  };

  const UpdatePassword = async () => {
    await axios
      .post('/student/updatePassword', {
        currentPassword: currPass,
        newPassword: newPass,
      })
      .then(response => {
        // console.log(response.data);
      })
      .catch(err => console.log(err));
    setModalIsOpen(false);
  };

  // function to set a given theme/color-scheme
  const setTheme = useCallback(themeName => {
    localStorage.setItem('theme', themeName);
    setChecked(themeName !== 'theme-dark');
    document.documentElement.className = themeName;
  }, []);

  // function to toggle between light and dark theme
  function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
    } else {
      setTheme('theme-dark');
    }
  }

  // Immediately invoked function to set the theme on initial load
  useEffect(() => {
    console.log(isMobile);
    if (isMobile) {
      ToggleSideBar();
    }
    setChecked(localStorage.getItem('theme') === 'theme-light');
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
    } else {
      setTheme('theme-light');
    }
  }, [setTheme]);

  return (
    <div className="upperContainer">
      <div className="left">
        {isMobile && !sidebarOpened && (
          <span onClick={ToggleSideBar}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.37451 12.8805H21.3745"
                stroke="#E6E6E6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.37451 6.88049H21.3745"
                stroke="#E6E6E6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.37451 18.8805H21.3745"
                stroke="#E6E6E6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
        {isMobile && sidebarOpened && (
          <span onClick={ToggleSideBar}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3745 6.42627L6.3745 18.4263"
                stroke="#E6E6E6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.3745 6.42627L18.3745 18.4263"
                stroke="#E6E6E6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
        <img
          src={logo}
          alt="logo"
          className="logo"
          width="40px"
          height="40px"
        />
        {!smalldev && <p id="logoname">ClassHub</p>}
      </div>

      <div className="right">
        <label id="switch" className="switch">
          <input
            type="checkbox"
            onChange={toggleTheme}
            id="slider"
            checked={checked}
          />
          <span className="slider round"></span>
        </label>
        <img
          src={!!user?.photo ? user.photo : profile}
          alt="logo"
          width="40px"
          height="40px"
        />
        {smalldev && ''}
        {!smalldev && user ? user.name : ''}
        {user && !user.role && (
          <span
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Change Password"
            onClick={() => {
              setModalIsOpen(true);
            }}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_224_39)">
                <path
                  d="M12.4901 15.9562C14.1469 15.9562 15.4901 14.613 15.4901 12.9562C15.4901 11.2993 14.1469 9.95618 12.4901 9.95618C10.8332 9.95618 9.49005 11.2993 9.49005 12.9562C9.49005 14.613 10.8332 15.9562 12.4901 15.9562Z"
                  stroke="#e6e6e6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.8901 15.9562C19.7569 16.2578 19.7172 16.5924 19.776 16.9168C19.8349 17.2412 19.9895 17.5405 20.2201 17.7762L20.2801 17.8362C20.466 18.0219 20.6135 18.2425 20.7142 18.4853C20.8148 18.7281 20.8666 18.9883 20.8666 19.2512C20.8666 19.514 20.8148 19.7743 20.7142 20.0171C20.6135 20.2599 20.466 20.4804 20.2801 20.6662C20.0943 20.8521 19.8737 20.9996 19.6309 21.1003C19.3881 21.2009 19.1279 21.2528 18.8651 21.2528C18.6022 21.2528 18.342 21.2009 18.0992 21.1003C17.8564 20.9996 17.6358 20.8521 17.4501 20.6662L17.3901 20.6062C17.1544 20.3756 16.855 20.221 16.5306 20.1622C16.2062 20.1034 15.8717 20.1431 15.5701 20.2762C15.2743 20.4029 15.022 20.6134 14.8444 20.8817C14.6667 21.15 14.5713 21.4644 14.5701 21.7862V21.9562C14.5701 22.4866 14.3593 22.9953 13.9843 23.3704C13.6092 23.7455 13.1005 23.9562 12.5701 23.9562C12.0396 23.9562 11.5309 23.7455 11.1558 23.3704C10.7808 22.9953 10.5701 22.4866 10.5701 21.9562V21.8662C10.5623 21.5352 10.4552 21.2142 10.2626 20.9449C10.07 20.6756 9.80079 20.4705 9.49005 20.3562C9.18844 20.2231 8.85386 20.1834 8.52946 20.2422C8.20507 20.301 7.90573 20.4556 7.67005 20.6862L7.61005 20.7462C7.42431 20.9321 7.20373 21.0796 6.96093 21.1803C6.71814 21.2809 6.45788 21.3328 6.19505 21.3328C5.93222 21.3328 5.67197 21.2809 5.42917 21.1803C5.18637 21.0796 4.9658 20.9321 4.78005 20.7462C4.5941 20.5604 4.44658 20.3399 4.34593 20.0971C4.24528 19.8543 4.19348 19.594 4.19348 19.3312C4.19348 19.0683 4.24528 18.8081 4.34593 18.5653C4.44658 18.3225 4.5941 18.1019 4.78005 17.9162L4.84005 17.8562C5.07059 17.6205 5.22524 17.3212 5.28406 16.9968C5.34287 16.6724 5.30317 16.3378 5.17005 16.0362C5.04329 15.7404 4.83281 15.4882 4.56452 15.3105C4.29623 15.1328 3.98184 15.0375 3.66005 15.0362H3.49005C2.95962 15.0362 2.45091 14.8255 2.07584 14.4504C1.70076 14.0753 1.49005 13.5666 1.49005 13.0362C1.49005 12.5057 1.70076 11.997 2.07584 11.622C2.45091 11.2469 2.95962 11.0362 3.49005 11.0362H3.58005C3.91105 11.0284 4.23206 10.9213 4.50135 10.7287C4.77064 10.5361 4.97577 10.2669 5.09005 9.95618C5.22317 9.65456 5.26287 9.31998 5.20406 8.99559C5.14524 8.67119 4.99059 8.37186 4.76005 8.13618L4.70005 8.07618C4.5141 7.89043 4.36658 7.66985 4.26593 7.42706C4.16528 7.18426 4.11348 6.92401 4.11348 6.66118C4.11348 6.39835 4.16528 6.13809 4.26593 5.8953C4.36658 5.6525 4.5141 5.43192 4.70005 5.24618C4.8858 5.06022 5.10637 4.91271 5.34917 4.81206C5.59197 4.71141 5.85222 4.6596 6.11505 4.6596C6.37788 4.6596 6.63814 4.71141 6.88093 4.81206C7.12373 4.91271 7.34431 5.06022 7.53005 5.24618L7.59005 5.30618C7.82573 5.53671 8.12507 5.69136 8.44946 5.75018C8.77386 5.809 9.10844 5.76929 9.41005 5.63618H9.49005C9.78582 5.50941 10.0381 5.29893 10.2157 5.03064C10.3934 4.76235 10.4888 4.44796 10.4901 4.12618V3.95618C10.4901 3.42574 10.7008 2.91704 11.0758 2.54196C11.4509 2.16689 11.9596 1.95618 12.4901 1.95618C13.0205 1.95618 13.5292 2.16689 13.9043 2.54196C14.2793 2.91704 14.4901 3.42574 14.4901 3.95618V4.04618C14.4913 4.36796 14.5867 4.68235 14.7644 4.95064C14.942 5.21893 15.1943 5.42941 15.4901 5.55618C15.7917 5.68929 16.1262 5.729 16.4506 5.67018C16.775 5.61136 17.0744 5.45671 17.3101 5.22618L17.3701 5.16618C17.5558 4.98022 17.7764 4.83271 18.0192 4.73206C18.262 4.63141 18.5222 4.5796 18.7851 4.5796C19.0479 4.5796 19.3081 4.63141 19.5509 4.73206C19.7937 4.83271 20.0143 4.98022 20.2001 5.16618C20.386 5.35192 20.5335 5.5725 20.6342 5.8153C20.7348 6.05809 20.7866 6.31835 20.7866 6.58118C20.7866 6.84401 20.7348 7.10426 20.6342 7.34706C20.5335 7.58985 20.386 7.81043 20.2001 7.99618L20.1401 8.05618C19.9095 8.29186 19.7549 8.59119 19.696 8.91559C19.6372 9.23998 19.6769 9.57456 19.8101 9.87618V9.95618C19.9368 10.2519 20.1473 10.5042 20.4156 10.6819C20.6839 10.8595 20.9983 10.9549 21.3201 10.9562H21.4901C22.0205 10.9562 22.5292 11.1669 22.9043 11.542C23.2793 11.917 23.4901 12.4257 23.4901 12.9562C23.4901 13.4866 23.2793 13.9953 22.9043 14.3704C22.5292 14.7455 22.0205 14.9562 21.4901 14.9562H21.4001C21.0783 14.9575 20.7639 15.0528 20.4956 15.2305C20.2273 15.4082 20.0168 15.6604 19.8901 15.9562V15.9562Z"
                  stroke="#e6e6e6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_224_39">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.490051 0.956177)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
        )}

        <span onClick={logout}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.49005 21.0956H5.49005C4.95962 21.0956 4.45091 20.8849 4.07584 20.5099C3.70076 20.1348 3.49005 19.6261 3.49005 19.0956V5.09564C3.49005 4.56521 3.70076 4.0565 4.07584 3.68143C4.45091 3.30636 4.95962 3.09564 5.49005 3.09564H9.49005"
              stroke="#E6E6E6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.4901 17.0956L21.4901 12.0956L16.4901 7.09564"
              stroke="#E6E6E6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.4901 12.0956H9.49005"
              stroke="#E6E6E6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        style={
          !isMobile
            ? {
                overlay: {},
                content: {
                  width: '50%',
                  height: 'auto',
                  top: '50%',
                  borderRadius: '10px',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                },
              }
            : {
                overlay: {},
                content: {
                  width: '90%',
                  height: 'auto',
                  top: '50%',
                  borderRadius: '10px',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                },
              }
        }
      >
        <h4 className="modal-Heading">
          Change Password
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            onClick={() => {
              setModalIsOpen(false);
            }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3745 6.42627L6.3745 18.4263"
              stroke="#393939"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.3745 6.42627L18.3745 18.4263"
              stroke="#393939"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </h4>
        <hr />
        <div className="modalForm">
          <label htmlFor="curr">Current Password</label>
          <input
            type="text"
            value={currPass}
            name="curr"
            id="curr"
            onChange={e => {
              setCurrPass(e.target.value);
            }}
          />
          <label htmlFor="new">New Password</label>
          <input
            type="text"
            value={newPass}
            name="new"
            id="new"
            onChange={e => {
              setNewPass(e.target.value);
            }}
          />
        </div>
        <button onClick={UpdatePassword} className="updateorCreate">
          Update
        </button>
      </Modal>
    </div>
  );
};

export default TopBar;
