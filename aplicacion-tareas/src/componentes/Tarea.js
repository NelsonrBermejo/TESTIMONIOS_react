import React from "react";
import '../hojas-de-estilo/Tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

//completar tarea se agrego como prop en el componente de la tarea y se asigna el estilo
function Tarea ({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={ completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
			<div
		 		className='tarea-texto'
		 		onClick={() => completarTarea(id)}>
				{texto}
			</div>
			<div 
				className='tarea-contenedor-iconos'
				onClick={ () => eliminarTarea(id) }>
			  <AiOutlineCloseCircle className='tarea-icono' />
		  </div>
    </div>

    );
}

export default Tarea;