import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const Student = ({ data }) => {
  console.log(data);
  const getLink = async () => {
    console.log('This is if condition', data.isClassStart);
    if (data.isClassStart) {
      try {
        const res = await axios.get('http://localhost:7000/link');
        console.log('This is prakhar', res);
        console.log(res.data.Link);
        if (res.data.Link) {
          window.open(res.data.Link, '_blank').focus();
        } else {
          toast.error(res.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
    // let link;
    // await axios
    //   .post(`/subject/getLivelink`, { subjectId: data.sub })
    //   .then(res => {
    //     console.log(res.data.Link);
    //     // window.location.assign(res.data.Link);
    //     if (res.data.Link) {
    //       window.open(res.data.Link, '_blank').focus();
    //     } else {
    //       toast.error(res.data.message);
    //     }
    //   })
    //   .catch(err => console.log(err));
  };
  return (
    <div className="tlive">
      <h4> {data.subName} </h4>
      <button onClick={getLink} disabled={!data.isClassStart}>
        Join CLass
      </button>
    </div>
  );
};

export default Student;
