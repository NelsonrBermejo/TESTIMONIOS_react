import React from "react";
import '../stylesheets/Contador.css'

/**
 * 
 * @param numClics el valore de numero de clics 
 * @returns muestra el valor actual de numClics
 */
function Contador({	numClics })	{
	return (
		<div className='contador'>
			{numClics}
		</div>
	);
}

export default Contador;