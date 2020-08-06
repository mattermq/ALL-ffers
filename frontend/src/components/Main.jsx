import React from 'react';
import CardShort from './CardShort';
import Feed from './Feed'

function Main() {

  return (
    <>
      <div className="mainText"> Удаленная работа на фрилансе </div>
      <div className="mainTextSmall"> Все самые актуальные заказы </div>
      <div className="wrap_cardBlock_and_filterBlock"> 
        <div className="main_cardBlock"> <Feed /> </div>
        <div className="main_filterBlock_Search">
          <div className="blockIN_main_filterBlock_Search">
            <div className="search"> поиск </div>
          </div>
        </div>
        <div className="main_filterBlock">
          <div className="blockIN_main_filterBlock">
            <div className="filter"> фильтр </div>
            <div className="filter"> фильтр </div>
            <div className="filter"> фильтр </div>
            <div className="filter"> фильтр </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Main;

