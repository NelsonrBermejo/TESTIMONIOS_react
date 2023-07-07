import React, {	useState } from 'react';
import React from "react";
import TareaFormulario from "./TareaFormulario";
import '../hojas-de-estilo/ListaDeTareas.css';

function ListaDeTareas()	{
	/**arreglo de tareas */
	const [tareas, setTareas] = useState ([]);
	return (
		<>
			<TareaFormulario/>
			<div className='tareas-lista-contenedor'>
				ListaDeTareas
			</div>
		</>
	);
}

export default ListaDeTareas;