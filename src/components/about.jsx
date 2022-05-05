import React from "react";
import "../styles/main.css";
import vactor from '../assets/images/mykp.gif'
import insta from "../assets/icons/insta.gif"
import fb from "../assets/icons/fb.gif"
import git from "../assets/icons/git.gif"
import tw from "../assets/icons/tw.gif"
import ld from '../assets/icons/ld.gif'
import robot from '../assets/icons/robot.gif'
import Typography from '@mui/material/Typography';
export default function about() {
    return (
        <div className="main">
            <h1>introducing my self</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 animate__animated  animate__backInLeft">
                    <h4>   <Typography variant="button" display="block" gutterBottom>
         First, take the salute from me! My name is Imtiaz Naeem Shaon. I am a student in class 10. My home is Chittagong, Comilla! I've been programming since last August 2021! In the meantime, I received the Creative Junior Award from International children's peace prize winner Sadat Rahman hand in November 2021. I also work in cyberbullying against cyberbullying. And I work at some Youth Development Organaistaion! //////is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Typography></h4>
                    </div>
                   
                    <div className="col-md-6  animate__animated animate__backInRight">
                    < div className="image"> 
                            <img src={vactor} />
                            </div>
                        </div>
                        
                </div>
            </div>
            <div className="container">
                  <div className="row"> 
           
                    <div className="col-md-6">
            <div className="text"> 
                            <img src={ robot }/>
                      </div>
                    </div>
                    <div className="col-md-6">
                        <div className="follow"> 
                            <h2>Follow me </h2>
                            <img src={ git}/> <a href="" >Github</a> <br/>
                            <img src={ fb}/> <a href="" >Facebook</a><br/>
                            <img src={ insta}/><a href="" >Instagram</a> <br/>
                            <img src={ tw}/><a href="" >Twitter</a> <br/>
                            <img src={ ld}/><a href="" >LinkedIn</a> 
                        </div>
                    </div>
                    </div>  
            </div>
      </div>  
    );
}