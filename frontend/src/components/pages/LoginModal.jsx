import React, { useEffect, useRef, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { loginAC } from '../../store/slice.js';

export default function Login({ isModal, toggleModal }) {
  const dispatch = useDispatch()
  const history = useHistory()

  const elRef = useRef(null)
  if (!elRef.current) {
    const div = document.createElement('div')
    elRef.current = div
  }

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      toggleModal()
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

  const initialState = {
    email: '',
    password: '',
  };
  const [state, setState] = useState(initialState)

  const axiosQ = axios.create({ withCredentials: true });

  const changeHandler = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const response = await axiosQ.post('http://localhost:3003/login', state)
    if (response.status === 200) {
      setState(initialState)
      dispatch(loginAC(response.data))
      toggleModal()
      history.push('/main')
    }
  }

  if (isModal)
    return createPortal(
      <div className="modal-overlay" >
        <div className="modal-window">
          <form className="modal-login" onSubmit={submitHandler}>
            <label className="formLable" htmlFor="email">Емайл</label>
            <input className="formInput" type="email" name="email" required onChange={changeHandler} value={state.email} />
            <label className="formLable" htmlFor="password">Пароль</label>
            <input className="formInput" type="password" name="password" required onChange={changeHandler} value={state.password} />
            <button className="formBtn" type="submit">Войти</button>
          </form>
        </div>
      </div>
      , elRef.current
    )
  else return null
}
