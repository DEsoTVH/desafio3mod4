import React, { useState } from "react";

const Buscador = ({ buscarColaborador }) => {
  const handleChange = (e) => {
    buscarColaborador(e.target.value);
  };

  return (
    <div className="buscador col-12 col-md-6 mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar colaborador..."
        onChange={handleChange}
      />
    </div>
  );
};

export default Buscador;
