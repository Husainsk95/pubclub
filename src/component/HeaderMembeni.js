import React from 'react'
import './headermembeni.css';
import Container from 'react-bootstrap/Container';
import headleft from '../images/head-left.webp';
import headright from '../images/head-right.webp';

const HeaderMembeni = () => {
  return (

    <header className='header-membeni'  >

      <Container fluid className='hero px-5'>
        {/* <Menu /> */}

        <div className='hero-content'>

          <div className='hero-text'>
            <div className='text-slider mobile-view'>
              <img src={headleft} className='capsuleleft' alt='left-capsule' />
              <div className='text-slide-box'><h3 className="text-slide">MEMBER BENEFITS </h3></div>
              <img src={headright} className='capsuleright' alt='right-capsule' />
            </div>
            <p className='mobile-view-para'>Inspiring xx+ publishers and content creators to lead<br /> the Ad Tech landscape with nuanced approaches</p>
          </div>
        </div>

      </Container>

    </header>

  )
}

export default HeaderMembeni