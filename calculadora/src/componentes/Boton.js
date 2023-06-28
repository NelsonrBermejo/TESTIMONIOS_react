import react from 'react';

/**
 * 
 * @param {*} recibe el valor de <Boton>1</Boton> 
 * @returns el jsx con el valor 1
 */
function Boton(props) {
    return (
			<div>
				{props.children}
			</div>
    );
}

export default Boton;