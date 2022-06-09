import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/home'
import About from './components/about';
import Cards from './components/card';
import Achive from './components/achive';
import Skill from './components/skill';
import './styles/main.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "animate.css"
import Button from '@mui/material/Button';
import './styles/nav.css';

import "@fortawesome/free-regular-svg-icons"
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className='main-div'> 
      <Cards/>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/achive" element={<Achive/>} />
      <Route path="/skill" element={<Skill/>} />
    </Routes>
  </BrowserRouter>
  

      </div>
  );
}

export default App;
