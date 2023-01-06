import React from 'react';
// import '../../../styles/Dashboard/TimeTable.scss';
import '../../../styles/Dashboard/Attendence.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import { toast,ToastContainer } from 'react-toastify';


const Vlab = () => {

  const [vlabsubs,setVlabSubs] = useState([]);
  const [subjects,setSubjects] = useState([]);

  useEffect(async () => {
    await axios
        .get('/teacher/vlab')
        .then(response => {
            console.log(response)
            setVlabSubs(response.data.data)
            setSubjects(response.data.subjects)
        })
        .catch(err => {
          toast.error('Error occured', err);
          console.log(err);
        });
  },[])

  // let subjects = ["Electronics Lab"]
  return (
    <div className="wrapper">
      <div className="attendenceContainer">
      <h4>Virtual Lab</h4>
      <hr/>
      <div className="subCardContainer">
            {vlabsubs?.length > 0 &&
                vlabsubs?.map((el,index) => {
                  console.log(el)
                  return (
                      <Link to={{pathname: `Vlab/${index}`, state: {data: el}}}>
                      <div className="subCardsAttendence">
                        {el.subject}
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.37451 18.8805L15.3745 12.8805L9.37451 6.88049"
                            stroke="#14279B"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </Link>
                  );
                })}
          </div>
      </div>
    </div>
  );
};

export default Vlab;
