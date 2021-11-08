import React from "react";
import logoImg from '../../../images/logo.svg';
import siginImg from '../../../images/sign.svg';

import './styles.scss';

const Navbar = () => (
  <header className="navigation">
    <div className="navigation-logo">
      <img className="navigation-logo__img" src={logoImg} alt="Logo" />
      <h1 className="navigation-logo__title">MrDonald's</h1>
    </div>
    <button className="navigation-login">
      <img src={siginImg} alt="login" />
      <p>войти</p>
    </button>
  </header>
)

export default Navbar;
