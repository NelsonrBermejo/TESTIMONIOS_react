import React from 'react';

/**
 *
 * @props Se utiliza unas sintaxis de desestructuración:ej. en lugar de props.texto se utiliza {texto}
 * @param {texto} props un texto en específico 
 * @param {esBotonDeClic} props dependiendo del valor se le asigna una clase u otra. si es V la clase es boron-clic
 * y si es falso será boton-reiniciar   
 * @param {esBotonDeClic} propFuncion para manejar los clics. Con el contador  actualiza el número de clics el cual esta en otro componente
 * @return  retorna un jsx con el elemento y el texto especificado  
 */
function Boton({ texto, esBotonDeClic  }) {
	return (
		<botton 
			className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
			>
			{texto}
		</botton>
	);
}

export default Boton;