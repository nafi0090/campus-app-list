import React from 'react';
import { Button } from 'react-bootstrap';
import pirate from '../../../assets/img/pirate.png';

const Pirate = () => {
  return (
    <div className="project-items">
        <img className="img-fluid project-img" src={pirate} alt="pirate-project"/>
        <a href="https://muhammad-alif-h.itch.io/bajak-laut-dan-harta-karun-yang-hilang" className="projectLink">
            <h4>Pirate</h4>
        </a>
        <div className="box-body">
            <Button href="https://github.com/muhammadalifh/bajak-laut-dan-harta-karun-yang-hilang" variant="custom" className="btn btn-app">Download Game</Button>
        </div> 
    </div>
  )
}

export default Pirate