import React from 'react'
import {Link} from 'react-router-dom'

const LabTitles = (props) => {
    let subjects = props.location.state.data.experiments;
    console.log(subjects);

  return (
    <div className="wrapper">
      <div className="attendenceContainer">
      <h4>Virtual Lab</h4>
      <hr/>
      <div className="subCardContainer">
            {subjects?.length > 0 &&
                subjects?.map((el,index) => {
                  return (
                    <Link key={index} to={{pathname: `${ props.location.pathname}/${index}`, state: {data: el}}}>
                      <div className="subCardsAttendence">
                        {el.title}
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
  )
}

export default LabTitles