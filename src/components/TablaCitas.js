
import React, { useState, useEffect } from 'react';

function TablaCitas() {
  const [citas, setCitas] = useState([]);  // Inicia con un array vacío

  useEffect(() => {
    // Simular la carga de datos, por ejemplo, desde una API
    const obtenerCitas = () => {
      // Aquí se reemplaza con la llamada a una API real
      setCitas([
        { id: 1, nombre: 'Juan', fecha: '2024-11-10' },
        { id: 2, nombre: 'Ana', fecha: '2024-11-11' }
      ]);
    };

    obtenerCitas();
  }, []);

  if (!citas || citas.length === 0) {
    return <div>No hay citas agendadas.</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        {citas.map((cita) => (
          <tr key={cita.id}>
            <td>{cita.nombre}</td>
            <td>{cita.fecha}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablaCitas;
