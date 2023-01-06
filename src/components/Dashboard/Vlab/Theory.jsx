import React from 'react';
// import '../../../styles/Dashboard/TimeTable.scss';
// import '../../../styles/Dashboard/Attendence.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SideBar from './SideBarLab'
import '../../../styles/Dashboard/Theory.scss'



const Theory = (props) => {
    // const { subId } = useParams();
  let subjects = ["Electronics Lab"]
  return (
    <div className="wrapper">
        <div >
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
        <h4>Logic Gates Virtual Lab</h4>
        <hr/>
        <div className='lab-wrapper'>
            <SideBar />
            <div className='gates-wrapper'>
            <h4>Theory</h4>
            <h5 className='headings'>Introduction</h5>
            <p>Logic gates are the basic building blocks of any digital system. Logic gates are electronic circuits having one or more than one input and only one output. The relationship between the input and the output is based on a certain logic. Based on this, logic gates are named as</p>
            <ol>
                <li>AND</li>
                <li>OR</li>
                <li>NOT</li>
                <li>NAND</li>
                <li>XOR</li>
                <li>XNOR</li>
            </ol>
            <h5><b>AND Gate</b></h5>
            <p>The AND gate is an electronic circuit that gives a high output (1) only if all its inputs are high. A dot (.) is used to show the AND operation i.e. A.B or can be written as AB</p>
            <center><b>Y= A.B</b><br/>
                <img src="http://vlabs.iitb.ac.in/vlabs-dev/labs/digital-electronics/experiments/verification-and-interpretation-truth-table-gates-iitr/images/and.png" width="325" height="150"/> <br/> <b>Figure-1:Logic Symbol of AND Gate</b> <br/>    
                <img src="http://vlabs.iitb.ac.in/vlabs-dev/labs/digital-electronics/experiments/verification-and-interpretation-truth-table-gates-iitr/images/AA.png" width="300" height="200"/> <br/><b>Figure-2:Truth Table of AND Gate</b><p></p> <br/>
            </center>
            <h5><b>OR Gate</b></h5>
            <p>The OR gate is an electronic circuit that gives a high output (1) if one or more of its inputs are high. A plus (+) is used to show the OR operation.</p>
            <center><b>Y= A+B</b><br/>
                <img src="http://vlabs.iitb.ac.in/vlabs-dev/labs/digital-electronics/experiments/verification-and-interpretation-truth-table-gates-iitr/images/or.png" width="325" height="150"/> <br/> <b>Figure-1:Logic Symbol of OR Gate</b> <br/>    
                <img src="http://vlabs.iitb.ac.in/vlabs-dev/labs/digital-electronics/experiments/verification-and-interpretation-truth-table-gates-iitr/images/truth_or.png" width="300" height="200"/> <br/><b>Figure-2:Truth Table of OR Gate</b><p></p> <br/>
            </center>
            <h5><b>NOT Gate</b></h5>
            <p>The NOT gate is an electronic circuit that produces an inverted version of the input at its output. It is also known as an inverter. If the input variable is A, the inverted output is known as NOT A. This is also shown as A' or A with a bar over the top, as shown at the outputs.</p>
            <center><b>Y= A'</b><br/>
                <img src="http://vlabs.iitb.ac.in/vlabs-dev/labs/digital-electronics/experiments/verification-and-interpretation-truth-table-gates-iitr/images/not.png" width="325" height="150"/> <br/> <b>Figure-1:Logic Symbol of NOT Gate</b> <br/>    
                <img src="http://vlabs.iitb.ac.in/vlabs-dev/labs/digital-electronics/experiments/verification-and-interpretation-truth-table-gates-iitr/images/truth_not.png" width="300" height="200"/> <br/><b>Figure-2:Truth Table of NOT Gate</b><p></p> <br/>
            </center>
            <h5><b>NAND Gate</b></h5>
            <p>This is a NOT-AND gate which is equal to an AND gate followed by a NOT gate. The outputs of all NAND gates are high if any of the inputs are low. The symbol is an AND gate with a small circle on the output. The small circle represents inversion.</p>
            <center><b>Y= (A.B)'</b><br/>
                <img src="http://vlabs.iitb.ac.in/vlabs-dev/labs/digital-electronics/experiments/verification-and-interpretation-truth-table-gates-iitr/images/nand.png" width="325" height="150"/> <br/> <b>Figure-1:Logic Symbol of NAND Gate</b> <br/>    
                <img src="http://vlabs.iitb.ac.in/vlabs-dev/labs/digital-electronics/experiments/verification-and-interpretation-truth-table-gates-iitr/images/truth_nand.png" width="300" height="200"/> <br/><b>Figure-2:Truth Table of NAND Gate</b><p></p> <br/>
            </center>
            <h5><b>NOR Gate</b></h5>
            <p>This is a NOT-OR gate which is equal to an OR gate followed by a NOT gate. The outputs of all NOR gates are low if any of the inputs are high. The symbol is an OR gate with a small circle on the output. The small circle represents inversion.</p>
            <center><b>Y= (A+B)'</b><br/>
                <img src="http://vlabs.iitb.ac.in/vlabs-dev/labs/digital-electronics/experiments/verification-and-interpretation-truth-table-gates-iitr/images/nor.png" width="325" height="150"/> <br/> <b>Figure-1:Logic Symbol of NOR Gate</b> <br/>    
                <img src="http://vlabs.iitb.ac.in/vlabs-dev/labs/digital-electronics/experiments/verification-and-interpretation-truth-table-gates-iitr/images/truth_nor.png" width="300" height="200"/> <br/><b>Figure-2:Truth Table of NOR Gate</b><p></p> <br/>
            </center>
            </div>
            
        </div>
      </div>
      
    </div>
  );
};

export default Theory;
