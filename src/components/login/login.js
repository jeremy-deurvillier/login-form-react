import React from 'react';

import css from './login.module.css';

export default function Login() {
  return (
    <div>
      <h1>Connexion</h1>
      <form action="#" method="POST">
        <div className={css.formContent}>
          <div className={css.loginBlock}>
            <label htmlFor="login">Login :</label>
            <input type="text" id="login" name="login" />
          </div>
          <div className={css.passwordBlock}>
            <label htmlFor="password">Mot de passe :</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className={css.submitBlock}>
            <button type="button">Connexion</button>
          </div>
        </div>
      </form>
    </div>
  );
}
