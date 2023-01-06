import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import '../../styles/Dashboard/Dashboard.scss';
import SideBar from '../../components/Dashboard/SideBar';
import TopBar from '../../components/Dashboard/TopBar';
import Profile from '../../components/Dashboard/Profile/Profile';
import LiveClass from '../../components/Dashboard/LiveClass/LiveClass';
import TheClass from '../../components/Dashboard/LiveClass/TheClass';
import Attendence from '../../components/Dashboard/Attendence/Attendence';
import Assignments from '../../components/Dashboard/Assignments/Assignments';
import StudyMaterial from '../../components/Dashboard/StudyMaterial/StudyMaterial';
import Doubts from '../../components/Dashboard/Doubts/Doubts';
import TimeTable from '../../components/Dashboard/TimeTable/TimeTable';
import { UserProvider } from '../../context/User.context';
import Recorded from '../../components/Dashboard/Recorded/Recorded';
import Upload from '../../components/Dashboard/Upload/Upload';
import Player from '../../components/Dashboard/Recorded/Player';
import NotFound from '../../components/Dashboard/NotFound';
import Register from '../../components/Dashboard/Register';
import ClassRoom from '../../components/Dashboard/Assignments/ClassRoom';
import ClassWork from '../../components/Dashboard/Assignments/ClassWork';
import SubAttendence from '../../components/Dashboard/Attendence/SubAttendence';
import Vlab from '../../components/Dashboard/Vlab/Vlab'
import SubjectLab from '../../components/Dashboard/Vlab/SubjectLab'
import Theory from '../../components/Dashboard/Vlab/Theory'
import Simulation from '../../components/Dashboard/Vlab/Simulation'
import Aim from '../../components/Dashboard/Vlab/Aim'
import PostTest from '../../components/Dashboard/Vlab/PostTest'
import PreTest from '../../components/Dashboard/Vlab/PreTest'
import DisplayTT from '../../components/Dashboard/DisplayTT/DisplayTT'
import FormTT from '../../components/Dashboard/FormTT/FormTT'
import LabTitle from '../../components/Dashboard/Vlab/LabTitles'
import SideBarLab from '../../components/Dashboard/Vlab/SideBarLab'


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminRoute from '../../components/Routehandler/AdminRoute';

const Dashboard = () => {
  const path =
    '/(|Profile|LiveClass|RecordedLectures|Upload|Attendence|Assignments|StudyMaterial|Doubts|TimeTable|register|Vlab|DisplayTT|makeTT)/';


  return (
    <div>
      <ToastContainer />
      <BrowserRouter basename="dashboard">
        <UserProvider>
          <Route path={path} component={TopBar} />
          <div className="bottomContainer">
            <Route path={path} component={SideBar} />

            <Switch>
              <Route exact path="/" component={Profile} />
              <Route exact path="/liveClass" component={LiveClass} />
              <Route exact path="/Class/:classId" component={TheClass} />
              <Route exact path="/RecordedLectures" component={Recorded} />
              <Route
                exact
                path="/RecordedLectures/:videoId"
                component={Player}
              />
              <AdminRoute path="/Upload" component={Upload} />
              <Route exact path="/Attendence" component={Attendence} />
              <Route
                exact
                path="/Attendence/:subId"
                component={SubAttendence}
              />
              <Route exact path="/DisplayTT" component={DisplayTT} />
              <Route exact path="/Vlab" component={Vlab} />
              <Route exact path="/Vlab/:subject" component={LabTitle} />
              <Route exact path="/Vlab/:subject/:id" component={SubjectLab} />
              <Route exact path="/Vlab/:subject/:id/theory" component={Theory} />
              <Route exact path="/Vlab/:subject/:id/simulation" component={Simulation} />
              <Route exact path="/Vlab/:subject/:id/aim" component={Aim} />
              <Route exact path="/Vlab/:subject/:id/pretest" component={PreTest} />
              <Route exact path="/Vlab/:subject/:id/posttest" component={PostTest} />
              <Route exact path="/Assignments" component={Assignments} />
              <Route exact path="/Assignments/:classId" component={ClassRoom} />
              <Route
                exact
                path="/Assignments/:classId/:classWork"
                component={ClassWork}
              />
              {/* <Route exact path="/StudyMaterial" component={StudyMaterial} /> */}
              <Route exact path="/Doubts" component={Doubts} />
              <Route exact path="/Doubts/:personId" component={Doubts} />
              <Route exact path="/TimeTable" component={TimeTable} />
              <AdminRoute exact path="/register" component={Register} />
              <AdminRoute exact path="/makeTT" component={FormTT} />
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </div>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
};

export default Dashboard;
