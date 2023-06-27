import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

/**
 * inicialmente número de clics vale Cero se lo paso en useState
 */
const [numClics, setNumClics] = useState(0);

/**
 * asigna nuevo valor a numClics
 * @setNumClics(numClics +1) numero de Clics más uno;
 */
 const manejarClic = () => {
  //console.log('Clic');
  setNumClics(numClics +1);
};

 const reiniciarContador = () => {
  //console.log('Reiniciar Contador');
  setNumClics(0);
};



  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal-contador-botones'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic' 
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>

      </div>
    </div>
  );
}

export default App;
