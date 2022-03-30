import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <div className="page-section" id="page-header">
        <Container>
            <div className="text-center">
                <h1 className="fadeInDown" id="page-title">
                    <span style={{fontSize:'0.65em'}} >Welcome To </span> 
                    <br /> The Gallery Of Our Works
                    <span style={{fontSize:'0.55em', fontWeight: 'lighter', fontColor: '#E1E1E1'}}> <br /> &mdash; UNESA Applied Informatics Engineering Students &mdash;</span>
                </h1>
                <div className="fadeInUp">
                    <Link to='webProject' spy={true} smooth={true} duration={50}>
                        <Button variant="custom" className="btn btn-explore">Explore</Button>
                    </Link>
                </div>
            </div>

        </Container>
    </div>
  )
}

export default Header