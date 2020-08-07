import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store.js'
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import FirstPage from './components/FirstPage';

console.log(store.getState())

function App() {
  return (
    <Provider store={store}>
      <div className="app_wrapper">
        <div className="header"> <Header /> </div>
        <div className="firstPage"> <FirstPage /> </div>
        <div className="wrap_main">
          <div className="main"> <Main /> </div>
        </div>
        <div className="footer"> <Footer /> </div>
      </div>
    </Provider>
  );
}

export default App;
