import React, { useState } from 'react';

const Formulario = ({ agregarColaborador }) => {
  const [colaborador, setColaborador] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setColaborador({ ...colaborador, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      colaborador.nombre &&
      colaborador.correo &&
      colaborador.edad &&
      colaborador.cargo &&
      colaborador.telefono
    ) {
      agregarColaborador(colaborador);
      setColaborador({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: '',
      });
    } else {
      // Mostrar mensaje de error
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
            <h1>Agregar Colaborador</h1>
          <label>Nombre:</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={colaborador.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Correo:</label>
          <input
            type="email"
            className="form-control"
            name="correo"
            value={colaborador.correo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Edad:</label>
          <input
            type="number"
            className="form-control"
            name="edad"
            value={colaborador.edad}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Cargo:</label>
          <input
            type="text"
            className="form-control"
            name="cargo"
            value={colaborador.cargo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Teléfono:</label>
          <input
            type="text"
            className="form-control"
            name="telefono"
            value={colaborador.telefono}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Colaborador
        </button>
      </form>
    </div>
  );
};

export default Formulario;