import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import './App.css';

function App() {
  return (
    <div className='aplicacion-tareas-contenedor-principal'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo' 
        />
      </div>
    </div>
  );
}

export default App;
