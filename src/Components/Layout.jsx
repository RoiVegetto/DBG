import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; // Composant Navbar
import Sidebar from './Sidebar'; // Composant Sidebar
import '../Styles/Layouts/Layout.scss'; // Pour les styles spécifiques au layout

function Layout() {
  return (
    <div className="layout-container">
      <Navbar /> {/* Ajout de la navbar en haut */}
      <div className="content-wrapper"> {/* Conteneur pour la sidebar et le contenu principal */}
        <Sidebar /> {/* Barre latérale sur la gauche */}
        <main> {/* Contenu principal */}
          <Outlet /> {/* Pour afficher le contenu des routes */}
        </main>
      </div>
    </div>
  );
}

export default Layout;
