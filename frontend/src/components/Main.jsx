import React from 'react';
import CardShort from './CardShort';
import Feed from './Feed'

function Main() {

  return (
    <>
      <div className="main_cardBlock"> <Feed /> </div>
      <div className="main_filterBlock">БЛОК С ФИЛЬТРАМИ </div>
    </>
  )
}

export default Main;
