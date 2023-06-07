import React from 'react'
import './exclusive.css'
import { Row, Col, Container } from 'react-bootstrap';

import img1 from '../images/numone.webp';
import img2 from '../images/numtwo.webp';
import img3 from '../images/numthree.webp';
import img4 from '../images/numfour.webp';
import img5 from '../images/numfive.webp';

const Exclusive = () => {
  return (
   <>
   <section className='exclusivebenefit'>
     {/* EXCLUSIVE CLUB BENEFITS Container starts here */}
     <Container fluid className='px-5p mt-5'>
                    <h3 className="heading">EXCLUSIVE CLUB BENEFITS</h3>
                    <Row className='mt-5 pt-5'>
                        <Col className='col-md-6'>
                            <Container className='exclusiveclub'>
                                <Row>
                                    <Col className='col-md-3'>
                                        <img src={img1} alt='' />
                                    </Col>
                                    <Col className='col-md-9 para-margin'>
                                        <p className='numheading'>Opportunity to establish</p>
                                        <p className='exclusive-para'>a strong personal reputation through PR initiatives.</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col className='col-md-6'>
                            <Container className='exclusiveclub'>
                                <Row>
                                    <Col className='col-md-3'>
                                        <img src={img2} alt='' />
                                    </Col>
                                    <Col className='col-md-9 para-margin'>
                                        <p className='numheading'>Publish opinion articles </p>
                                        <p className='exclusive-para'>under your byline for regional publications. </p>
                                    </Col>
                                </Row>
                            </Container>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Container className='exclusiveclub'>
                                <Row>
                                    <Col className='col-md-3'>
                                        <img src={img3} alt='' />
                                    </Col>
                                    <Col className='col-md-9 para-margin'>
                                        <p className='numheading'>Showcase insights</p>
                                        <p className='exclusive-para'>about the ad tech market through video series.</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col>
                            <Container className='exclusiveclub'>
                                <Row>
                                    <Col className='col-md-3'>
                                        <img src={img4} alt='' />
                                    </Col>
                                    <Col className='col-md-9 para-margin'>
                                        <p className='numheading'>Connect with industry associations</p>
                                        <p className='exclusive-para'>over webinars for insightful conversations.</p>
                                    </Col>
                                </Row>
                            </Container>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Container className='exclusiveclub'>
                                <Row>
                                    <Col className='col-md-3'>
                                        <img src={img5} alt='' />
                                    </Col>
                                    <Col className='col-md-9 para-margin'>
                                        <p className='numheading'>Grow public recognition</p>
                                        <p className='exclusive-para'>by participating in prestigious award ceremonies</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col>
                            {/* <Container className='exclusiveclub'>
                                <Row>
                                    <Col className='col-md-3'>
                                        <img src={img1} alt='' />
                                    </Col>
                                    <Col className='col-md-9 para-margin'>
                                        <p className='numheading'>Opportunity to establish</p>
                                        <p className='exclusive-para'>a strong personal reputation through PR initiatives.</p>
                                    </Col>
                                </Row>
                            </Container> */}

                        </Col>
                    </Row>
                </Container>
   </section>
   </>
  )
}

export default Exclusive