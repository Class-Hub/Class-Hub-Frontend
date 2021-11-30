import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
      name: 'Discrete Mathematics',
      type: 'text',
    },
    {
      name: 'Computer Organisation',
      type: 'text',
    },
    {
      name: 'Digital System Design',
      type: 'text',
    },
    {
      name: 'Automata and Formal Languages',
      type: 'text',
    },
    {
      name: 'Software Engineering',
      type: 'text',
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
    const token = localStorage.getItem('classHub');
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

    // console.log('ujjwal myData', myData);

    if (register.role === 'admin') {
      const response = await axios.post('/teacherRegister', myData, config);
      toast.success('Teacher Registered');
    } else {
      const response = await axios.post('/register', myData, config);
      toast.success('Student Registered');
    }
  };

  // console.log('ujjwal sunjects', subject);
  return (
    <div class="form_wrapper">
      <ToastContainer />
      <div class="form_container">
        <div class="title_container">
          <h2>Responsive Registration Form</h2>
        </div>
        <div class="row clearfix">
          <div class="">
            <form>
              <div class="input_field">
                <span>
                  <i aria-hidden="true" class="fa fa-envelope"></i>
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={e => handleChange(e, 'email')}
                  required
                />
              </div>
              <div class="input_field">
                <span>
                  <i aria-hidden="true" class="fa fa-lock"></i>
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={e => handleChange(e, 'password')}
                />
              </div>
              <div class="input_field">
                <span>
                  <i aria-hidden="true" class="fa fa-lock"></i>
                </span>
                <input
                  type="text"
                  name="Roll No"
                  placeholder="Roll Number"
                  required
                  onChange={e => handleChange(e, 'roll')}
                />
              </div>

              <div class="input_field">
                <span>
                  <i aria-hidden="true" class="fa fa-lock"></i>
                </span>
                <input
                  type="date"
                  name=""
                  className="form-control"
                  placeholder="Date of Birth"
                  required
                  onChange={e => handleChange(e, 'dob')}
                />
              </div>

              <div class="input_field">
                <span>
                  <i aria-hidden="true" class="fa fa-lock"></i>
                </span>
                <input
                  type="text"
                  name=""
                  placeholder="Phone Number"
                  required
                  onChange={e => handleChange(e, 'phn')}
                />
              </div>

              <div class="row clearfix">
                <div class="col_half">
                  <div class="input_field">
                    <span>
                      <i aria-hidden="true" class="fa fa-user"></i>
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="First Name"
                      onChange={e => handleChange(e, 'fName')}
                    />
                  </div>
                </div>
                <div class="col_half">
                  <div class="input_field">
                    <span>
                      <i aria-hidden="true" class="fa fa-user"></i>
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Last Name"
                      required
                      onChange={e => handleChange(e, 'lName')}
                    />
                  </div>
                </div>
              </div>

              <div class="input_field select_option">
                <select onChange={e => handleChange(e, 'branch')}>
                  <option hidden> Branch</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Information Technology">
                    Information Technology
                  </option>
                </select>
                <div class="select_arrow"></div>
              </div>

              <div class="input_field">
                <span>
                  <i aria-hidden="true" class="fa fa-lock"></i>
                </span>
                <input
                  type="text"
                  name=""
                  placeholder="Batch"
                  onChange={e => handleChange(e, 'batch')}
                  required
                />
              </div>

              <div class="input_field select_option">
                <select onChange={e => handleChange(e, 'role')}>
                  <option> Select Your Role</option>
                  <option value="admin">Teacher</option>
                  <option value="">Student</option>
                </select>
                <div class="select_arrow"></div>
              </div>

              <div className="">
                <h6>Subjects</h6>
                {subjectsArr.map((sub, index) => {
                  return (
                    <div>
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

              {/* <div class="input_field select_option">
                <select>
                  <option>Select a country</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
                <div class="select_arrow"></div>
              </div>
              <div class="input_field checkbox_option">
                <input type="checkbox" id="cb1" />
                <label for="cb1">I agree with terms and conditions</label>
              </div>
              <div class="input_field checkbox_option">
                <input type="checkbox" id="cb2" />
                <label for="cb2">I want to receive the newsletter</label>
              </div> */}
              <input
                onClick={handleSubmit}
                class="button"
                type="submit"
                value="Register"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
