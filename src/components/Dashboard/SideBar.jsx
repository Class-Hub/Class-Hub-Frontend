import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/Dashboard/SideBar.scss';

const SideBar = () => {
  // const [prev, setprev] = useState(null);
  // useEffect(() => {
  //   setprev(document.getElementsByClassName('active'));
  // }, []);
  const location = useLocation();
  // console.log(location);

  // const onclick = e => {
  //   if (prev.target) {
  //     prev.target.className = '';
  //   } else {
  //     prev[0].className = '';
  //   }
  //   e.target.className = 'active';
  //   setprev(e);
  // };
  return (
    <div className="sideContainer">
      <ul>
        <Link onClick={onclick} to="/">
          <li className={location.pathname === '/' ? 'active' : ''}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 20C24.8325 20 28.75 16.0825 28.75 11.25C28.75 6.4175 24.8325 2.5 20 2.5C15.1675 2.5 11.25 6.4175 11.25 11.25C11.25 16.0825 15.1675 20 20 20ZM9.375 22.5C6.9587 22.5 4.99993 24.4587 5 26.8751L5.00001 27.5C5.00004 30.4919 6.9033 33.0217 9.60615 34.7417C12.3238 36.4712 16.0019 37.5 19.9999 37.5C23.9979 37.5 27.676 36.4712 30.3938 34.7417C33.0966 33.0217 35 30.4919 35 27.5V26.875C35 24.4587 33.0413 22.5 30.625 22.5H9.375Z"
                fill="#14279B"
              />
            </svg>
            Profile
          </li>
        </Link>

        <Link onClick={onclick} to="/register">
          <li className={location.pathname === '/register' ? 'active' : ''}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 20C24.8325 20 28.75 16.0825 28.75 11.25C28.75 6.4175 24.8325 2.5 20 2.5C15.1675 2.5 11.25 6.4175 11.25 11.25C11.25 16.0825 15.1675 20 20 20ZM9.375 22.5C6.9587 22.5 4.99993 24.4587 5 26.8751L5.00001 27.5C5.00004 30.4919 6.9033 33.0217 9.60615 34.7417C12.3238 36.4712 16.0019 37.5 19.9999 37.5C23.9979 37.5 27.676 36.4712 30.3938 34.7417C33.0966 33.0217 35 30.4919 35 27.5V26.875C35 24.4587 33.0413 22.5 30.625 22.5H9.375Z"
                fill="#14279B"
              />
            </svg>
            Register
          </li>
        </Link>

        <Link aria-current="page" onClick={onclick} to="/LiveClass">
          <li className={location.pathname === '/LiveClass' ? 'active' : ''}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 17.5C25 20.2614 22.7614 22.5 20 22.5C17.2386 22.5 15 20.2614 15 17.5C15 14.7386 17.2386 12.5 20 12.5C22.7614 12.5 25 14.7386 25 17.5Z"
                fill="#14279B"
              />
              <path
                d="M2.5 11.875C2.5 9.45875 4.45875 7.5 6.875 7.5H33.125C35.5412 7.5 37.5 9.45875 37.5 11.875V28.125C37.5 30.5413 35.5412 32.5 33.125 32.5H6.875C4.45875 32.5 2.5 30.5413 2.5 28.125V11.875ZM27.5 30H33.125C34.1605 30 35 29.1605 35 28.125V11.875C35 10.8395 34.1605 10 33.125 10H6.875C5.83947 10 5 10.8395 5 11.875V28.125C5 29.1605 5.83947 30 6.875 30H12.5V27.5C12.5 26.1192 13.6193 25 15 25H25C26.3808 25 27.5 26.1192 27.5 27.5V30Z"
                fill="#14279B"
              />
            </svg>
            Live Class
          </li>
        </Link>
        <Link aria-current="page" onClick={onclick} to="/RecordedLectures">
          <li
            className={
              location.pathname === '/RecordedLectures' ? 'active' : ''
            }
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 30C25.5228 30 30 25.5228 30 20C30 14.4771 25.5228 10 20 10C14.4771 10 10 14.4771 10 20C10 25.5228 14.4771 30 20 30Z"
                fill="#14279B"
              />
              <path
                d="M20 3.33331C10.7952 3.33331 3.33331 10.7952 3.33331 20C3.33331 29.2046 10.7952 36.6666 20 36.6666C29.2046 36.6666 36.6666 29.2046 36.6666 20C36.6666 10.7952 29.2046 3.33331 20 3.33331ZM5.83331 20C5.83331 12.1759 12.1759 5.83331 20 5.83331C27.824 5.83331 34.1666 12.1759 34.1666 20C34.1666 27.824 27.824 34.1666 20 34.1666C12.1759 34.1666 5.83331 27.824 5.83331 20Z"
                fill="#14279B"
              />
            </svg>
            Recorded
          </li>
        </Link>
        <Link aria-current="page" onClick={onclick} to="/Upload">
          <li className={location.pathname === '/Upload' ? 'active' : ''}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75 5C8.05965 5 7.5 5.55965 7.5 6.25C7.5 6.94035 8.05965 7.5 8.75 7.5H31.25C31.9403 7.5 32.5 6.94035 32.5 6.25C32.5 5.55965 31.9403 5 31.25 5H8.75ZM20.8839 10.3661C20.3957 9.87795 19.6043 9.87795 19.1161 10.3661L10.3661 19.1161C9.87795 19.6043 9.87795 20.3957 10.3661 20.8839C10.8543 21.372 11.6457 21.372 12.1339 20.8839L18.75 14.2678V33.75C18.75 34.4403 19.3096 35 20 35C20.6904 35 21.25 34.4403 21.25 33.75V14.2678L27.866 20.8839C28.3543 21.372 29.1457 21.372 29.634 20.8839C30.122 20.3957 30.122 19.6043 29.634 19.1161L20.8839 10.3661Z"
                fill="#14279B"
              />
            </svg>
            Upload
          </li>
        </Link>
        <Link aria-current="page" onClick={onclick} to="/Attendence">
          <li className={location.pathname === '/Attendence' ? 'active' : ''}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.7072 8.7071C36.0976 8.31658 36.0976 7.68342 35.7072 7.2929C35.3166 6.90237 34.6834 6.90237 34.2928 7.2929L31 10.5858L29.7072 9.2929C29.3166 8.90236 28.6834 8.90236 28.2928 9.2929C27.9024 9.68342 27.9024 10.3166 28.2928 10.7071L30.2928 12.7071C30.6834 13.0976 31.3166 13.0976 31.7072 12.7071L35.7072 8.7071ZM5.5 9C4.67158 9 4 9.67158 4 10.5C4 11.3284 4.67158 12 5.5 12H22.5C23.3284 12 24 11.3284 24 10.5C24 9.67158 23.3284 9 22.5 9H5.5ZM5.5 19C4.67158 19 4 19.6716 4 20.5C4 21.3284 4.67158 22 5.5 22H22.5C23.3284 22 24 21.3284 24 20.5C24 19.6716 23.3284 19 22.5 19H5.5ZM4 30.5C4 29.6716 4.67158 29 5.5 29H22.5C23.3284 29 24 29.6716 24 30.5C24 31.3284 23.3284 32 22.5 32H5.5C4.67158 32 4 31.3284 4 30.5ZM31.7072 23.7072L35.7072 19.7071C36.0976 19.3166 36.0976 18.6834 35.7072 18.2929C35.3166 17.9024 34.6834 17.9024 34.2928 18.2929L31 21.5858L29.7072 20.2928C29.3166 19.9024 28.6834 19.9024 28.2928 20.2928C27.9024 20.6834 27.9024 21.3166 28.2928 21.7072L30.2928 23.7072C30.6834 24.0976 31.3166 24.0976 31.7072 23.7072ZM35.7072 29.7072L31.7072 33.7072C31.3166 34.0976 30.6834 34.0976 30.2928 33.7072L28.2928 31.7072C27.9024 31.3166 27.9024 30.6834 28.2928 30.2928C28.6834 29.9024 29.3166 29.9024 29.7072 30.2928L31 31.5858L34.2928 28.2928C34.6834 27.9024 35.3166 27.9024 35.7072 28.2928C36.0976 28.6834 36.0976 29.3166 35.7072 29.7072Z"
                fill="#14279B"
              />
            </svg>
            Attendence
          </li>
        </Link>
        <Link aria-current="page" onClick={onclick} to="/Assignments">
          <li className={location.pathname === '/Assignments' ? 'active' : ''}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 13.3333V3.33331H10C8.15907 3.33331 6.66669 4.8257 6.66669 6.66665V33.3333C6.66669 35.1743 8.15907 36.6666 10 36.6666H30C31.841 36.6666 33.3333 35.1743 33.3333 33.3333V16.6666H23.3333C21.4923 16.6666 20 15.1743 20 13.3333ZM13.75 19.1666H26.25C26.9403 19.1666 27.5 19.7263 27.5 20.4166C27.5 21.107 26.9403 21.6666 26.25 21.6666H13.75C13.0597 21.6666 12.5 21.107 12.5 20.4166C12.5 19.7263 13.0597 19.1666 13.75 19.1666ZM13.75 23.75H26.25C26.9403 23.75 27.5 24.3096 27.5 25C27.5 25.6903 26.9403 26.25 26.25 26.25H13.75C13.0597 26.25 12.5 25.6903 12.5 25C12.5 24.3096 13.0597 23.75 13.75 23.75ZM13.75 28.3333H26.25C26.9403 28.3333 27.5 28.893 27.5 29.5833C27.5 30.2736 26.9403 30.8333 26.25 30.8333H13.75C13.0597 30.8333 12.5 30.2736 12.5 29.5833C12.5 28.893 13.0597 28.3333 13.75 28.3333ZM22.5 13.3333V4.16665L32.5 14.1666H23.3333C22.8732 14.1666 22.5 13.7935 22.5 13.3333Z"
                fill="#14279B"
              />
            </svg>
            Assignments
          </li>
        </Link>
        <Link aria-current="page" onClick={onclick} to="/StudyMaterial">
          <li
            className={location.pathname === '/StudyMaterial' ? 'active' : ''}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 28.125V1.875C37.5 0.835938 36.6641 0 35.625 0H10C5.85938 0 2.5 3.35938 2.5 7.5V32.5C2.5 36.6406 5.85938 40 10 40H35.625C36.6641 40 37.5 39.1641 37.5 38.125V36.875C37.5 36.2891 37.2266 35.7578 36.8047 35.4141C36.4766 34.2109 36.4766 30.7812 36.8047 29.5781C37.2266 29.2422 37.5 28.7109 37.5 28.125ZM12.5 10.4688C12.5 10.2109 12.7109 10 12.9688 10H29.5312C29.7891 10 30 10.2109 30 10.4688V12.0312C30 12.2891 29.7891 12.5 29.5312 12.5H12.9688C12.7109 12.5 12.5 12.2891 12.5 12.0312V10.4688ZM12.5 15.4688C12.5 15.2109 12.7109 15 12.9688 15H29.5312C29.7891 15 30 15.2109 30 15.4688V17.0312C30 17.2891 29.7891 17.5 29.5312 17.5H12.9688C12.7109 17.5 12.5 17.2891 12.5 17.0312V15.4688ZM32.2969 35H10C8.61719 35 7.5 33.8828 7.5 32.5C7.5 31.125 8.625 30 10 30H32.2969C32.1484 31.3359 32.1484 33.6641 32.2969 35Z"
                fill="#14279B"
              />
            </svg>
            Study Material
          </li>
        </Link>
        <Link aria-current="page" onClick={onclick} to="/Doubts">
          <li className={location.pathname === '/Doubts' ? 'active' : ''}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 3.33331C29.205 3.33331 36.6667 10.7966 36.6667 20C36.6667 29.2033 29.205 36.6666 20 36.6666C10.795 36.6666 3.33331 29.2033 3.33331 20C3.33331 10.7966 10.795 3.33331 20 3.33331ZM20 25.8333C19.0795 25.8333 18.3333 26.5795 18.3333 27.5C18.3333 28.4205 19.0795 29.1666 20 29.1666C20.9205 29.1666 21.6667 28.4205 21.6667 27.5C21.6667 26.5795 20.9205 25.8333 20 25.8333ZM20 11.25C17.4687 11.25 15.4167 13.302 15.4167 15.8333C15.4167 16.5237 15.9763 17.0833 16.6667 17.0833C17.2995 17.0833 17.8225 16.6131 17.9053 16.0029L17.9167 15.8333C17.9167 14.6827 18.8493 13.75 20 13.75C21.1507 13.75 22.0833 14.6827 22.0833 15.8333C22.0833 16.7313 21.8583 17.1755 21.0085 18.0536L20.7828 18.2828C19.3193 19.7463 18.75 20.6951 18.75 22.5C18.75 23.1903 19.3097 23.75 20 23.75C20.6903 23.75 21.25 23.1903 21.25 22.5C21.25 21.602 21.475 21.1578 22.3248 20.2796L22.5505 20.0505C24.014 18.587 24.5833 17.6381 24.5833 15.8333C24.5833 13.302 22.5313 11.25 20 11.25Z"
                fill="#14279B"
              />
            </svg>
            Doubts
          </li>
        </Link>
        <Link aria-current="page" onClick={onclick} to="/TimeTable">
          <li className={location.pathname === '/TimeTable' ? 'active' : ''}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5151 6.74787C19.4301 6.64665 20.0896 5.82292 19.9885 4.90804C19.8873 3.99314 19.0635 3.33354 18.1486 3.43475C9.81439 4.35684 3.33331 11.4202 3.33331 19.9997C3.33331 29.2044 10.7952 36.6664 20 36.6664C28.5771 36.6664 35.639 30.1887 36.5641 21.8575C36.6656 20.9427 36.0065 20.1187 35.0915 20.0172C34.1766 19.9155 33.3526 20.5749 33.2511 21.4897C32.5113 28.1514 26.8596 33.333 20 33.333C12.6362 33.333 6.66664 27.3634 6.66664 19.9997C6.66664 13.1381 11.851 7.48519 18.5151 6.74787Z"
                fill="#14279B"
              />
              <path
                d="M24.6121 3.98483C23.726 3.7359 22.8058 4.25248 22.5568 5.13867C22.3078 6.02483 22.8245 6.94503 23.7106 7.19397C24.1905 7.32877 24.6593 7.49017 25.1153 7.67647C25.9675 8.0246 26.9405 7.61603 27.2886 6.76393C27.6366 5.91183 27.2281 4.93885 26.376 4.59073C25.8035 4.35682 25.2148 4.15413 24.6121 3.98483Z"
                fill="#14279B"
              />
              <path
                d="M28.9157 7.81946C29.5378 7.14105 30.5922 7.09543 31.2705 7.71755C31.6232 8.0409 31.9615 8.37941 32.2848 8.73208C32.9068 9.41063 32.8609 10.4649 32.1823 11.0869C31.5038 11.7088 30.4495 11.663 29.8275 10.9844C29.5693 10.7028 29.2992 10.4325 29.0177 10.1743C28.3392 9.55215 28.2935 8.49786 28.9157 7.81946Z"
                fill="#14279B"
              />
              <path
                d="M18.3333 9.99982C19.2538 9.99982 20 10.746 20 11.6665V19.9998H25C25.9205 19.9998 26.6666 20.746 26.6666 21.6665C26.6666 22.587 25.9205 23.3332 25 23.3332H18.3333C17.4128 23.3332 16.6666 22.587 16.6666 21.6665V11.6665C16.6666 10.746 17.4128 9.99982 18.3333 9.99982Z"
                fill="#14279B"
              />
              <path
                d="M33.2325 12.7047C34.0843 12.3562 35.0577 12.7643 35.4062 13.6162C35.5852 14.054 35.746 14.5013 35.8877 14.957C35.9322 15.0999 35.9747 15.2436 36.0152 15.3881C36.2642 16.2743 35.7475 17.1944 34.8613 17.4434C33.9752 17.6922 33.055 17.1755 32.806 16.2894C32.7737 16.1744 32.7398 16.0599 32.7045 15.9462C32.5917 15.5833 32.4637 15.2271 32.321 14.8784C31.9725 14.0265 32.3805 13.0533 33.2325 12.7047Z"
                fill="#14279B"
              />
            </svg>
            Time Table
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
