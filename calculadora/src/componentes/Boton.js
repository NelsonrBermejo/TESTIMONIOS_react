import React from 'react';

/**
 * 
 * @param {*} recibe el valor de <Boton>1</Boton> 
 * @returns el jsx con el valor 1
 */
function Boton(props) {
/**
 * 
 * @param  valor 
 * @returns si no es un número, un punto o si no es un igual lo considero un OPERADOR y devuelve true
 */
	const esOperador = valor => {
		return isNaN(valor) && (valor != '.') && (valor != '=');
	};
   
	return (
			<div 
			className={`boton-contenedor ${ esOperador(props.children) ? 'operador' : '' }`.trimEnd()}>
				{props.children}
			</div>
    );
}

export default Boton;