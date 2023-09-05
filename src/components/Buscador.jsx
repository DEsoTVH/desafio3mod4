import React, { useState } from 'react';

const Buscador = ({ buscarColaborador }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    buscarColaborador(busqueda);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar colaborador..."
            value={busqueda}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Buscador;