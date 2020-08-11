import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './App.css';
import './components/Tag.css';
import './components/Modal.css'
import './components/Active.css'


import Header from './components/layout/Header';
import Main from './components/pages/Main';
import Footer from './components/layout/Footer';
import FirstPage from './components/pages/FirstPage';
import Signup from './components/pages/Signup.jsx';
import Login from './components/pages/Login.jsx';
import CardShort from './components/CardShort';
import { fetchOffersThunk } from './store/slice'
import Profile from './components/pages/profile/Profile';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchOffersThunk())
  }, [])


  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <div className="app_wrapper">
            <div className="header"> <Header /> </div>
            <div className="firstPage"> <FirstPage /> </div>
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
            <div className="main_signup"> <Signup /> </div>
            <div className="footer"> <Footer /> </div>
          </div>
        </Route>

        <Route exact path="/login">
          <div className="app_wrapper">
            <div className="header"> <Header /> </div>

            <div className="main_login"> <Login /> </div>

            <div className="footer"> <Footer /> </div>
          </div>
        </Route>

        <Route exact path="/profile">
          <div className="app_wrapper">
            <div className="header"> <Header /> </div>
            <Profile />
            <div className="footer"> <Footer /> </div>
          </div>
        </Route>

      </Switch>

      <Route exact path="/testCardShort"> {/* тестовое отображение - ПО ЗАВЕРШЕНИЮ УБРАТЬ */}
        <div className="app_wrapper">
          <div className="cardShort"> <CardShort /> </div>
        </div>
      </Route>

    </Router>
  );
}

export default App;
