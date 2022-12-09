/* ** Formulaire de connexion.
 * Appel un callback utilisateur pour vérifier la connexion.
 */

import React, { useState } from 'react';

import css from './login.module.css';

export default function Login({ links, getData }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordFieldType, setPasswordFieldType] = useState('password');
  const [errorInfo, setErrorInfo] = useState('');

  /* ** Modifie le login.
   *
   * @param Event e Un événement JS.
   */
  function changeLogin(e) {
    setLogin(e.target.value);
  }

  /* ** Modifie le mot de passe.
   *
   * @param Event e Un événement JS.
   */
  function changePassword(e) {
    setPassword(e.target.value);
  }

  /* ** Modifie la checkbox "Rester connecté".
   */
  function changeRememberMe() {
    setRememberMe((oldValue) => (oldValue ? false : true));
  }

  /* ** Transforme le champ "password" en un champ "text".
   * Utilisé pour que l'utiisateur puisse vérifier le mot de passe qu'il à taper.
   */
  function changeVisibilityPasswordField() {
    setPasswordFieldType((oldType) =>
      oldType === 'password' ? 'text' : 'password'
    );
  }

  /* ** Connecte un utilisateur.
   * Appel la fonction de rappel getData, pour connecter un utilisateur.
   * getData doit renvoyer un message d'erreur si l'utilisateur n'a pas pu se connecter.
   */
  function connectUser() {
    let data = {
      login: login,
      password: password,
      rememberMe: rememberMe,
    };

    if (getData) setErrorInfo(getData(data));
  }

  // Rendu
  return (
    <>
      {errorInfo !== '' ? (
        <div className={css.error}>
          <p>{errorInfo}</p>
          <button onClick={(e) => setErrorInfo('')}>x</button>
        </div>
      ) : null}
      <div className={css.loginForm}>
        <a href={links.back} className={css.btnBack}>
          {'< Retour'}
        </a>
        <h1>Connexion</h1>
        <div className={css.formContent}>
          <form action="#" method="POST">
            <div className={css.loginBlock}>
              <label htmlFor="login">Login :</label>
              <input
                type="text"
                id="login"
                name="login"
                value={login}
                onChange={changeLogin}
              />
            </div>
            <div className={css.passwordBlock}>
              <label htmlFor="password">Mot de passe :</label>
              <input
                type={passwordFieldType}
                id="password"
                name="password"
                value={password}
                onChange={changePassword}
              />
              <button
                type="button"
                className={css.btnVisiblePassword}
                onClick={changeVisibilityPasswordField}
              >
                Voir
              </button>
              <div className={css.forgotPasswordBlock}>
                <a href={links.forgot} className={css.forgotLink}>
                  Mot de passe oublié
                </a>
              </div>
            </div>
            <div className={css.rememberMeBlock}>
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={rememberMe}
                onChange={changeRememberMe}
              />
              <span className={css.customCheckBox}></span>
              <label htmlFor="rememberMe" tabIndex="0">
                Rester connecté
              </label>
            </div>
            <div className={css.submitBlock}>
              <button
                type="button"
                className={css.submit}
                onClick={connectUser}
              >
                Me connecter
              </button>
            </div>
            <div className={css.signInBlock}>
              <a href={links.signin} className={css.signInLink}>
                M'inscrire
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

Login.defaultProps = {
  links: {
    back: '/home',
    forgot: '/forgot-password',
    signin: '/signin',
  },
};
