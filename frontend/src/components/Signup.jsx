import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const axiosQ = axios.create({ withCredentials: true });

export default function Signup() {

  const dispatch = useDispatch()
  const initialState = {
    name: '',
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
    const response = await axiosQ.post('http://localhost:3003/signup', values)
    console.log(response)
    // if (response.status === 200)
    //   dispatch(userLoginAC(response.data))
    // history.push('/')
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="firstName" required onChange={changeHandler} value={state.firstName} />
      <input type="text" name="lastName" required onChange={changeHandler} value={state.lastName} />
      <input type="email" name="email" required onChange={changeHandler} value={state.email} />
      <input type="password" name="password" required onChange={changeHandler} value={state.password} />
      <input type="password" name="password2" required onChange={changeHandler} value={state.password2} />
      <button type="submit">Зарегистрироваться</button>
    </form>
  )
}
