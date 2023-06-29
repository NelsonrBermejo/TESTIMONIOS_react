import React from "react";
import '../stylesheets/Pantalla.css';

/**
 * @FuncionFlecha se reemplaza el function Pantalla ({})  por const Pantalla = ()
 * @param {*} Input es el valor ingresado por el usuario 
 * @returns muestro en pantalla el valor ingresado por el usuario
 */
const Pantalla = ({input}) => (
  <div className='input'>
    {input}
  </div>
);

export default Pantalla;