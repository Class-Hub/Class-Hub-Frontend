import React from 'react'

const EachSlot = (props) => {

    const slots = props.slots.map(slot => (
        <tr key={slot._id}>
          <td style={{fontSize: "14px"}}>{slot.teacher}</ td>
          <td>{""}</td>
          <td>{""}</td>
          <td style={{fontSize: "14px"}}>{slot.sections}</td>
          <td>{""}</td>
          <td>{""}</td>
          <td style={{fontSize: "14px"}}>{slot.subject}</td>
          <td>{""}</td>
          <td>{""}</td>
          <td style={{fontSize: "14px"}}>{slot.numLectures}</td>
          <td>
            <button
            //   onClick={this.onDeleteClick.bind(this, slot._id)}
            style={{padding:"10px",height:"auto" ,marginTop:"10px"}}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </td>
        </tr>
      ));

  return (
    <div className="addscroll">
        {/* {console.log(this.props.slots)} */}
        <table style={{borderSpacing: "10px 0"}}>
          <thead>
            <tr>
              <th style={{ fontSize: "15px" }}>Teacher Name</th>
              <th>{" "}</th>
              <th>{" "}</th>
              <th style={{ fontSize: "15px" }}>Section</th>
              <th>{" "}</th>
              <th>{" "}</th>
              <th style={{ fontSize: "15px" }}>Subject</th>
              <th>{" "}</th>
              <th>{" "}</th>
              <th style={{ fontSize: "15px" }}>No of Lectures</th>
              <th>{" "}</th>
              <th>{" "}</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: "20px" }}>{slots}</tbody>
        </table>
      </div>
  )
}

export default EachSlot