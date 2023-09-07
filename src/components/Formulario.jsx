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

    if (!validarCorreo(colaborador.correo) || !validarTelefono(colaborador.telefono)) {
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

  const validarCorreo = (correo) => {
    // encontre esta como la mas usada universalmente profe, si me esta viendo profe, la recibo con cariño xD
    const regexCorreo = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return regexCorreo.test(correo);
  };

  const validarTelefono = (telefono) => {
    const regexTelefono = /^\d{9}$/;
    return regexTelefono.test(telefono);
  };

  return (
    <div className="form col-12 col-lg-4">
      <form onSubmit={handleSubmit} noValidate>
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
            className={`form-control ${
              mostrarAlerta && !validarCorreo(colaborador.correo)
                ? "is-invalid"
                : ""
            }`}
            name="correo"
            value={colaborador.correo}
            onChange={handleChange}
          />
          {mostrarAlerta && !validarCorreo(colaborador.correo) && (
            <Alert mensaje="Por favor ingrese un correo válido" tipo="danger" />
          )}
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
            type="tel"
            className={`form-control ${
              mostrarAlerta && !validarTelefono(colaborador.telefono)
                ? "is-invalid"
                : ""
            }`}
            name="telefono"
            value={colaborador.telefono}
            onChange={handleChange}
          />
          {mostrarAlerta && !validarTelefono(colaborador.telefono) && (
            <Alert mensaje="Por favor ingrese un teléfono válido de 9 dígitos" tipo="danger" />
          )}
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
