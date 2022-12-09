# Login-me

## Introduction

Login-me est un simple formulaire de connexion en React. 
Passez-lui votre fonction de connexion en props et laissez Login-me gérer les erreurs lors de la connexion.

Vous pouvez avoir un aperçu du projet sur [Stackblitz](https://stackblitz.com/edit/login-me).

## Installation

Commencez par cloner le dépôt :

```bash
git clone https://github.com/jeremy-deurvillier/login-me.git my-project
```

Installez ensuite les paquets :

```bash
cd my-project && npm install
```

Enfin, démarrez le projet :

```bash
npm run start
```

## Propriétés

Login-me possède deux propriétés :

- getData (*changement de nom prévu*) : permet d'appeler votre fonction de connexion.
- links : un objet contenant trois liens de navigation :
  - back : lien vers la page précédente. Par défaut, défini sur "/home".
  - forgot : lien vers la page "mot de passe oublié". Par défaut vaut "/forgot-password".
  - signin : lien vers la page d'inscription. Par défaut, vaut "/signin"

Exemple :

```js
// Fichier App.js
import User from './models/user'
import Login from './components/login'

export default function App() {
  const loginNavigation= { // On modifie les liens de navigation par défaut du composant Login.
    back: '/accueil',
    forgot: '/jaioubliermonmotdepasse',
    signin: '/inscription'
  }
  
  /* ** Fonction de connexion.
  * Le paramètre user, est donnée par le composant Login.
  */
  function connectUser(user) {
    let connexionInfos = User.connect(user) // Méthode pour connecter un utilisateur
    let errorLogin = connexionInfos.errorMessage || '' // Message à affiché si erreur lors de la connexion ou message vide si pas d'erreur
    
    return errorLogin // On retourne le message d'erreur ... ou le message vide
  }
  
  // Rendu
  return (<div>
    <Login getData={connectUser} links={loginNavigation} />
  </div>)
}
```

## Contributions

Si vous trouvez un intérêt à ce projet, n'hésitez pas à proposer vos modifications.

[Ecrit avec StackBlitz ⚡️](https://stackblitz.com)
