import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { loginAC } from '../store/slice.js';

export default function Login() {
  const dispatch = useDispatch()
  const history = useHistory()
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
      history.push('/')
    }
  }

  return (
      <form className="form" onSubmit={submitHandler}>
        <label className="formLable" htmlFor="email">Емайл</label>
        <input className="formInput" type="email" name="email" required onChange={changeHandler} value={state.email} />
        <label className="formLable" htmlFor="password">Пароль</label>
        <input className="formInput" type="password" name="password" required onChange={changeHandler} value={state.password} />
        <button className="formBtn" type="submit">Войти</button>
      </form>
  )
}
