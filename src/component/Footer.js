
import "./footer.css";

import React, {useEffect} from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useFormik } from 'formik';

import { Container, Row, Col } from 'react-bootstrap'

import footerlogo from "../images/footer-logo.webp";
import down from "../images/down.webp";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const formik = useFormik({
        initialValues: {
          email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });


    useEffect(()=>{


       // let tl = gsap.timeline({ defaults: {duration: 1, ease: "none"}})
      


    //    gsap.to(".footer-bg", {
    //         top: 0,
    //         duration: 1,
    //         delay: 0.5,
    //         scrollTrigger: {
    //           ease: "none",
    //           trigger: ".footer",
    //           start: "top bottom",
    //           end: '200px',
    //         //   scrub: true
    //         }
    //       });

  
    //       gsap.to("footer .slide-up", {
    //         opacity: 1,
    //         translateY:0,
    //         duration: 1,
    //         delay: 2,
    //         scrollTrigger: {
    //           ease: "none",
    //           trigger: ".footer",
    //           start: "top bottom",
    //           end: '200px',
    //         //   scrub: true
    //         }
    //       });
          


    //       gsap.to("footer .fill-width", {
    //         width: '100%',
    //         duration: 1,
    //         delay: 3,
    //         scrollTrigger: {
    //           ease: "none",
    //           trigger: ".footer",
    //           start: "top bottom",
    //           end: 'top center',
    //         //   scrub: true
    //         }
    //       });

    //       gsap.to("footer .slide-up2", {
    //         opacity: 1,
    //         translateY:0,
    //         duration: 1,
    //         delay: 3.5,
    //         scrollTrigger: {
    //           ease: "none",
    //           trigger: ".footer",
    //           start: "top bottom",
    //           end: 'top top',
    //         //   scrub: true
    //         }
    //       });

    //       gsap.to("footer .slide-up3", {
    //         opacity: 1,
    //         translateY:0,
    //         duration: 1,
    //         delay: 4,
    //         scrollTrigger: {
    //           ease: "none",
    //           trigger: ".footer",
    //           start: "top bottom",
    //           end: 'top top',
    //         //   scrub: true
    //         }
    //       });



    //let tl = gsap.timeline({ defaults: {duration: 1, ease: "none"}})
    gsap.to(".footer-bg", {
      ease: "power1.out",
      top: 0,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: ".footer",
          start: "top bottom",
          end: '=+30',
          scrub: 0.5,
          // markers:true
        }
      });


      gsap.to("footer .slide-up", {
        ease: "power1.out",
        opacity: 1,
        translateY:0,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          ease: "none",
          trigger: ".footer .slide-up",
          start: "top 45%",
          end: '+=30',
          scrub: 0.5,
          // markers:true,
        }
      });
      


      gsap.to("footer .fill-width", {
        ease: "power1.out",
        width: '100%',
        duration: 1,
        delay: 2,
        scrollTrigger: {
          trigger: "footer .fill-width",
          start: "top 90%",
          end: '+=10',
          scrub: 0.5,
          // markers:true
        }
      });

      gsap.to("footer .slide-up2", {
        ease: "power1.out",
        opacity: 1,
        translateY:0,
        duration: 1,
        delay: 2.5,
        scrollTrigger: {
          trigger: "footer .slide-up2",
          start: "top 90%",
          end: '+=20',
          scrub: true,
          // markers:true
        }
      });

      gsap.to("footer .slide-up3", {
        ease: "power1.out",
        opacity: 1,
        translateY:0,
        duration: 1,
        // delay: 3,
        delay: 0.2,
        scrollTrigger: {
          ease: "none",
          trigger: "footer .slide-up2",
          start: "top 95%",
          end: '=+20',
          // scrub: .5,
          // markers:true
        }
      });
      
          
          

        
    },[])

  return (
    <footer className='footer'>
        <div className='footer-bg'></div>
        <Container fluid className='px-5'>

            <Row className='pt-10p slide-up '> 
                <Col className=' col-md-8 mx-auto text-center'>
                    <div className='footer-heading'>
                    <h3>WANT  T<span><img src={down} alt='' /></span><br />   KN<span><img src={down} alt='' /></span>W M<span><img style={{transform:"rotate(180deg) translateY(50%)"}} src={down} alt='' /></span>RE?</h3>
                    </div>

                    <button className="contact-btn mt-50 ms-3">CONTACT US</button>
                </Col>

                
            </Row>

           

            <Row className='pt-5p pb-5'> 
                <Col className='col-md-10 mx-auto'>
                <div className="footer-hr fill-width"></div> 

                {/* <Row className="text-center pt-5 align-center">
                <Col className='col-md-12 mx-auto'>
                    <div className='d-flex mx-auto'>
                        <div className="footer-logo-container">
                            <div><img src={footerlogo} alt='' /></div> 
                            <div>
                                    <h4>Stay in the know</h4>
                                    <h5>SIGN UP FOR OUR NEWSLETTER</h5>
                            </div>
                        </div> 
                        <form className='d-flex' style={{gap:"20px"}} onSubmit={formik.handleSubmit}>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className='newsletter-input'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    
                       <button className='contact-btn newsletter-btn ' type="submit">Sign Up</button>
                    </form>

                    </div>
                </Col>
               </Row> */}

               <Row className="text-center pt-5 align-center justify-content-center">
               
                <Col className='col-md-6'>
                     <div className="footer-logo-container slide-up2">
                           <div><img src={footerlogo} alt='' /></div> 
                           <div>
                                <h4>Stay in the know</h4>
                                <h5>SIGN UP FOR OUR NEWSLETTER</h5>
                           </div>
                     </div>   
                </Col>

                               
                <Col className='col-md-6'>
                    <form className='d-flex slide-up2' style={{gap:"20px"}} onSubmit={formik.handleSubmit}>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder='Enter your email'
                            className='newsletter-input'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    
                      <button className='contact-btn newsletter-btn ' type="submit">Sign Up</button>
                    </form>
                </Col>

                </Row>

                {/* <Row className="text-center align-center justify-content-center">
                <Col className='col-md-2'>
                    <img src={footerlogo} alt='' />
                </Col>

                <Col className='md-8 mt-4'>
                    <ul className='footer-menu  align-middle'>        
                        <li><a href='/'>About Us</a></li>
                        <li><a href='/'>Services</a></li>
                        <li><a href='/'>Who we serve</a></li>
                        <li><a href='/'>Knowledge</a></li>
                        <li><a href='/'>Careers</a></li>
                        <li><a href='/'>Contact Us</a></li>
                    </ul>
                </Col>

                
                <Col className='col-md-2  mt-4  text-right'>
                    <ul className='social-icons'>    
                        <li><a aria-label="LinkedIn" href='https://www.linkedin.com/company/preferred-square-analytics'> <img src={linkedin} alt='' /></a></li>
                        <li><a aria-label="Instagram" href='https://www.instagram.com/preferred_square_analytics/?utm_medium=copy_link'> <img src={instagram} alt='' /></a></li>
                    </ul>
                </Col>

                </Row> */}

                <Row className='pt-5 pb-3'>
                    <Col>
                        <ul className='footer-menu slide-up3 align-middle'>        
                            <li><a href='/'>ABOUT</a></li>
                            <li><a href='/'>APPLY TO JOIN</a></li>
                            <li><a href='/'>TERMS & CONDITIONS</a></li>
                            <li><a href='/'>PRIVACY POLICY</a></li>
                            <li><a href='/'>LINKEDIN</a></li>
                        </ul>
                    </Col>
                </Row>

                {/* <Row>
                    <Col className='col-md-5'><hr className='text-right hr-first'   width="90%" align="right" /></Col>
                    <Col className='col-md-2'><p className='copytight-text'>Copyrighted © 2023</p></Col>
                    <Col className='col-md-5'><hr width="90%" align="right" style={{textAlign:"right"}} /></Col>
                </Row> */}

                
                </Col>
            </Row>

          
            
        </Container>
    </footer>
  )
}

export default Footer
