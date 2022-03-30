import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import Ringkasnet from './Projects/Mobile/Ringkasnet';


const MobileApp = () => {
  return (
    <div className="page-section" id="webProject">
        <Container>
            <div className="text-center">
                <h2 style={{marginBottom:'42px'}}>Our Lastest Mobile App Projects</h2>
            </div>
            <Row>
                <Col xl={4} lg={4} md={6} xs={12} data-aos="zoom-in" data-aos-duration="1000">
                    <Ringkasnet />
                </Col>
                <Col xl={4} lg={4} md={6} xs={12} data-aos="zoom-in" data-aos-duration="1000">
                    <Ringkasnet />
                </Col>
                <Col xl={4} lg={4} md={6} xs={12} data-aos="zoom-in" data-aos-duration="1000">
                    <Ringkasnet />
                </Col>
                <Col xl={4} lg={4} md={6} xs={12} data-aos="zoom-in" data-aos-duration="1000">
                    <Ringkasnet />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default MobileApp