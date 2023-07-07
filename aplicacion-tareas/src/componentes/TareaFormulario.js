import React from "react";
import '../hojas-de-estilo/TareaFormulario.css'

//Ingreso de tarea
function TareaFormulario(props)	{
	return	(
		<form className='tarea-formulario'>
			<input
				className='tarea-input'
				type='text'
				placeholder='Escribir texto'
				name='texto'
			/>
			<button className='tarea-boton'>
				Agregar Tarea
			</button>
		</form>
	);
}

export default TareaFormulario;