import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import './App.css';
//import Tarea from './componentes/Tarea';
import TareaFormulario from './componentes/TareaFormulario';

function App() {
  return (
    <div className='aplicacion-tareas-contenedor-principal'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo' 
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <TareaFormulario/>
      </div>
    </div>
  );
}

export default App;
