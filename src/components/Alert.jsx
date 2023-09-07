import React from "react";

const Alert = ({ mensaje, tipo }) => {
  if (!mensaje) return null;

  return (
    <div className={`alert alert-${tipo}`} alerta col-12 col-lg-4>
      {mensaje}
    </div>
  );
};

export default Alert;
