import logo from './logo.svg';
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
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';

import "@fortawesome/free-regular-svg-icons"
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className='main-div'> 
      <Cards/>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
          <Route path="Achive" element={<Achive />} />
          <Route path="About" element={<About />} />
          <Route path="Skill" element={<Skill />} />
          
    </Routes>
  </BrowserRouter>

      </div>
  );
}

export default App;
