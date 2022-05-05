import React from "react";
import sd from '../assets/images/snfd.jpg'
import nah from '../assets/images/nah.jpg'
import nah2 from '../assets/images/na2.jpg'
import nah3 from '../assets/images/nah3.jpg'
import usa from '../assets/images/usa.jpg'
import AI from '../assets/images/ai.jpg'
import AOS from '../assets/images/aos.jpg'
import Award from '../assets/images/aw.jpg'
import bpas from '../assets/images/bpass.jpg'
import cj from '../assets/images/cj.jpg'
export default function achive() {
    return (
        <>
            <div class="words word-1">
  <span>A</span>
  <span>C</span>
  <span>H</span>
  <span>I</span>
  <span>V</span>
  <span>E</span>
                <span>M</span>
                <span>E</span>
                <span>N</span>
                <span>T</span>
                <span>S</span>
</div>
        <div className="achivments">
            <div className="container">
                    <div className="row">
                      
                        <div className="col-md-6">
                            <img className="achiv animate__animated animate__slideInLeft"  src={sd} />
                    </div>
                    <div className="col-md-6">
                        <img className="achiv animate__animated animate__slideInRight"  src={nah} />
                    </div>
                    <div className="col-md-6">
                        <img className="achiv animate__animated animate__slideInLeft" src={nah2} />
                    </div>
                    <div className="col-md-6">
                    <img className="achiv animate__animated animate__slideInRight" src={nah3} />
                        </div>
                        <div className="col-md-6">
                    <img className="achiv animate__animated animate__slideInLeft" src={usa} />
                        </div>
                        <div className="col-md-6">
                    <img className="achiv animate__animated animate__slideInRight" src={AI} />
                        </div>
                        <div className="col-md-6">
                    <img className="achiv animate__animated animate__slideInLeft" src={AOS} />
                        </div>
                        <div className="col-md-6">
                    <img className="achiv animate__animated animate__slideInRight" src={bpas} />
                        </div>
                        <div className="col-md-6">
                    <img className="achiv animate__animated animate__slideInLeft" src={Award} />
                        </div>
                        <div className="col-md-6">
                    <img className="achiv animate__animated animate__slideInRight" src={cj} />
                        </div>
                </div>
            </div>
            </div>  
            </>
    );
}