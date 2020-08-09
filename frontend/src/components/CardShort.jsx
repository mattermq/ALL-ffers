import React from 'react';

import { useSelector } from 'react-redux'
import heartWhite from '../img/heart_white.png'
// import heartBlack from '../img/heart_black.png'

export default function CardShort() {

  return (
    <article className="card">
      <div className="wrap_cardMainText">
      <div className="cardMainText">Необходимо донастроить (либо, настроить заново функционал интернет-магазина)</div>
      <div className="priceCard">12 000 ₽</div>
      <button className="btnHeartCard"><img className="imgHeartCard" src={heartWhite} alt="favourite" /></button>
      </div>
        
    </article>
  )
}


