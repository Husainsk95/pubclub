import React from 'react'
import './headermember.css';
import Container from 'react-bootstrap/Container';
import headleft from '../images/head-left.webp';
import headright from '../images/head-right.webp';

const HeaderMember = () => {
  return (
    <header className='header-member'  > 

    <Container fluid className='hero px-5'>
      {/* <Menu /> */}
        
        <div className='hero-content'>
            
            <div className='hero-text'>
                <div className='text-slider'>
                  <img src={headleft} alt='left-capsule' />
                   <div className='text-slide-box'><h3 className="text-slide">MEMBERS </h3></div>
                   <img src={headright} alt='right-capsule' />
                </div>
                <p>Inspiring xx+ publishers and content creators to lead<br /> the Ad Tech landscape with nuanced approaches</p>
            </div>
        </div>
    
     </Container>
 
    </header>
  )
}

export default HeaderMember