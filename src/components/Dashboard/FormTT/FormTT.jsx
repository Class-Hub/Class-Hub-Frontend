import React,{useState,useEffect} from "react";
import {
  Button,
  Label,
  Col,
  Input,
  Form,
  FormGroup,
  FormFeedback,
  Row
} from "reactstrap";

import axios from "axios";
import { toast,ToastContainer } from 'react-toastify';

import EachSlot from './EachSlot'
import { Link, Redirect ,useHistory} from "react-router-dom";


const FormTT = (props) => {

    // let tchr,subjects,section;

    const [teacher,setTchr] = useState([]);
    const [subs,setSubjects] = useState([]);
    const [sec,setSection] = useState([]);

    useEffect(async() => {
        await axios
        .get('/teacher/getAll')
        .then(response => {
            console.log(response)
           setTchr(response.data.teachers)
           setSubjects(response.data.subjects)
           setSection(response.data.classes)

        })
        .catch(err => {
          toast.error('Error occured', err);
          console.log(err);
        });
      }, []);

    const [days, setDays] = useState({
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
        saturday:0
      });

      const [slots,setSlots] = useState([])

      const handleChange = async(e, state) => {
        await setDays({
          ...days,
          [state]: parseInt(e.target.value),
        });
        // console.log(days);
      };

      

     let tchr,subjects,section;

      if (!teacher) tchr = <option disabled>Loading</option>;
      else {
        if (!teacher) tchr = <option disabled>Loading</option>;
        else {
          tchr = teacher.map(tchrs => (
            <option key={tchrs}>{tchrs}</option>
          ));
        }
      }

      if (!subs) subjects = <option disabled>Loading</option>;
      else {
        if (!subs) subjects = <option disabled>Loading</option>;
        else {
            subjects = subs.map(tchrs => (
            <option key={tchrs}>{tchrs}</option>
          ));
        }
      }

      if (!sec) section = <option disabled>Loading</option>;
      else {
        if (!sec) section = <option disabled>Loading</option>;
        else {
            section = sec.map(tchrs => (
            <option key={tchrs}>{tchrs}</option>
          ));
        }
      }

      const [t,setT] = useState();
      const [s,setS] = useState();
      const [su,setSu] = useState();
      const [l,setL] = useState();
      const [c,setC] = useState(0);

      const [allteachers,setAllTeachers] = useState(new Set());

      const handleChangeSlots = async (e,state) => {
        // const {t,s,su,l} = state;
        
        e.preventDefault()
        // console.log(state);
        setC(c+1);
        console.log(days)
        if(t == undefined || s == undefined || su == undefined ||l == undefined){
            toast.error('Fill All Data');
        }else{
            await setAllTeachers(previousState => new Set([...previousState, t]))
            await setSlots(slots => [...slots, {
                teacher:t,
                sections:[`${s}`],
                subject:su,
                numLectures: l,
                _id: c
            }]);
        }

        setT('');
        setS('');
        setSu('');
        setL('');
        // console.log(slots);
      }

      let slotContent;

      if (slots === null) {
        // slotContent = <Spinner />;
      } else {
        let a = false;
        // Check if logged in user has subject data
        if (slots !== undefined) {
          if (slots.length > 0) {
            a = true;
          }
        }
        if (Object.keys(slots).length > 0 && a) {
          slotContent = (
            <div>
              <EachSlot slots={slots} />
            </div>
          );
        } else {
          //User is logged in but has no slot
          slotContent = (
            <div>
              <div>
                <p style={{fontSize:"20px"}}>You do not have any Slot, please add some </p>
              </div>
            </div>
          );
        }
      }
      let history = useHistory();

        const handleGenerate = async () => {
            let days_arr = [0,0,0,0,0,0];

            days_arr[0] = days.monday
            days_arr[1] = days.tuesday
            days_arr[2] = days.wednesday
            days_arr[3] = days.thursday
            days_arr[4] = days.friday
            days_arr[5] = days.saturday

            slots.shift();

            console.log(allteachers);
            let teachers = Array.from(allteachers);

            console.log(teachers);

            const response = await axios.post('/generateTT',{slots,days_arr,teachers});
            
            history.push({
                pathname: '/DisplayTT',
                state: {data: response.data}
            }); 
            console.log(response);
        }
  

  return (
    <>
    <div className="wrapper" style={{display: "flex"}}>
        <div className="mt-5 me-5 ms-5">
        {/* <Form onSubmit={this.onSubmit}> */}
        <Form style={{width: "500px"}}>
          <FormGroup row className="me-5">
            <Col md={{ size: 3, offset: 3 }}>
              <Label className="dayname" htmlFor="monday">
                Monday
              </Label>
            </Col>
            <Col md={5}>
              <Input
                type="number"
                id="monday"
                name="monday"
                onChange={e => handleChange(e, 'monday')}
                value={days.monday}
                className="fa fa-search form-control-feedback"
                style={{height: "auto"}}
              />
              <FormFeedback>Error</FormFeedback>
            </Col>
          </FormGroup>

          <FormGroup row className="me-5"> 
            <Col md={{ size: 3, offset: 3 }}>
              <Label className="dayname" htmlFor="tuesday">
                Tuesday
              </Label>
            </Col>
            <Col md={5}>
              <Input
                type="number"
                id="tuesday"
                name="tuesday"
                onChange={e => handleChange(e, 'tuesday')}
                value={days.tuesday}
                className="fa fa-search form-control-feedback"
                style={{height: "auto"}}
              />
              <FormFeedback>Error</FormFeedback>
            </Col>
          </FormGroup>

          <FormGroup row className="me-5">
            <Col md={{ size: 3, offset: 3 }}>
              <Label className="dayname" htmlFor="wednesday">
                Wednesday
              </Label>
            </Col>
            <Col md={5}>
              <Input
                type="number"
                id="wednesday"
                name="wednesday"
                onChange={e => handleChange(e, 'wednesday')}
                value={days.wednesday}
                className="fa fa-search form-control-feedback"
                style={{height: "auto"}}
              />
              <FormFeedback>Error</FormFeedback>
            </Col>
          </FormGroup>

          <FormGroup row className="me-5">
            <Col md={{ size: 3, offset: 3 }}>
              <Label className="dayname" htmlFor="thursday">
                Thursday
              </Label>
            </Col>
            <Col md={5}>
              <Input
                type="number"
                id="thursday"
                name="thursday"
                onChange={e => handleChange(e, 'thursday')}
                value={days.thursday}
                className="fa fa-search form-control-feedback"
                style={{height: "auto"}}
              />
              <FormFeedback>Error</FormFeedback>
            </Col>
          </FormGroup>

          <FormGroup row className="me-5">
            <Col md={{ size: 3, offset: 3 }}>
              <Label className="dayname" htmlFor="friday">
                Friday
              </Label>
            </Col>
            <Col md={5}>
              <Input
                type="number"
                id="friday"
                name="friday"
                onChange={e => handleChange(e, 'friday')}
                value={days.friday}
                className="fa fa-search form-control-feedback"
                style={{height: "auto"}}
              />
              <FormFeedback>Error</FormFeedback>
            </Col>
          </FormGroup>

          <FormGroup row className="me-5">
            <Col md={{ size: 3, offset: 3 }}>
              <Label className="dayname" htmlFor="saturday">
                Saturday
              </Label>
            </Col>
            <Col md={5}>
              <Input
                type="number"
                id="saturday"
                name="saturday"
                onChange={e => handleChange(e, 'saturday')}
                value={days.saturday}
                className="fa fa-search form-control-feedback"
                style={{height: "auto"}}
              />
              <FormFeedback>Errors</FormFeedback>
            </Col>
          </FormGroup>

          
          {/* <FormGroup row>{numslotContent}</FormGroup> */}
          {/* <FormGroup row>TEST</FormGroup> */}
        </Form>
        <Button  className="btn mt-5" onClick={handleGenerate}
            // disabled={loading || this.props.timeTable.loading}
          >
            Generate Time-Table
          </Button>
      </div>
      <ToastContainer />
      <div className="mt-5">
        <Form style={{width: "900px"}}>
          <Row>
            <Col md={{ size: 3, offset: 0.5 }}>
              <Label>Teacher</Label>
              <Input
                type="select"
                name="teacher"
                id="teacher"
                onChange={async e => await setT(e.target.value)}
                value={t}
                className="fa fa-search form-control-feedback"
              >
                <option>Select</option>
                {tchr}
              </Input>
              <FormFeedback>Error</FormFeedback>
            </Col>
            <Col md={{ size: 3, offset: 0.5 }}>
              <Label>Class-Section</Label>
              <Input
                type="select"
                name="sections"
                id="sections"
                onChange={async e => await setS(e.target.value)}
                value={s}
                className="fa fa-search form-control-feedback"
              >
                <option>Select</option>
                {section}
              </Input>
              <FormFeedback>Error</FormFeedback>
            </Col>
            <Col md={{ size: 3, offset: 0.5 }}>
              <Label>Subject</Label>
              <Input
                type="select"
                name="subject"
                id="subject"
                onChange={async e => await setSu(e.target.value)}
                value={su}
                className="fa fa-search form-control-feedback"
              >
                <option>Select</option>
                {subjects}
              </Input>
              <FormFeedback>Error</FormFeedback>
            </Col>
            <Col md={{ size: 3, offset: 0.5 }}>
              <Label>No. Of Lectures</Label>
              <Input
                type="number"
                name="numLectures"
                // placeholder="No. of lectures"
                id="numLectures"
                onChange={async e => await setL(e.target.value)}
                value={l}
                className="fa fa-search form-control-feedback"
                style={{height: "auto"}}
              />
              <FormFeedback>Error</FormFeedback>
            </Col>
            <Col md={{ size: 3, offset: 0.5 }}>
              <Button type="submit" color="primary" style={{padding:"0",height:"auto" ,marginTop:"10px"}} onClick={handleChangeSlots} >
                Add
              </Button>
            </Col>
          </Row>
          <Row className="display-4" style={{ marginLeft: 50, marginTop: 25 }}>
          {slotContent}
          {/* SLOTS */}
        </Row>
        </Form>
        <div
          style={{ float: "right", marginLeft: "20px", marginBottom: "10px" }}
        >
          {/* <Button onClick={() => this.generator(slot, teacher, classes)} className="btn"
            disabled={loading || this.props.timeTable.loading}
          >
            Generate Time-Table
          </Button> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default FormTT