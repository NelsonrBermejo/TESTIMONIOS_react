import './App.css';
import Boton from './componentes/Boton';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';


function App() {
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal-contador'>
        <Boton 
          texto='Clic' 
          esBotonDeClic={true}
           />
           <br></br>
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          />

      </div>
    </div>
  );
}

export default App;
