import React, { useState } from 'react';

const StudentRow = ({ data, index, subId }) => {
  const [attendenceArr, setAttendenceArr] = useState(
    data.attendance.filter(el => {
      return el.sub === subId;
    })[0]
  );
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>
        {attendenceArr.totalPresent}/{attendenceArr.totalDays}
      </td>
    </tr>
  );
};

export default StudentRow;
