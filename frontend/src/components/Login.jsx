import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const axiosQ = axios.create({ withCredentials: true });


export default function Login() {

  const dispatch = useDispatch()
  const initialState = {
    email: '',
    password: '',
  };
  const [state, setState] = useState(initialState)

  const changeHandler = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const response = await axiosQ.post('http://localhost:3003/login', state)
    console.log(response)
    setState(initialState)
    // if (response.status === 200)
    //   dispatch(userLoginAC(response.data))
    // history.push('/')
  }

  return (
    
      <form className="form" onSubmit={submitHandler}>

        <label htmlFor="email">Емайл</label>
        <input type="email" name="email" required onChange={changeHandler} value={state.email} />

        <label className="formPassword" htmlFor="password">Пароль</label>
        <input type="password" name="password" required onChange={changeHandler} value={state.password} />

        <button className="formBtn" type="submit">Зарегистрироваться</button>
      </form>
  
  )
}
