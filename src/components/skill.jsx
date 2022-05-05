import  React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Slider } from '@mui/material';

export default function Skill() {
  return (
    
    <>
      <div className='skill-info'>
        <h1 className='animate__animated animate__backInDown'>
          Skills & Experience 
        </h1>
        <h4 className='animate__animated animate__lightSpeedInRight'>
          the scope of my work is large part of the front end:Responsive wed desing single page application based on CSS,HTML,Javascript,react.js,Psd to html
        </h4>
      </div>
          <div className='Container'>
              <div className='row'>
                  <div className='col-md-4 animate__animated animate__flipInX'>
                      <Card id='card' sx={{ maxWidth: 450 }} >
      <CardActionArea>
        <CardMedia/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
 
                    HTML-5 

          </Typography>
                  <Typography variant="body2" color="text.secondary">
                  <Slider
  aria-label="Temperature"
  defaultValue={80}
  valueLabelDisplay="auto"
  step={10}
  marks
  min={10}
  max={100}
                    />
                    HTML is markup language its called skeloten of web 
           I was Learn HTML from W3 School and others website I was make so many HTML tamplate 
          </Typography>
        </CardContent>
      </CardActionArea>
                      </Card></div>
                  

{/*Html div */}
                      <div className='col-md-4 animate__animated animate__flipInX'>
                      <Card sx={{ maxWidth: 450 }}>
      <CardActionArea>
        <CardMedia/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            CSS-3
          </Typography>
                  <Typography variant="body2" color="text.secondary">
                  <Slider
  aria-label="Temperature"
  defaultValue={70}
  valueLabelDisplay="auto"
  step={10}
  marks
  min={10}
  max={100}
                    />
                    CSS use for styling and create animation on website 
       I was Learn CSS animation, grid, and so many propartise. I make many animation and tamplate by CSS-3    
          </Typography>
        </CardContent>
      </CardActionArea>
                      </Card></div>
                  

                      <div className='col-md-4 animate__animated animate__flipInX'>
                      <Card sx={{ maxWidth: 450 }}>
      <CardActionArea>
        <CardMedia/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
                    Javascript
                    
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <Slider
  aria-label="Temperature"
  defaultValue={40}
  valueLabelDisplay="auto"
  step={10}
  marks
  min={10}
  max={100}
                    />
                    Javascript is beautiful language Its called mother languge of website. I was solve many problems by javascript. I also make some  static website by javascript 
          </Typography>
        </CardContent>
      </CardActionArea>
                      </Card></div>
                  
                      
             
        </div>
        
      </div>

      
      



      
      </>
  );
}
