import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components//layout/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';
import ReactCalendar from './components/datePicker/Calendar';

import ContactState from './context/contact/ContactState';
import EventState from './context/newEvent/EventState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import './App.css';
// import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

const App = () => {

  return (
    <AuthState>
      <EventState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              
              <div className='full-container'>
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                  <PrivateRoute exact path='/calendar' component={ReactCalendar} />
                  {/* <ScheduleComponent currentView="Month" >
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                  </ScheduleComponent> */}
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
      </EventState>
    </AuthState>
  );
};

export default App;