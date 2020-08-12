import React, { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addToStartedProjectsThunk } from '../../../store/slice';
import Tag from '../../Tag';
import Portal from '../../layout/Portal'

export default function FormFinishProject(props) {
  const dispatch = useDispatch()
  let userId = useSelector(state => state.slice.user._id)
  let { _id, title, description, budget, publishedAt, startedAt, comments, tags, url } = props.offer

  const [realBudget, setRealBudget] = useState(budget)
  const [finalComments, setFinalComments] = useState(comments)

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

  const commentsHandler = (e) => {
    setFinalComments(e.target.value)
  }



  const submitHandler = (e) => {
    e.preventDefault()
    const newProject = {
      ...props.offer,
      user: userId,
      budget: realBudget,
      startedAt: new Date(),
      comments,
    }
    dispatch(addToStartedProjectsThunk(newProject))
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
              <textarea onChange={commentsHandler} name="comments" id="" cols="30" rows="10" value={finalComments}></textarea>

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


