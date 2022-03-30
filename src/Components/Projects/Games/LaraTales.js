import React from 'react';
import { Button } from 'react-bootstrap';
import laraTalesImg from '../../../assets/img/lara-tales.png';

const LaraTales = () => {
  return (
    <div className="project-items">
        <img className="img-fluid project-img" src={laraTalesImg} alt="laratales-project"/>
        <a href="https://drive.google.com/file/d/1poOfYX7DmdFn_LYqgseGOMMWgYnp6rlj/view?usp=sharing" className="projectLink">
            <h4>Lara Tales</h4>
        </a>
        <div className="box-body">
            <Button href="https://drive.google.com/file/d/1poOfYX7DmdFn_LYqgseGOMMWgYnp6rlj/view?usp=sharing" variant="custom" className="btn btn-app">Download Game</Button>
        </div> 
    </div>
  )
}

export default LaraTales