/* ** Formulaire de connexion.
 * Appel un callback utilisateur pour réellement se connecter.
 *
 * TODO :
 * - Ajout d'un fonction permettant d'appeler le callback utilisateur pour se connecter lors du clic sur "connexion".
 * - Implémentation de composants contrôlés sur les inputs.
 */

import React from 'react';

import css from './login.module.css';

export default function Login() {
  return (
    <div className={css.loginForm}>
      <a href="#links.back" className={css.btnBack}>
        {'< Retour'}
      </a>
      <h1>Connexion</h1>
      <div className={css.formContent}>
        <form action="#" method="POST">
          <div className={css.loginBlock}>
            <label htmlFor="login">Login :</label>
            <input type="text" id="login" name="login" />
          </div>
          <div className={css.passwordBlock}>
            <label htmlFor="password">Mot de passe :</label>
            <input type="password" id="password" name="password" />
            <button type="button" className={css.btnVisiblePassword}>
              Voir
            </button>
            <div className={css.forgotPasswordBlock}>
              <a href="#links.forgot" className={css.forgotLink}>
                Mot de passe oublié
              </a>
            </div>
          </div>
          <div className={css.rememberMeBlock}>
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <span className={css.customCheckBox}></span>
            <label htmlFor="rememberMe" tabIndex="0">
              Rester connecté
            </label>
          </div>
          <div className={css.submitBlock}>
            <button type="button" className={css.submit}>
              Me connecter
            </button>
          </div>
          <div className={css.signInBlock}>
            <a href="#links.signin" className={css.signInLink}>
              M'inscrire
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
