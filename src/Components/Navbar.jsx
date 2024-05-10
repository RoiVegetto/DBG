import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Components/Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/home">Accueil</Link></li>
        <li><Link to="/liste-perso">Liste Perso</Link></li>
        <li><Link to="/mode-histoire">Mode Histoire</Link></li>
        <li><Link to="/map-monde">Map Monde</Link></li>
        <li><Link to="/inventaire">Inventaire</Link></li>
        <li><Link to="/parametres">Paramètres</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
