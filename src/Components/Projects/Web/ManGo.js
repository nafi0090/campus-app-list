import React from 'react';
import imgMango from '../../../assets/img/mango.png';
import { Button } from 'react-bootstrap';


const ManGo = () => {
  return (
    <div className="project-items">
        <img className="img-fluid project-img" src={imgMango} alt="ManGo-project"/>
        <a href="https://man-gov2.000webhostapp.com/" className="projectLink">
            <h4>ManGo</h4>
        </a>
        <div className="box-body">
            <Button href="https://github.com/AriqF/man-go" variant="custom" className="btn btn-app">Get App</Button>
        </div> 
    </div>
  )
}

export default ManGo