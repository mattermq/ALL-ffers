import React, { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateUserOnServerThunk } from '../../../store/slice';
import Tag from '../../Tag';
import Portal from '../../layout/Portal'

export default function FormStartProject(props) {
  const dispatch = useDispatch()
  let { _id, title, description, budget, publishedAt, tags, url } = props.offer

  const [realBudget, setRealBudget] = useState(budget)
  const [comments, setComments] = useState('')

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
    setComments(e.target.value)
  }

  const submitHandler = () => {
  }

  if (props.isModal)
    return createPortal(
      <div className="modal-overlay" >
        <div className="modal-window">
          <article className="card_extended">
            <form className="form_startProject" action="">
              
              <div className="startProject_MainText">{title}</div>
              <div className="startProject_Text">{description}</div>
              <div className="startProject_wrapTags">
                {tags.map((tag, index) => <Tag key={index} className="tag" tag={tag}></Tag>)}
              </div>
              <div className="startProject_dateTime">{publishedAt}</div>
              <div className="wrap_redactBudget">
                <div className="startProject_lableRedactBudget">Изменить бюджет</div>
                <input className="startProject_inpBudget" onChange={budgetHandler} type="text" name="budget" value={realBudget} />
              </div>
              <div className="wrap_comments">
                <div className="startProject_lableComments">Добавить заметку</div>
                <textarea className="startProject_comments" onChange={commentsHandler} name="comments" id="" cols="50" rows="5" value={comments}></textarea>
              </div>
              <div className="wrap_btn_startProject">
                <button onClick={submitHandler} className="startProject_btnStart">Добавить в начатое</button>
                <a className="startProject_LinkSite" href={url} target="_blank"><button className="startProject_btnLinkSite">Перейти к обьявлению</button></a>
                <button className="startProject_btnClose"onClick={props.onCancel}>Закрыть</button>
              </div>
              
            </form>
          </article>
        </div>
      </div>,
      elRef.current
    )
  else return null
}


