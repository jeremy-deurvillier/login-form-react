import React from 'react';

export default function Login() {
  return (
    <div>
      <h1>Connexion</h1>
      <form action="#" method="POST">
        <div className="form-content">
          <div className="loginBlock">
            <label htmlFor="login">Login :</label>
            <input type="text" id="login" name="login" />
          </div>
          <div className="passwordBlock">
            <label htmlFor="password">Mot de passe :</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="submitBlock">
            <button type="button">Connexion</button>
          </div>
        </div>
      </form>
    </div>
  );
}
