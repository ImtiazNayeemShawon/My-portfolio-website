import React from "react";
import logo from '../assets/images/logo.png';
import sld1 from '../assets/images/bg-1.jpeg';
import sld2 from '../assets/images/bg-2.jpeg';
import sld3 from '../assets/images/bg-3.jpeg';
import imti from '../assets/images/imtiaz.jpg';
import ReactDOM from 'react-dom/client';
import Button from '@mui/material/Button';
import '../styles/main.css';

export default function home() {
    return (
      <div className="main-div">
        
        <div className="my-self">
        <div class="container">
  <div class="row">
              <div class="col-md-6">
                <h1 className="animate__animated animate__backInDown">
                  Imtiaz Nayeem <br />Shawon
                </h1> 
                <h4 className="animate__animated animate__backInLeft">
                  Web desinger
                </h4>
    
                <h5>. Front-end Developer  . Programmer</h5>
                <Button  id="resume" variant="contained">Get Resume</Button>
            
    </div>
              <div class="col-md-6 animate__animated animate__rotateInDownLeft">
                <img className="imti" src={imti}/>
    </div>
 
  </div>
</div>
        </div>
         {/* 
        <div className="slider">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
                <img className="slide" src={sld1}/>
    </div>
    <div class="carousel-item">
    <img className="slide" src={sld2}/>
    </div>
    <div class="carousel-item">
    <img className="slide" src={sld3}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>      */}

   
        <div>
          
</div>

 
            </div>
    );
  }