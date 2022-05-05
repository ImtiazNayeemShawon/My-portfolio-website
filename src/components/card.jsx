import React from "react";
import logo from "../assets/images/logo.png"
import '../styles/main.css'
import { Link } from "react-router-dom";
export default function card() {
    return (
     
       <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <div className="logo"> 
                  <img id="logo" src={logo} />
                  </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
            </button>
            
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Achive">Achivemnet</a>
                </li>
                <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Skill">Skills</a>
        </li>
                <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="About">About</a>
        </li>
               
        
      </ul>
    </div>
  </div>
    </nav> 
       </div>
   
     
      
        
       



               
           
    );
}