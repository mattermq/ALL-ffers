import React from 'react';
import CardShort from './CardShort';
import Feed from './Feed'

function Main() {

  return (
    <>
      <div className="main_cardBlock"> <Feed /> </div>
      <div className="main_filterBlock">
        <div className="blockIN_main_cardBlock">
          <div className="filter"> фильтр </div>
          <div className="filter"> фильтр </div>
          <div className="filter"> фильтр </div>
          <div className="filter"> фильтр </div>
        </div>
      </div>
    </>
  )
}


export default Main;

