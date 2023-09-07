import React, { useState } from "react";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Buscador from "./components/Buscador";
import Alert from "./components/Alert";
import { BaseColaboradores } from "./BaseColaboradores";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");
  const [busqueda, setBusqueda] = useState("");

  const agregarColaborador = (nuevoColaborador) => {
    const id = (colaboradores.length + 1).toString();
    setColaboradores([...colaboradores, { id, ...nuevoColaborador }]);
    setMensaje("Colaborador agregado exitosamente.");
    setTipoMensaje("success");
  };

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    setColaboradores(nuevosColaboradores);
    setMensaje("Colaborador eliminado exitosamente.");
    setTipoMensaje("success");
  };

  return (
    <div className="container text-center">
      <div className="text-center">
        <h1>Lista de Colaboradores</h1>
        <Buscador buscarColaborador={setBusqueda} />
      </div>
      <div className="row row-cols-2 justify-content-between m-0">
        <Listado
          colaboradores={colaboradores}
          buscarColaborador={busqueda}
          eliminarColaborador={eliminarColaborador}
        />
        <Formulario
          className="form"
          agregarColaborador={agregarColaborador}
          mensajeAlert={mensaje}
          tipoAlert={tipoMensaje}
        />
        <Alert/>
      </div>
    </div>
  );
};

export default App;
