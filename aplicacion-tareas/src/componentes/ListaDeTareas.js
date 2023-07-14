import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import '../hojas-de-estilo/ListaDeTareas.css';
import Tarea from './Tarea';

function ListaDeTareas()	{
	/**arreglo de tareas */
	const [tareas, setTareas] = useState ([]);

	const agregarTarea = tarea => {
		console.log("Tarea Agregada");
		console.log(tarea);
	}

	return (
		<>
			<TareaFormulario onSubmit={agregarTarea}/>
			<div className='tareas-lista-contenedor'>
				{
					tareas.map((tarea) =>
						<Tarea
							texto={tarea.texto}
							completada={tarea.completada} />
					)
				}
			</div>
		</>
	);
}

export default ListaDeTareas;