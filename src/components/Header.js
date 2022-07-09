import React from "react";
import logo from "../images/mestologo.svg";
import { Route, Routes } from "react-router-dom";

function Header({ email, signOut }) {
  return (
    <header className="page__header header">
      <img src={logo} alt="Логотип" className="header__logo" />
      <Routes>
        <Route
          path="/sign-up"
          element={
            <div className="header__login">
              <a href="/sign-in" className="header__exit">
                Войти
              </a>
            </div>
          }
        ></Route>
        <Route
          path="/sign-in"
          element={
            <div className="header__login">
              <a href="/sign-up" className="header__exit">
                Регистрация
              </a>
            </div>
          }
        ></Route>
        <Route
          exact
          path="/"
          element={
            <nav className="header__name">
              <ul className="header__login">
                <li className="header__email">{email}</li>
                <li>
                  <a href="/sign-in" className="header__exit" onClick={signOut}>
                    Выйти
                  </a>
                </li>
              </ul>
            </nav>
          }
        ></Route>
      </Routes>
    </header>
  );
}

export default Header;
