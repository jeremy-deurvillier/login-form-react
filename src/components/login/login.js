/* ** Formulaire de connexion.
 * Appel un callback utilisateur pour réellement se connecter.
 *
 * TODO :
 * - Ajout d'un fonction permettant d'appeler le callback utilisateur pour se connecter lors du clic sur "connexion".
 * - Ajout d'un bouton "retour" (vers l'accueil ? autre ?)
 * - Ajout d'un toggle "Remember me"
 * - Ajout d'un bouton voir/cacher le mot de passe.
 * - Ajout des liens "Mot de passe oublié" et "S'inscrire"
 * - Implémentation de composants contrôlés sur les inputs.
 */

import React from 'react';

import css from './login.module.css';

export default function Login() {
  return (
    <div className={css.loginForm}>
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
          </div>
          <div className={css.submitBlock}>
            <button type="button">Connexion</button>
          </div>
        </form>
      </div>
    </div>
  );
}
