import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutThunk } from '../../store/slice'
import LoginModal from '../pages/LoginModal';
import SignupModal from '../pages/SignupModal';

function Header() {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.slice.user.isAuth)
  const firstName = useSelector(state => state.slice.user.firstName)

  const [loginModal, setLoginModal] = useState(false)
  const [signupModal, setSignupModal] = useState(false)

  const toggleLoginModal = () => setLoginModal(!loginModal)
  const toggleSignupModal = () => setSignupModal(!signupModal)

  return (
    <div className="headerBlock">
      <NavLink className="logo" to="/main">Главная</NavLink>
      <div className="wrap_login">
        {isAuth ?
          <>
            <NavLink className="login" to="/profile">{firstName}</NavLink>
            <button onClick={() => dispatch(logoutThunk())} className="login">Logout</button>
            <button onClick={toggleLoginModal} className="registration">Модальный логин</button>
            <button onClick={toggleSignupModal} className="registration">Модальный signup</button>
          </>
          : <>
            <NavLink className="login" to="/login">Войти</NavLink>
            <NavLink className="registration" to="/signup">Зарегистрироваться</NavLink>
            <button onClick={toggleLoginModal} className="registration">Модальный логин</button>
            <button onClick={toggleSignupModal} className="registration">Модальный signup</button>
          </>
        }
        {loginModal && <LoginModal isModal={loginModal} toggleModal={toggleLoginModal} />}
        {signupModal && <SignupModal isModal={signupModal} toggleModal={toggleSignupModal} />}
      </div>
    </div>

    // <div className="headerBlock">
    //   <div className="logo">Логотип</div>
    //   <div className="wrap_login">
    //     <div className="login"></div>
    //     <div className="registration">Регистрация</div>
    //   </div>
    // </div>

  )
}

export default Header;
