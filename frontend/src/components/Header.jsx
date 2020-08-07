import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Signup from './Signup'
import Login from './Login'

function Header() {

  return (
    <div className="headerBlock">
      <NavLink className="logo" to="/main">Главная</NavLink>
      <div className="wrap_login">
        <NavLink className="login" to="/login">Войти</NavLink>
        <NavLink className="registration" to="/signup">Зарегистрироваться</NavLink>
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
