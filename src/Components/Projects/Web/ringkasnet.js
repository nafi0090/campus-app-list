import React from 'react';
import { Button } from 'react-bootstrap';
import ringkasnet from '../../../assets/img/ringkasnet.png';

const Ringkasnet = () => {
  return (
    <div className="project-items">
        <img className="img-fluid project-img" src={ringkasnet} alt="Ringkasnet-project"/>
        <a href="http://vokasijaya.freecluster.eu/" className="projectLink">
            <h4>Ringkas-Net</h4>
        </a>
        <div className="box-body">
            <Button href="http://vokasijaya.freecluster.eu/" variant="custom" className="btn btn-app">Get App</Button>
        </div> 
    </div>
  )
}

export default Ringkasnet