import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';


import { history } from './_helpers';
import { alertActions } from './_actions';

import PrivateRoute from './_components/PrivateRoute';

import MyShows from './Pages/MyShows';
import Homepage from './Pages/Homepage';
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp';
import Landingpage from './Pages/Landingpage';

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
      <BrowserRouter>
          <Routes>
              {/* <Route exact path='/' element={<PrivateRoute/>}>
                <Route exact path='/homepage' element={<Homepage/>}/>
              </Route> */}
              <Route path='/' element={<Landingpage/>}/>
              <Route path='/homepage' element={<Homepage/>}/>
              <Route path='/myshows' element={<MyShows/>}/>
              <Route path="/landingpage" element={<Landingpage/>}/>
              <Route path="/login" element={<SignIn/>} />
              <Route path="/register" element={<SignUp/>} />
              
          </Routes>
      </BrowserRouter>
      
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
