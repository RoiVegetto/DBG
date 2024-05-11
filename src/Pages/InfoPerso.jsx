import React, { useEffect, useState } from 'react';

function InfoPerso() {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/character') // Appel HTTP vers JSON Server
      .then((response) => response.json())
      .then((data) => setCharacter(data))
      .catch((error) => console.error('Erreur lors du chargement des données:', error));
  }, []); // Appel une seule fois au chargement du composant

  if (!character) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="info-perso-container">
      <h2>Profil du Personnage</h2>
      <div className="info-container">
        <div className="left-info">
          <p>Niveau : {character.level}</p>
          <p>Attaque : {character.attack}</p>
          <p>Défense : {character.defense}</p>
          <p>Magie : {character.magic}</p>
          <p>Critique : {character.critical}</p>
          <p>Vitesse : {character.speed}</p>
        </div>
        <img src="/images/gokulvl1.png" alt="Personnage" />
        <div className="right-info">
          <p>KI : {character.ki}</p>
          <p>Victoires : {character.victories}</p>
          <p>Défaites : {character.defeats}</p>
          <p>Kills : {character.kills}</p>
        </div>
      </div>
      <div className="xp-bar">
        <p>Expérience : {character.pourcentage}</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${(character.exp / character.nextLevelExp) * 100}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default InfoPerso;
