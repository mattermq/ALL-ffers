import React, { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addToStartedProjectsThunk, addToFinishedProjectsThunk } from '../../../store/slice';
import Tag from '../../Tag';
import Portal from '../../layout/Portal'

export default function FormFinishProject(props) {
  const dispatch = useDispatch()
  let userId = useSelector(state => state.slice.user._id)
  let { _id, title, description, budget, publishedAt, startedAt, comment, tags, url } = props.offer

  const [realBudget, setRealBudget] = useState(budget)
  const [finalComment, setFinalComment] = useState(comment)

  const elRef = useRef(null)
  if (!elRef.current) {
    const div = document.createElement('div')
    elRef.current = div
  }

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      props.onCancel()
    }
  }, [])

  useEffect(() => {
    const modalRoot = document.getElementById('modal')
    modalRoot.appendChild(elRef.current)
    document.addEventListener("keydown", escFunction, false);
    return () => {
      modalRoot.removeChild(elRef.current)
      document.removeEventListener("keydown", escFunction, false);
    }
  }, [])

  const budgetHandler = (e) => {
    setRealBudget(e.target.value)
  }

  const commentHandler = (e) => {
    setFinalComment(e.target.value)
  }



  const submitHandler = (e) => {
    e.preventDefault()
    console.log(_id)
    const finishedProject = {
      ...props.offer,
      budget: realBudget,
      finishedAt: new Date(),
      finishedAtTS: Date.parse(new Date()),
      comment,
    }
    dispatch(addToFinishedProjectsThunk(finishedProject))
    props.onCancel()
  }



  if (props.isModal)
    return createPortal(
      <div className="modal-overlay" >
        <div className="modal-window">
          <article className="card_extended">
            <form action="">
              <button onClick={props.onCancel}>X</button>
              <p className="cardMainText">{title}</p>
              <p className="cardText">{description}</p>
              <p className="dateTime">{publishedAt}</p>

              <input onChange={budgetHandler} type="text" name="budget" value={realBudget} />
              <textarea onChange={commentHandler} name="comment" id="" cols="30" rows="10" value={finalComment}></textarea>

              <div className="wrapTags">
                {tags.map((tag, index) => <Tag key={index} className="tag" tag={tag}></Tag>)}
              </div>

              <button onClick={props.onCancel} className="btnOpenCard">Отменить</button>
              <button onClick={submitHandler} className="btnOpenCard">Добавить в завершенное</button>
              {/* <a href={url} target="_blank"><button>Перейти к обьявлению</button></a> */}
            </form>
          </article>
        </div>
      </div>,
      elRef.current
    )
  else return null
}


