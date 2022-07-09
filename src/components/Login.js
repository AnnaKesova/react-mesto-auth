import { useState } from "react";
import React from "react";

function Login({ onLogin }) {
  const [data, setData] = useState({ email: "", password: "" });
  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    //const { email, password } = data;
    onLogin(data);
  }

  return (
    <div className="login">
      <form className="form login__form" onSubmit={handleSubmit}>
        <h2 className="login__title">Вход</h2>
        <input
          className="form__item login__item form__item_type_email"
          type="text"
          name="email"
          placeholder="Email"
          value={data.email}
          minLength="2"
          maxLength="40"
          required
          id="email"
          onChange={handleChange}
        />
        <span
          className="form__item-error form__item-error_active"
          id="username-error"
        ></span>
        <input
          className="form__item login__item  form__item_type_password"
          type="text"
          name="password"
          placeholder="Пароль"
          value={data.password}
          minLength="2"
          maxLength="200"
          required
          id="password"
          onChange={handleChange}
        />
        <span
          className="form__item-error form__item-error_active"
          id="job-error"
        ></span>
        <button
          type="submit"
          className="button popup__save form__exit"
          title="Согласие"
          aria-label="Согласиться"
        >
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
