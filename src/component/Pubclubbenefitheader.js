import React from 'react'
import './pubclubbenefitheader.css'
import { Col, Container, Row } from 'react-bootstrap'
//import Menu from './Menu'
import img1 from '../images/pubclubbenefit.webp'
import headleft from '../images/head-left.webp';
import headright from '../images/head-right.webp';

const Pubclubbenefitheader = () => {
  return (
    <>
      <section className='pubclub-benefit pb-5'>
        <Container fluid className='pb-5'>
          {/* <Menu/> */}

          <Row>
            <Col className='col-md-3'></Col>
            <Col className='col-md-1'>
              <div className='sideimg'><img src={headleft} alt='left-capsule' /></div>
            </Col>
            <Col className='col-md-4'>
              <div className='text-center imagediv'>

                <img src={img1} alt='Pubclub Benefit' className='pubclub-image' />

              </div>
            </Col>
            <Col className='col-md-1'>
              <div className='sideimg2'><img src={headright} alt='right-capsule' /></div>
            </Col>

            <Col className='col-md-3'></Col>
          </Row>

          <h1 className='benefit-heading'>What is Pubclub? It’s benefits</h1>
          <h1 className='benefit-heading'>  & all that you need to know!  </h1>
          <p className='pubclub-benefit-para'>by Pankil Mehta   -    Apr 12, 2023</p>

        </Container>
      </section>
    </>
  )
}

export default Pubclubbenefitheader