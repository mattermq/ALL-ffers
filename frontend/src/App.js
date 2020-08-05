import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
   <div className="app_wrapper">
     <div className="header">ХЕДЕР <Header /> </div>
     <div className="main"> <Main /> </div>
     <div className="footer">ФУТЕР <Footer /> </div>
     
   </div>
  );
}

export default App;
