import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const isAuth = useSelector(state => state.slice.user.isAuth)
  const firstName = useSelector(state => state.slice.user.firstName)

  return (
    <div className="headerBlock">
      <NavLink className="logo" to="/main">Главная</NavLink>
      <div className="wrap_login">
        {isAuth ?
          <>
            <NavLink className="login" to="/profile">{firstName}</NavLink>
            <NavLink className="login" to="/logout">Logout</NavLink>
          </>
          : <>
            <NavLink className="login" to="/login">Войти</NavLink>
            <NavLink className="registration" to="/signup">Зарегистрироваться</NavLink>
          </>
        }
      </div>
    </div >

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
