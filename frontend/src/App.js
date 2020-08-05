import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store.js'
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

console.log(store.getState())

function App() {
  return (
    <Provider store={store}>
      <div className="app_wrapper">
        <div className="header">ХЕДЕР <Header /> </div>
        <div className="main"> <Main /> </div>
        <div className="footer">ФУТЕР <Footer /> </div>
      </div>
    </Provider>
  );
}

export default App;
