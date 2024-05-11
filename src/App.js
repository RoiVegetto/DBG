import './Styles/Main.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Connexion from './Pages/ConnexionInscription';
import Home from './Pages/Home';
import InfoPerso from './Pages/InfoPerso';
import ListePerso from './Pages/ListePerso';
import ModeHistoire from './Pages/ModeHistoire';
import MapMonde from './Pages/MapMonde';
import Inventaire from './Pages/Inventaire';
import Parametres from './Pages/Parametre';
import Fight from './Pages/Fight';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/connexion" element={<Connexion />} />

        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="info-perso" element={<InfoPerso />} />
          <Route path="liste-perso" element={<ListePerso />} />
          <Route path="fight" element={<Fight />} />
          <Route path="mode-histoire" element={<ModeHistoire />} />
          <Route path="map-monde" element={<MapMonde />} />
          <Route path="inventaire" element={<Inventaire />} />
          <Route path="parametres" element={<Parametres />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
