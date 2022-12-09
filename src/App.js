import React, { useState } from 'react';
import Login from './components/login/login';
import './style.css';

export default function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [username, setUsername] = useState('');

  /* ** Vérifie la validité du formulaire de connexion.
   *
   * @param Object user Les données d'un utilisateur, récupérées via le composant Login.
   *
   * @ return String Un texte à affiché si la connexion de l'utilisateur échoue.
   */
  function verifyUser(user) {
    let errorLogin;

    if (user.login !== '' && user.password !== '') {
      console.log("Vérifiez l'utilisateur ici");

      setIsConnected(true);
      setUsername(user.login);
    } else {
      errorLogin = 'Login ou mot de passe incorrect.';
      setIsConnected(false);
    }

    return errorLogin;
  }

  /* ** Déconnecte l'utilisateur.
   */
  function disconnectUser() {
    setIsConnected(false);
  }

  // Rendu
  return (
    <div>
      {isConnected ? (
        <p style={{ textAlign: 'center' }}>
          Bienvenue {username} !<br />
          <button type="button" onClick={disconnectUser}>
            Déconnexion
          </button>
        </p>
      ) : (
        <Login getData={verifyUser} />
      )}
    </div>
  );
}
