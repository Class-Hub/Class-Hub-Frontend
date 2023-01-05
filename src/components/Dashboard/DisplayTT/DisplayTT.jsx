import React from 'react';

import JSPDF from 'jspdf'
import 'jspdf-autotable'

import {
    Button,
  } from "reactstrap";
  

const DisplayTT = (props) => {

    const handleDownload = (e) => {
        const pdf = new JSPDF()
        pdf.autoTable({html: '#CSE0'})
        pdf.save('data.pdf')
    }

    console.log(props.location.state.data.b)
    let timeTable = props.location.state.data.b
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let periods = Array.from(Array(7).keys())
    const tt = timeTable ? (timeTable.map(el => {
      return <><table className="table table-bordered" key={timeTable.indexOf(el)} id={"CSE" + timeTable.indexOf(el)}>
          <thead>
          <tr>
            <th style={{ fontSize: "25px" }}>Days\Periods</th>
            {periods.map(period => {
              return <th style={{ fontSize: "25px" }} key={periods.indexOf(period)}>{period+1}</th>
            })}
          </tr>
          </thead>
          <tbody>
        {el.map(ele => {
          let i = 0;
          return <tr key={el.indexOf(ele)}>
          <th>{days[el.indexOf(ele)]}</th>
          {ele.map(elem => {
          if(elem === 0 ){
            i = i+1;
            return (
              <td key ={i}>-</td>
            );
          } else {
            i = i + 1;
            return (
              <td key={i}>{elem.subject} (Faculty:{elem.teacher})</td>
            );
          }
          })}
          </tr>
        }) }
        </tbody>
        </table>
        <Button  className="btn" onClick={handleDownload}
            // disabled={loading || this.props.timeTable.loading}
          >
            Download
          </Button>
        </>
    })) : (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th style={{ fontSize: "25px" }}>Days\Periods</th>
          <th style={{ fontSize: "25px" }}>First</th>
          <th style={{ fontSize: "25px" }}>Second</th>
          <th style={{ fontSize: "25px" }}>Third</th>
          <th style={{ fontSize: "25px" }}>Fourth</th>
          <th style={{ fontSize: "25px" }}>Fifth</th>
          <th style={{ fontSize: "25px" }}>Sixth</th>
          <th style={{ fontSize: "25px" }}>Seventh</th>
          <th style={{ fontSize: "25px" }}>Eighth</th>
        </tr>
      </thead>
      <tbody style={{ fontSize: "20px" }}>
        <tr>
          <th>Monday</th>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <th>Tuesday</th>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <th>Wednesday</th>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <th>Thursday</th>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <th>Friday</th>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <th>Saturday</th>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
      </tbody>
    </table>)
    return (
        <div className="wrapper">
      <div className="page display" style={{ marginTop: "100px" }}>
        <h2>Class-Section</h2>
        
        {tt}
      </div>
        </div>
    );
  };

export default DisplayTT;
