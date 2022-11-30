import React from 'react';
// import '../../../styles/Dashboard/TimeTable.scss';
import '../../../styles/Dashboard/Attendence.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SideBar from './SideBarLab'



const PostTest = () => {
    // const { subId } = useParams();
  let subjects = ["Electronics Lab"]
  return (
    <div className="wrapper">
      <div>
        <Link to={`/Vlab`}>
          <svg
            width="40"
            height="40"
            className="back"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.6667 20H8.33333"
              stroke="#14279B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 31.6666L8.33333 20L20 8.33331"
              stroke="#14279B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Go Back
        </Link>
        
        <div className="lab-wrapper">
          <SideBar />
          <div className="gates-wrapper sim">
            <h4>PostTest</h4>
            <form method="POST" class="is-not-results">
            <fieldset>
              <legend>The NAND gate is AND gate followed by ______________</legend>
              <div class="answers">
                <div class="answer">
                  <input
                    type="radio"
                    name="answers[0]"
                    className='not-radio'
                    id="answer-0-1"
                    value="1"
                    required
                  />
                  <label
                    for="answer-0-1"
                    class="answer__item answer__item--is-correct"
                  >
                    NOT<span class="answer__reveal-text"></span>
                  </label>
                </div>
                <div class="answer">
                  <input
                    type="radio"
                    name="answers[0]"
                    className='not-radio'
                    id="answer-0-2"
                    value="2"
                    required
                  />
                  <label for="answer-0-2" class="answer__item">
                    OR
                  </label>
                </div>
                <div class="answer">
                  <input
                    type="radio"
                    className='not-radio'
                    name="answers[0]"
                    id="answer-0-3"
                    value="3"
                    required
                  />
                  <label for="answer-0-3" class="answer__item">
                    NAND
                  </label>
                </div>
                <div class="answer">
                  <input
                    type="radio"
                    name="answers[0]"
                    className='not-radio'
                    id="answer-0-4"
                    value="4"
                    required
                  />
                  <label for="answer-0-4" class="answer__item">
                    None of the above
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend>The NOR gate is OR gate followed by ____________</legend>
              <div class="answers">
                <div class="answer">
                  <input
                    type="radio"
                    className='not-radio'
                    name="answers[1]"
                    id="answer-1-1"
                    value="1"
                    required
                  />
                  <label for="answer-1-1" class="answer__item">
                    AND
                  </label>
                </div>
                <div class="answer">
                  <input
                    type="radio"
                    name="answers[1]"
                    className='not-radio'
                    id="answer-1-2"
                    value="2"
                    required
                  />
                  <label for="answer-1-2" class="answer__item">
                    NAND
                  </label>
                </div>
                <div class="answer">
                  <input
                    type="radio"
                    name="answers[1]"
                    id="answer-1-3"
                    className='not-radio'
                    value="3"
                    required
                  />
                  <label
                    for="answer-1-3"
                    class="answer__item answer__item--is-correct"
                  >
                    NOT<span class="answer__reveal-text"></span>
                  </label>
                </div>
                <div class="answer">
                  <input
                    type="radio"
                    name="answers[1]"
                    id="answer-1-4"
                    value="4"
                    className='not-radio'
                    required
                  />
                  <label for="answer-1-4" class="answer__item">
                    None of the above
                  </label>
                </div>
              </div>
            </fieldset>

            <div class="message">
              <p>
                Your Score: <span class="score" data-question-count="2"></span>
              </p>
            </div>
          </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PostTest;
