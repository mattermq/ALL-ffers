import React from 'react';
import { useSelector } from 'react-redux'
import heartWhite from '../public/heart_white.png'
import heartBlack from '../public/heart_black.png'


export default function CardFull() {

  return (
    <article>
      <h3>Необходимо донастроить (либо, настроить заново функционал интернет-магазина)</h3>
      <span>12 000 ₽</span>
      <button><img src={heartWhite} alt="favourite" /></button>
    </article>
  )
}
