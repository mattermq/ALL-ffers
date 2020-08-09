import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const axiosQ = axios.create({ withCredentials: true });


export default function Signup() {

  const dispatch = useDispatch()
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: ''
  };
  const [state, setState] = useState(initialState)

  const changeHandler = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const response = await axiosQ.post('http://localhost:3003/signup', state)
    console.log(response)
    setState(initialState)

    // if (response.status === 200)
    //   dispatch(userLoginAC(response.data))
    // history.push('/')
  }

  return (
    <form className="form_signup" onSubmit={submitHandler}>

      <label className="formLable" htmlFor="firstName">Имя</label>
      <input className="formInput" type="text" name="firstName" required onChange={changeHandler} value={state.firstName} />

      <label className="formLable" htmlFor="lastName">Фамилия</label>
      <input className="formInput" type="text" name="lastName" required onChange={changeHandler} value={state.lastName} />

      <label className="formLable" htmlFor="email">Емайл</label>
      <input className="formInput" type="email" name="email" required onChange={changeHandler} value={state.email} />

      <label className="formLable" htmlFor="password">Пароль</label>
      <input className="formInput" type="password" name="password" required onChange={changeHandler} value={state.password} />
      <label className="formLable" htmlFor="password2">Повторите пароль</label>

      <input className="formInput" type="password" name="password2" required onChange={changeHandler} value={state.password2} />
      <button className="formBtn" type="submit">Зарегистрироваться</button>
    </form>
  )
}
