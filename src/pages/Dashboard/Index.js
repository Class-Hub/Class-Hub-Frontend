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

const Dashboard = () => {
  const path =
    '/(|Profile|LiveClass|RecordedLectures|Upload|Attendence|Assignments|StudyMaterial|Doubts|TimeTable|register)/';

  return (
    <div>
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
              <Route exact path="/Upload" component={Upload} />
              <Route exact path="/Attendence" component={Attendence} />
              <Route exact path="/Assignments" component={Assignments} />
              <Route exact path="/StudyMaterial" component={StudyMaterial} />
              <Route exact path="/Doubts" component={Doubts} />
              <Route exact path="/TimeTable" component={TimeTable} />
              <Route exact path="/register" component={Register} />
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
