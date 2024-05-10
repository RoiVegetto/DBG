import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Components/Sidebar.scss';

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/info-perso">Infos Perso</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
