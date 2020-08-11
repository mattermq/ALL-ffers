import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavouriteAC, expandCardAC, toggleFavouriteThunk } from '../store/slice';
import heartWhite from '../img/heart_white.png';
import heartBlack from '../img/heart_black.png';
import Tag from './Tag'
import FormStartProject from './pages/profile/FormStartProject'

export default function CardNormal(props) {
  const dispatch = useDispatch()
  let { _id, title, description, budget, publishedAt, tags, isFavourite } = props.offer
  const isAuth = useSelector(state => state.slice.user.isAuth)
  const userId = useSelector(state => state.slice.user._id)
  const [isModal, setIsModal] = useState(false)

  const toggleModal = () => {
    setIsModal(!isModal)
  }

  const shortDescription = description
    .split('')
    .splice(0, 130)
    .join('')
    .concat('...');

  const toggleFavourite = () => {
    dispatch(toggleFavouriteAC(_id))
    dispatch(toggleFavouriteThunk({ userId, offerId: _id }))
  }

  const expandCard = () => {
    dispatch(expandCardAC(_id))
  }


  return (
    <article className="card">
      <div className="wrap_cardMainText">
        <div className="cardMainText">{title}</div>
        <div className="priceCard">{budget}</div>
      </div>
      <div className="cardText">{shortDescription}</div>
      <div className="dateTime">{publishedAt}</div>
      <div className="wrapHeartAndTags">
        <div className="wrapTags">
          {tags.map((tag, index) => <Tag key={index} className="tag" tag={tag}></Tag>)}
        </div>
        <button onClick={() => setIsModal(!isModal)}>Не нажимай</button>
        <div className="wrap_openAndHeart">
          <button onClick={expandCard} className="btnOpenCard">развернуть</button>
          {
            isAuth && <button onClick={toggleFavourite} className="btnHeartCard">
              <img className="imgHeartCard" src={isFavourite ? heartBlack : heartWhite} alt="favourite" />
            </button>
          }
        </div>
      </div>
      {<FormStartProject isModal={isModal} onCancel={toggleModal} offer={props.offer} />}
    </article>
  )
}
