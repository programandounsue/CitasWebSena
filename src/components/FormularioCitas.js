
import React, { useState } from 'react';
import './FormularioCitas.css'; // Estilos para el formulario y la lista

function FormularioCitas() {
  // Estado para la lista de citas
  const [citas, setCitas] = useState([]);
  const [cita, setCita] = useState('');
  const [fecha, setFecha] = useState('');

  // Función para manejar el envío del formulario
  const agregarCita = (e) => {
    e.preventDefault(); // Prevenimos el comportamiento predeterminado del formulario
    if (cita && fecha) {
      const nuevaCita = { cita, fecha };
      setCitas([...citas, nuevaCita]); // Agregar la nueva cita a la lista
      setCita('');
      setFecha('');
    }
  };

  // Función para eliminar una cita
  const eliminarCita = (index) => {
    const nuevasCitas = citas.filter((_, i) => i !== index);
    setCitas(nuevasCitas);
  };

  return (
    <div className="contenido">
      <h2 className="titulo">Agendar Cita Médica</h2>
      <form onSubmit={agregarCita}>
        <div className="campo">
          <label htmlFor="cita">Descripción de la Cita:</label>
          <input
            type="text"
            id="cita"
            value={cita}
            onChange={(e) => setCita(e.target.value)}
            required
            placeholder="Escribe la descripción de la cita"
          />
        </div>
        <div className="campo">
          <label htmlFor="fecha">Fecha de la Cita:</label>
          <input
            type="date"
            id="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </div>
        <button type="submit">Agregar Cita</button>
      </form>

      <div className="lista">
        <h3>Lista de Citas Agendadas</h3>
        <ul>
          {citas.map((cita, index) => (
            <li key={index}>
              <div>
                <strong>{cita.cita}</strong> - <em>{cita.fecha}</em>
              </div>
              <button
                className="boton-eliminar"
                onClick={() => eliminarCita(index)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FormularioCitas;
