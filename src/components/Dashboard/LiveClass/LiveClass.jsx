import React from 'react';
import { useUser } from '../../../context/User.context';
import '../../../styles/Dashboard/LiveClass.scss';
import Student from './Student';
import Teacher from './Teacher';

const LiveClass = () => {
  const { user } = useUser();
  
  return (
    <div className="wrapper">
      <div className="LiveContainer">
        <h4>Live Class</h4>
        <hr />
        <div className="liveclasses">
          {user && user.role && user.role === 'admin' && user.teachingSubs &&
            user.teachingSubs.map(el => {
              return <Teacher key={el._id} batch={user.batch} data={el} />;
            })}
          {user && user.role !== 'admin' && user.attendance &&
            user.attendance.map(el => {
              console.log(JSON.stringify(el , null , ' '))
              return <Student key={el._id} data={el} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default LiveClass;
