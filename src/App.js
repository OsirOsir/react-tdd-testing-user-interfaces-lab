import image from './Avater.jpg';
import './App.css';
// import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Hi, I'm Philip</h1>
      <div>
        <img className='image' src={image} alt="Philip's avatar"/>
        <div>
          <h2>About Me</h2>
          <p>"But I must explain to you how all this mistaken idea of 
            denouncing pleasure <br />and praising pain was born and I will 
            give you a complete account of the system, and expound <br /> the 
            actual teachings of the great explorer of the truth, the 
            master-builder of human happiness. <br />No one rejects, dislikes, 
            or avoids pleasure itself, <br />because it is pleasure, but 
            because those who do not know how <br />to pursue pleasure
             rationally encounter consequences that are extremely"</p>
          <a className='a' href="https://github.com/OsirOsir" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/osir-philip-322b30b7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export default App;