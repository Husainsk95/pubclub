import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './aboutheader.css'
import headleft from '../images/head-left.webp';
import headright from '../images/head-right.webp';
// import headleft from '../images/head-left.webp';
// import headright from '../images/head-right.webp';

//import Menu from './Menu'

const Aboutheader = () => {
  return (
    <>
      <section className='about-header'>
        {/* <Container fluid>
          <Row>
            <Menu />
          </Row>
        </Container> */}
        <Container fluid className='about-subheader'>
         <Row>
         {/* <img src={headleft} alt='left-capsule' /> */}
         <div className='text-slide'>
                <div className='mt-4 pt-2'><img src={headleft} alt='left-capsule' /></div>  
                   <h3 className='text-slide-box about-heading'>ABOUT PUBCLUB</h3>
                <div className='mt-4 pt-2'><img src={headright} alt='right-capsule' /></div>   
                </div>
          {/* <h1 className='about-heading'>ABOUT PUBCLUB</h1> */}
          {/* <img src={headright} alt='right-capsule' /> */}
          <p className='about-para'>PubClub is bringing the next gen of publishers and content creators,</p>
          <p className='about-para2'> empowering them to be at the forefront in emerging markets.</p>
         </Row>
        </Container>
      </section>
    </>
  )
}

export default Aboutheader