import React from 'react';
import CardShort from './CardShort';
import Feed from './Feed'

function Main() {

  return (
    <>
      <Feed className="main_cardBlock" />
      <div className="main_filterBlock">БЛОК С ФИЛЬТРАМИ </div>
    </>
  )
}

export default Main;
