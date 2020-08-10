import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateUserOnServerThunk } from '../../../store/slice';
import Tag from '../../Tag';
import Portal from '../../layout/Portal'

export default function FormStartProject(props) {
  const dispatch = useDispatch()
  let { _id, title, description, budget, publishedAt, tags, url } = props.offer
  const userId = useSelector(state => state.slice.user._id)

  const addToStarted = () => {
  }

  if (props.isModal)
    return (
      <Portal>
        <div className="modal-overlay" >
          <div className="modal-window">
            <article className="card_extended">
              <form action="">
                <button onClick={props.onCancel}>X</button>
                <p className="cardMainText">{title}</p>
                <p className="priceCard">{budget}</p>
                <p className="cardText">{description}</p>
                <p className="dateTime">{publishedAt}</p>
                <div className="wrapTags">
                  {tags.map((tag, index) => <Tag key={index} className="tag" tag={tag}></Tag>)}
                </div>

                <button onClick={addToStarted} className="btnOpenCard">Добавить в начатое</button>
                <a href={url} target="_blank"><button>Перейти к обьявлению</button></a>
              </form>
            </article>
          </div>
        </div>
      </Portal>
    )
  else return null
}


