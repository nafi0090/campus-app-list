import React from 'react'
import LaraTales from './Projects/Games/LaraTales';
import Pirate from './Projects/Games/pirate';
import { Container, Row, Col } from 'react-bootstrap';

const Games = () => {
  return (
    <div className="page-section" id="webProject">
        <Container>
            <div className="text-center">
                <h2 style={{marginBottom:'42px'}}>Our Lastest Game Projects</h2>
            </div>
            <Row>
                <Col xl={4} lg={4} md={6} xs={12} data-aos="zoom-in" data-aos-duration="1000">
                    <Pirate />
                </Col>
                <Col xl={4} lg={4} md={6} xs={12} data-aos="zoom-in" data-aos-duration="1000">
                    <LaraTales />
                </Col>
                <Col xl={4} lg={4} md={6} xs={12} data-aos="zoom-in" data-aos-duration="1000">
                    <LaraTales />
                </Col>
                <Col xl={4} lg={4} md={6} xs={12} data-aos="zoom-in" data-aos-duration="1000">
                    <LaraTales />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Games