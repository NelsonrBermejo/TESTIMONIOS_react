import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import '../hojas-de-estilo/ListaDeTareas.css';
import Tarea from './Tarea';

function ListaDeTareas()	{
	/**arreglo de tareas */
	const [tareas, setTareas] = useState ([]);

	const agregarTarea = tarea => {
		//console.log("Tarea Agregada a mi lista de Tareas");
		console.log(tarea);
		//verifico que mi texto de tareas no este vavio con trim()
		if (tarea.texto.trim())	{
			//elimino espacios vacios atras y adelante 
			tarea.texto = tarea.texto.trim();

			//agrego tarea al principio del arreglo
			const tareasActualizadas = [tarea, ...tareas];
			//actualizo el estado de mis tareas
			setTareas(tareasActualizadas);
		}
	}

	const eliminarTarea = id => {
		const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
		setTareas(tareasActualizadas);
	}

	const completarTarea = id => {
		const tareasActualizadas = tareas.map(tarea => {
			if (tarea.id === id){
				//invierto el estado de mi tarea 7
				tarea.completada = !tarea.completada;
			}
			return tarea;
		});
		setTareas(tareasActualizadas);
	}

	return (
		<>
			<TareaFormulario onSubmit={agregarTarea} />
			<div className='tareas-lista-contenedor'>
				{
					tareas.map((tarea) =>
						<Tarea
							key={tarea.id}
							id={tarea.id}
							texto={tarea.texto}
							completada={tarea.completada}
							completarTarea={completarTarea}
							eliminarTarea={eliminarTarea} />
					)
				}
			</div>
		</>
	);
}

export default ListaDeTareas;