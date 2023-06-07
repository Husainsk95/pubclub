import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';

import down from '../images/down.webp';
import vision from '../images/vision.webp';


import "./vision.css";

export const Vision = () => {
  return (
    
<section className='vision-section' >
        <Container fluid className='px-5p'>
            <Row className='desktop-flex'>

                <Col className='col-md-6 left-side'>
                    <div className="vision">
                        <h3>VISI<span><img src={down} alt='' /></span>N</h3>
                    </div>    
                    <p>
                        To identify tech-led growth opportunities and initiatives that are shaping the future 
                        of Ad Tech in emerging markets.
                    </p>
                    
                 </Col>

                <Col className='col-md-6 right-side'>
                    <div className='content-box'>
                        <img src={vision} alt='' />                
                    </div> 
                </Col>
       
            </Row>


            <Row className='mobile-flex'>

                <Col className='col left-side text-center'>
                    <div className="vision">
                        <h3>VISI<span><img src={down} alt='' /></span>N</h3>
                    </div>    
                    <div className='content-box'>
                        <img src={vision} alt='' />                
                    </div>
                    <p>
                        To identify tech-led growth opportunities and initiatives that are shaping the future 
                        of Ad Tech in emerging markets.
                    </p>
                    
                </Col>

            </Row>
        </Container>

</section>

  )
}

export default Vision;