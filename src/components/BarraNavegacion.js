
import React from 'react';
import { Link } from 'react-router-dom';
import './BarraNavegacion.css';

const BarraNavegacion = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-logo-link">Citas Médicas</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/" className="navbar-link">Inicio</Link></li>
        <li><Link to="/agendar" className="navbar-link">Agendar Citas</Link></li>
        <li><Link to="/citas" className="navbar-link">Ver Citas</Link></li>
      </ul>
    </nav>
  );
};

export default BarraNavegacion;


