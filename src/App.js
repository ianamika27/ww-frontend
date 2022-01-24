import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';


import { history } from './_helpers';
import { alertActions } from './_actions';

import PrivateRoute from './_components/PrivateRoute';

import Homepage from './Pages/Homepage';
import Landingpage from './Pages/Landingpage';
import EmailSignIn from './Pages/SignIn/EmailSignIn';
import EmailSignUp from './Pages/SignUp/EmailSignUp';
import MyShows from './Pages/MyShows';


class App extends React.Component {

  constructor(props) {
    super(props);

    history.listen((location, action) => {
        // clear alert on location change
        this.props.clearAlerts();
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <Router history={history}>
          <Routes>
              {/* <Route exact path='/' element={<PrivateRoute/>}>
                <Route exact path='/homepage' element={<Homepage/>}/>
              </Route> */}
              <Route path='/' element={<Landingpage/>}/>
              <Route path='/homepage' element={<Homepage/>}/>
              <Route path='/myshows' element={<MyShows/>}/>
              <Route path="/landingpage" element={<Landingpage/>}/>
              <Route path="/login" element={<EmailSignIn/>} />
              <Route path="/register" element={<EmailSignUp/>} />
              
          </Routes>
      </Router>
  );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
