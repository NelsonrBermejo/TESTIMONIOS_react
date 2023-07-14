//import React from 'react';
import React, {useState} from 'react';
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

//Ingreso de tarea
function TareaFormulario(props)	{
	
	const [input, setInput] = useState('');

	const manejarCambio = e => {
		//console.log('Escribiendo...');
		setInput(e.target.value);
		//console.log(e.target.value);
	}

	const manejarEnvio = e => {
		e.preventDefault();
		console.log("Enviando formulario...");

		const tareaNueva = {
			//id: '34545',
			id: uuidv4(),
			//texto: 'Hola'
			texto: input,
			completada: false
		}

		//console.log(tareaNueva);
		/* OCURRE CUANDO EL FORMULARIO INTENTE ENVIARSE */
		props.onSubmit(tareaNueva)
	}


	return	(
		<form 
			className='tarea-formulario'
			onSubmit={manejarEnvio}>
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