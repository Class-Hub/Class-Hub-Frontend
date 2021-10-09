import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import '../../styles/Dashboard/Dashboard.scss';
import SideBar from '../../components/Dashboard/SideBar';
import TopBar from '../../components/Dashboard/TopBar';
import Profile from '../../components/Dashboard/Profile/Profile';
import LiveClass from '../../components/Dashboard/LiveClass/LiveClass';
import Attendence from '../../components/Dashboard/Attendence/Attendence';
import Assignments from '../../components/Dashboard/Assignments/Assignments';
import StudyMaterial from '../../components/Dashboard/StudyMaterial/StudyMaterial';
import Doubts from '../../components/Dashboard/Doubts/Doubts';
import TimeTable from '../../components/Dashboard/TimeTable/TimeTable';

const Dashboard = () => {
  const path =
    '/(|Profile|LiveClass|Attendence|Assignments|StudyMaterial|Doubts|TimeTable)/';
  return (
    <div>
      <BrowserRouter basename="dashboard">
        <Route exact path={path}>
          <TopBar />
        </Route>
        <div className="bottomContainer">
          <Route exact path={path}>
            <SideBar />
          </Route>
          <Switch>
            <Route exact path="/" component={Profile} />
            <Route exact path="/liveClass" component={LiveClass} />
            <Route exact path="/Attendence" component={Attendence} />
            <Route exact path="/Assignments" component={Assignments} />
            <Route exact path="/StudyMaterial" component={StudyMaterial} />
            <Route exact path="/Doubts" component={Doubts} />
            <Route exact path="/TimeTable" component={TimeTable} />
            <Route>Not Found</Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Dashboard;
