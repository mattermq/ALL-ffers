import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import FirstPage from './components/FirstPage';


function App() {
  return (
   <div className="app_wrapper">
     <div className="header"> <Header /> </div>
     {/* <div className="firstPage"> <FirstPage /> </div> */}
     <div className="main"> <Main /> </div>
     <div className="footer"><Footer /> </div>
     
   </div>
  );
}

export default App;
