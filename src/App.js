import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Connexion from './Pages/Connexion';
import Inscription from './Pages/Inscription';
import Home from './Pages/Home';
import InfoPerso from './Pages/InfoPerso';
import ListePerso from './Pages/ListePerso';
import ModeHistoire from './Pages/ModeHistoire';
import MapMonde from './Pages/MapMonde';
import Inventaire from './Pages/Inventaire';
import Parametres from './Pages/Parametre';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/connexion" component={Connexion} />
        <Route path="/inscription" component={Inscription} />
        <Route path="/home" component={Home} />
        <Route path="/info-perso" component={InfoPerso} />
        <Route path="/liste-perso" component={ListePerso} />
        <Route path="/mode-histoire" component={ModeHistoire} />
        <Route path="/map-monde" component={MapMonde} />
        <Route path="/inventaire" component={Inventaire} />
        <Route path="/parametres" component={Parametres} />
        <Route path="*" component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
