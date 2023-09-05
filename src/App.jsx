import React, { useState } from 'react';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Alert from './components/Alert';
import { BaseColaboradores } from './BaseColaboradores';

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');

  const agregarColaborador = (nuevoColaborador) => {
    const id = (colaboradores.length + 1).toString();
    setColaboradores([...colaboradores, { id, ...nuevoColaborador }]);
    setMensaje('Colaborador agregado exitosamente.');
    setTipoMensaje('success');
  };

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    setColaboradores(nuevosColaboradores);
    setMensaje('Colaborador eliminado exitosamente.');
    setTipoMensaje('success');
  };

  const buscarColaborador = (busqueda) => {
    const resultados = colaboradores.filter((colaborador) =>
      Object.values(colaborador).some((valor) =>
        valor.toLowerCase().includes(busqueda.toLowerCase())
      )
    );
    if (resultados.length === 0) {
      setMensaje('No se encontraron resultados.');
      setTipoMensaje('danger');
    }
    setColaboradores(resultados);
  };

  return (
    <div className="container text-center justify-content-center align-items-center">
      <div className="text-center">
        <h1>Lista de Colaboradores</h1>
        <Buscador buscarColaborador={buscarColaborador} />
      </div>
      <div className="row text-center justify-content-center align-items-center ">
      <div className="col-md-6">
        </div>
        <Listado colaboradores={colaboradores} eliminarColaborador={eliminarColaborador} />
        <Formulario agregarColaborador={agregarColaborador} />
        <div className="col-md-6 text-center justify-content-center align-items-center">
          
          <Alert mensaje={mensaje} tipo={tipoMensaje} />
        </div>
      </div>
    </div>
  );
};



export default App;