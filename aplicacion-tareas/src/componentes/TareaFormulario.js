//import React from 'react';
import React, {useState} from 'react';
import '../hojas-de-estilo/TareaFormulario.css'

//Ingreso de tarea
function TareaFormulario(props)	{
	
	const [input, setInput] = useState('');

	const manejarCambio = e => {
		console.log('Escribiendo...');
	}

	const manejarEnvio = e => {
		const tareaNueva = {
			id: '34545',
			texto: 'Hola'
		}
	}


	return	(
		<form className='tarea-formulario'>
			<input
				className='tarea-input'
				type='text'
				placeholder='Escribir texto'
				name='texto'
				onChange={manejarCambio}
			/>
			<button className='tarea-boton'>
				Agregar Tarea
			</button>
		</form>
	);
}

export default TareaFormulario;