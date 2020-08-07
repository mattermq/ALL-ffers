import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store.js'
import './App.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import FirstPage from './components/FirstPage';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';

console.log(store.getState())

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <div className="firstPage"> <FirstPage /> </div> */}

        <Switch>

          <Route exact path="/">
            <div className="header"> <Header /> </div>
            <div className="app_wrapper">
              <div className="wrap_main">
                <div className="main"> <Main /> </div>
              </div>
            </div>
            <div className="footer"> <Footer /> </div>
          </Route>

          <Route exact path="/main">
            <div className="header"> <Header /> </div>
            <div className="app_wrapper">
              <div className="wrap_main">
                <div className="main"> <Main /> </div>
              </div>
            </div>
            <div className="footer"> <Footer /> </div>
          </Route>


          <Route exact path="/signup">
            <div className="header"> <Header /> </div>
            <div className="app_wrapper">
              <div className="wrap_main">
                <div className="main"> <Signup /></div>
              </div>
            </div>
            <div className="footer"> <Footer /> </div>
          </Route>

          <Route exact path="/login">
            <div className="header"> <Header /> </div>
            <div className="app_wrapper">
              <div className="wrap_main">
                <div className="main"><Login /></div>
              </div>
            </div>
            <div className="footer"> <Footer /> </div>
          </Route>

        </Switch>

      </Router>

    </Provider>
  );
}

export default App;
