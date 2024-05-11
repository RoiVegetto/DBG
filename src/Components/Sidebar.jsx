import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/info-perso">Infos Perso</Link></li>
        <li><Link to="/fight">Combat</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
