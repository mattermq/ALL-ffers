import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import FirstPage from './components/FirstPage';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import { fetchOffersThunk } from './store/slice'

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchOffersThunk())
  }, [])


  return (
    <Router>
      {/* <div className="firstPage"> <FirstPage /> </div> */}

      <Switch>

        <Route exact path="/">
          <div className="app_wrapper">
            <div className="header"> <Header /> </div>
              <div className="wrap_main">
                <div className="main"> <Main /> </div>
              </div>
            <div className="footer"> <Footer /> </div>
          </div>
        </Route>

        <Route exact path="/main">
          <div className="app_wrapper">
            <div className="header"> <Header /> </div>
              <div className="wrap_main">
                <div className="main"> <Main /> </div>
              </div>
            <div className="footer"> <Footer /> </div>
          </div>
        </Route>


        <Route exact path="/signup">
          <div className="app_wrapper">
            <div className="header"> <Header /> </div>
              <div className="wrap_main">
                <div className="main"> <Signup /> </div>
              </div>
            <div className="footer"> <Footer /> </div>
          </div>
        </Route>

        <Route exact path="/login">
          <div className="app_wrapper">
            <div className="header"> <Header /> </div>
              <div className="wrap_main">
                <div className="main"> <Login /> </div>
              </div>
            <div className="footer"> <Footer /> </div>
          </div>
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
