import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; // Composant Navbar
import '../Styles/Layouts/Layout.scss'; // Pour les styles spécifiques au layout

function Layout() {
  return (
    <div className="layout-container">
      <Navbar /> {/* Ajout de la navbar en haut */}
      <main>
        <Outlet /> {/* Pour afficher le contenu des routes */}
      </main>
    </div>
  );
}

export default Layout;
