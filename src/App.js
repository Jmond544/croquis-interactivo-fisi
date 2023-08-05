import './App.css';
import Model3d from './components/Model3d';
import imageFisi from './img/logo_FISI.png'
import imageUNMSM from './img/logo_unmsm.png'
import { AiFillGithub } from "react-icons/ai";
function App() {
  return (
    <div className='container-general'>
      <div className='header'>
        <a href="https://sistemas.unmsm.edu.pe/site/index.php" target="_blank" rel="noopener noreferrer">
          <img src= {imageFisi} alt="Descripción de la imagen" />
        </a>
        <h1>FISI-Croquis</h1>
        <a href="https://unmsm.edu.pe/" target="_blank" rel="noopener noreferrer">
          <img src= {imageUNMSM} alt="Descripción de la imagen" />
        </a>
      </div>
      <Model3d />
      <div className='footer'>
      <a href="https://github.com/Jmond544/croquis-interactivo-fisi" target="_blank" rel="noopener noreferrer">
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
}

export default App;
