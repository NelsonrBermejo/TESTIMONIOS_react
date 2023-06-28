import './App.css';
import freeCodeCampImagen from './imagenes/freecodecamp-logo.png';

function App() {
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampImagen}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp'
        />

      </div>
    </div>
  );
}

export default App;
