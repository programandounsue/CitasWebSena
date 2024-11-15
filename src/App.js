// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BarraNavegacion from './components/BarraNavegacion';
import FormularioCitas from './components/FormularioCitas';
import TablaCitas from './components/TablaCitas';
import Reloj from './components/Reloj';
import Notificaciones from './components/Notificaciones';
import PieDePagina from './components/PieDePagina';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <BarraNavegacion />
        <div className="main-content">
          <Reloj />
          <Notificaciones />
          <Routes>
            <Route path="/agendar" element={<FormularioCitas />} />
            <Route path="/citas" element={<TablaCitas />} />
          </Routes>
        </div>
        <PieDePagina />
      </div>
    </Router>
  );
}

export default App;
