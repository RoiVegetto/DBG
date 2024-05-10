import React, { useState } from 'react';

function ConnexionInscription() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="auth-page">
      <h2>{isSignUp ? 'Inscription' : 'Connexion'}</h2>
      {isSignUp ? (
        <form>
          {/* Champs pour l'inscription */}
          <input type="text" placeholder="Nom d'utilisateur" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Mot de passe" />
          <button type="submit">S'inscrire</button>
        </form>
      ) : (
        <form>
          {/* Champs pour la connexion */}
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Mot de passe" />
          <button type="submit">Se connecter</button>
        </form>
      )}
        <button onClick={toggleForm}>
        {isSignUp ? "Vous avez déjà un compte ? Se connecter" : "Pas de compte ? S'inscrire"}
        </button>
    </div>
  );
}

export default ConnexionInscription;

