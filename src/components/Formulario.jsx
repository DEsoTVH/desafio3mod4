import React, { useState } from "react";
import Alert from "./Alert";

const Formulario = ({ agregarColaborador, mensajeAlert, tipoAlert }) => {
  const [colaborador, setColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setColaborador({ ...colaborador, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      colaborador.nombre === "" ||
      colaborador.correo === "" ||
      colaborador.edad === "" ||
      colaborador.cargo === "" ||
      colaborador.telefono === ""
    ) {
      setMostrarAlerta(true);
    } else {
      agregarColaborador(colaborador);
      setColaborador({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });

      setMostrarAlerta(false);
    }
  };

  return (
    <div className="form col-12 col-lg-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h2>Agregar Colaborador</h2>
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
            type="number"
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
      {mostrarAlerta ? (
        <Alert mensaje="Por favor complete todos los campos" tipo="danger" />
      ) : (
        <Alert mensaje={mensajeAlert} tipo={tipoAlert} />
      )}
    </div>
  );
};

export default Formulario;
