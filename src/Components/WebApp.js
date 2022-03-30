import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ManGo from './Projects/Web/ManGo';

const WebApp = () => {
  return (
    <div className="page-section" id="webProject">
        <Container>
            <div className="text-center">
                <h2 style={{marginBottom:'42px'}}>Our Lastest Web Projects</h2>
            </div>
            <Row>
                <Col  xl={4} lg={4} md={6} xs={12} data-aos="zoom-in" data-aos-duration="1000">
                    <ManGo />
                </Col>
                <Col  xl={4} lg={4} md={6} xs={12} data-aos="zoom-in" data-aos-duration="1000">
                    <ManGo />
                </Col>
                <Col  xl={4} lg={4} md={6} xs={12} data-aos="zoom-in" data-aos-duration="1000">
                    <ManGo />
                </Col>
                <Col  xl={4} lg={4} md={6} xs={12} data-aos="zoom-in" data-aos-duration="1000">
                    <ManGo />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default WebApp