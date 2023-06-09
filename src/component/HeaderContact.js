import React from 'react'
import "./headercontact.css";
import Container from 'react-bootstrap/Container';
import down from '../images/down.webp';
// import Menu from './Menu';



const HeaderContact = () => {


  return (
    <header className='contact-header pb-5'> 

    <Container fluid className='hero px-5'>
      {/* <Menu /> */}
        
        {/* hero */}

        
        <div className='hero-content'>
            <div></div>
            <div className='hero-text'>
                <h2>BEC<span><img style={{transform:"rotate(180deg) translateY(50%)"}} src={down} alt='' /></span>ME A MEMBER & UNL<span><img src={down} alt='' /></span>CK <br />
                 THE  EXCLUSIVE  OFFERINGS</h2>
                 <p className='pt-5 pb-5'>Feed your details below and the PubClub team<br /> will get in touch with you within 48hrs.</p>   
            </div>

            <div className='w-100 text-center'>
                <a href="#contactForm">
                    <svg width="17" height="49" viewBox="0 0 17 49" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M0 40.7161L1.25584 39.4453L7.6035 45.6309L7.6035 0L9.3965 0L9.3965 45.6309L15.7442 39.4453L17 40.7161L8.50074 49L0 40.7161Z" fill="white"/>
                    </svg>
                </a>   
            </div>  
        </div>


    
    </Container>


    </header>
  )
}

export default HeaderContact
