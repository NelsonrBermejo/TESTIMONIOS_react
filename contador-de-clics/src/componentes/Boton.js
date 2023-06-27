import React from 'react';
import '../stylesheets/Boton.css';

/**
 *
 * @props Se utiliza unas sintaxis de desestructuración:ej. en lugar de props.texto se utiliza {texto}
 * @param {texto} props un texto en específico 
 * @param {esBotonDeClic} props dependiendo del valor se le asigna una clase u otra. si es V la clase es boron-clic
 * y si es falso será boton-reiniciar   
 * @param {esBotonDeClic} propFuncion llama a la funcion manejarClic o reiniciarClic.
 * @return  retorna un jsx con el elemento y el texto especificado  
 */
function Boton({ texto, esBotonDeClic, manejarClic }) {
	return (
		<button 
			className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
			onClick={manejarClic}>
			{texto}
		</button>
	);
}

export default Boton;