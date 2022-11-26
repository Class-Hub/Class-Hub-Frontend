import axios from 'axios';
import React, { useState } from 'react';
import './../../styles/Dashboard/Register.scss';
import { ToastContainer, toast } from 'react-toastify';

const Register = e => {
  const [register, setRegister] = useState({
    fName: '',
    lName: '',
    email: '',
    password: '',
    roll: '',
    batch: '',
    branch: '',
    dob: '',
    role: '',
    phn: '',
  });

  const subjectsArr = [
    {
      name: 'Microprocessor and Interfacing',
    },
    {
      name: 'Compiler Design',
    },
    {
      name: 'Information Security',
    },
    {
      name: 'Professional Skills',
    },
    {
      name: 'Discrete Mathematics',
    },
    {
      name: 'Computer Organisation',
    },
    {
      name: 'Digital System Design',
    },
    {
      name: 'Automata and Formal Languages',
    },
    {
      name: 'Software Engineering',
    },
    {
      name: 'Design Algorithm and Analysis',
    },
  ];

  const [subject, setSubject] = useState([]);

  const handleChange = (e, state) => {
    setRegister({
      ...register,
      [state]: e.target.value,
    });
  };

  const handleCheckbox = async (quesIndex, e) => {
    let selected = { ...subject };

    if (e.target.checked) {
      selected[quesIndex] = e.target.value;
    } else {
      delete selected[quesIndex];
    }
    await setSubject(selected);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem('classNameHub');
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    const {
      fName,
      lName,
      email,
      roll,
      batch,
      branch,
      dob,
      phn,
      password,
      role,
    } = register;

    const myData = {
      name: `${fName} ${lName}`,
      email,
      roll,
      batch,
      branch,
      dob,
      phn,
      password,
      role,
      subName: Object.values(subject),
    };

    if (register.role === 'admin') {
      const response = await axios.post('/teacherRegister', myData, config);
      toast.success('Teacher Registered');
    } else {
      const response = await axios.post('/register', myData, config);
      toast.success('Student Registered');
    }

    setRegister({
      ...register,
      fName: '',
      lName: '',
      email: '',
      password: '',
      roll: '',
      batch: '',
      branch: '',
      dob: '',
      role: '',
      phn: '',
    });
  };

  return (
    <div className="wrapper" style={{
      overflowY: 'scroll',
    }}>
      <div
        className="form_wrapper rounded"
      >
        <ToastContainer />
        <div className="form_container">
          <div className="title_container">
            <h2>Registration Form</h2>
          </div>
          <div className="row clearfix">
            <div className="">
              <form>
                <div className="input_field">
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={register.email}
                    onChange={e => handleChange(e, 'email')}
                    required
                  />
                </div>
                <div className="input_field">
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={register.password}
                    onChange={e => handleChange(e, 'password')}
                  />
                </div>
                <div className="input_field">
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="text"
                    name="Roll No"
                    placeholder="Roll Number"
                    required
                    value={register.roll}
                    onChange={e => handleChange(e, 'roll')}
                  />
                </div>

                <div className="input_field">
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="date"
                    name=""
                    className="form-control"
                    placeholder="Date of Birth"
                    required
                    value={register.dob}
                    onChange={e => handleChange(e, 'dob')}
                  />
                </div>

                <div className="input_field">
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="text"
                    name=""
                    placeholder="Phone Number"
                    required
                    value={register.phn}
                    onChange={e => handleChange(e, 'phn')}
                  />
                </div>

                <div className="row clearfix">
                  <div className="col_half">
                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="name"
                        placeholder="First Name"
                        value={register.fName}
                        onChange={e => handleChange(e, 'fName')}
                      />
                    </div>
                  </div>
                  <div className="col_half">
                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Last Name"
                        required
                        value={register.lName}
                        onChange={e => handleChange(e, 'lName')}
                      />
                    </div>
                  </div>
                </div>

                <div className="input_field select_option">
                  <select onChange={e => handleChange(e, 'branch')}>
                    <option hidden>Branch</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Information Technology">
                      Information Technology
                    </option>
                  </select>
                  <div className="select_arrow"></div>
                </div>

                <div className="input_field">
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="text"
                    name=""
                    placeholder="Batch"
                    value={register.batch}
                    onChange={e => handleChange(e, 'batch')}
                    required
                  />
                </div>

                <div className="input_field select_option">
                  <select onChange={e => handleChange(e, 'role')}>
                    <option> Select Your Role</option>
                    <option value="admin">Teacher</option>
                    <option value="">Student</option>
                  </select>
                  <div className="select_arrow"></div>
                </div>

                <div className="">
                  <h6>Subjects</h6>
                  {subjectsArr.map((sub, index) => {
                    return (
                      <div key={sub.name}>
                        <input
                          type="checkbox"
                          value={sub.name}
                          className="me-2"
                          onChange={e => handleCheckbox(index, e)}
                        />
                        {sub.name}
                      </div>
                    );
                  })}
                </div>

                {/* <div className="input_field select_option">
                <select>
                  <option>Select a country</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
                <div className="select_arrow"></div>
              </div>
              <div className="input_field checkbox_option">
                <input type="checkbox" id="cb1" />
                <label for="cb1">I agree with terms and conditions</label>
              </div>
              <div className="input_field checkbox_option">
                <input type="checkbox" id="cb2" />
                <label for="cb2">I want to receive the newsletter</label>
              </div> */}
                <input
                  onClick={handleSubmit}
                  className="button"
                  type="submit"
                  value="Register"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
