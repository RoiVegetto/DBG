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
    return <div>Chargement...</div>; // Affichage pendant le chargement
  }

  return (
    <div>
      <h2>Profil du Personnage</h2>
      <p>Niveau : {character.level}</p>
      <p>Expérience : {character.exp}</p>
      <p>Vie : {character.health}</p>
      <p>Attaque : {character.attack}</p>
      <p>Défense : {character.defense}</p>
      <p>Magie : {character.magic}</p>
      <p>Vitesse : {character.speed}</p>
      <p>Critique : {character.critical}</p>
    </div>
  );
}

export default InfoPerso;
