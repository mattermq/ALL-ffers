import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavouriteAC, toggleFavouriteThunk, expandCardAC } from '../../../store/slice';
import heartWhite from '../../../img/heart_white.png';
import heartBlack from '../../../img/heart_black.png';
import FormStartProject from './FormStartProject'
import FormFinishProject from './FormFinishProject'


export default function CardShort(props) {
  const dispatch = useDispatch()
  let { _id, title, budget, isFavourite } = props.offer
  const isAuth = useSelector(state => state.slice.user.isAuth)
  const userId = useSelector(state => state.slice.user._id)
  const [isModalStart, setIsModalStart] = useState(false)
  const [isModalFinish, setIsModalFinish] = useState(false)

  const activeTab = useSelector(state => state.slice.view.profileActiveTab)

  const toggleFavourite = () => {
    dispatch(toggleFavouriteAC(_id))
    dispatch(toggleFavouriteThunk({ userId, offerId: _id }))
  }

  const expandCard = () => {
    dispatch(expandCardAC(_id))
  }

  const toggleModalStart = () => {
    setIsModalStart(!isModalStart)
  }

  const toggleModalFinish = () => {
    setIsModalFinish(!isModalFinish)
  }

  return (
    <article className="card">
      <div className="wrap_cardMainText">
        <div className="cardMainText">{title}</div>
        <div className="priceCard">{budget}</div>

        <button onClick={expandCard} className="btnOpenCard">развернуть</button>

        {(activeTab === 1) && <button onClick={toggleModalStart} className="btnOpenCard">добавить в начатое</button>}
        {(activeTab === 2) && <button onClick={toggleModalFinish} className="btnOpenCard">добавить в завершенное</button>}
      </div>

      {isModalStart && <FormStartProject isModal={isModalStart} onCancel={toggleModalStart} offer={props.offer} />}
      {isModalFinish && <FormFinishProject isModal={isModalFinish} onCancel={toggleModalFinish} offer={props.offer} />}

    </article>
  )
}


