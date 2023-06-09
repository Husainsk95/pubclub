import React from 'react'
import './aboutsection.css'
import { Container, Row, Col } from 'react-bootstrap'
import img1 from '../images/mission.webp'
import img2 from '../images/Pubclub-mission-1.webp'
import img3 from '../images/news.webp'
import img4 from '../images/media1.webp'
import img5 from '../images/entertainment.webp'
import img6 from '../images/gaming.webp'
import img7 from '../images/ott.webp'
import img8 from '../images/industry-insights.webp'
import img9 from '../images/local-trends.webp'
import img10 from '../images/creative-initiatives.webp'
import img11 from '../images/research-finding.webp'
import headleft from '../images/head-left.webp';
import headright from '../images/head-right.webp';
import mobileimg from '../images/mobilemissionimg.webp'

import down from '../images/down.webp';
import Carousel from 'react-bootstrap/Carousel';


const Aboutsection = () => {
  return (
    <>
      <section className='about-section mt-5 pt-5'>
        <Container className='mb-5 pb-5 desktopview'>
          <Row>
            <Col className='col-md-6 top-margin'>
              <img src={img1} alt=" " />
              <p className='section-para mt-5'>To offer industry insights through the lens of key decision-makers, while empowering creators to actively uplift the Ad Tech ecosystem.</p>
            </Col>
            <Col className='col-md-6'>
              <img src={img2} alt=" " />
            </Col>
          </Row>
        </Container>
        <Container className='mobileview'>
          <Row className='text-center'>

            <div className="mission">
              <h3>MISSI<span><img src={down} alt='' /></span>N</h3>
            </div>
            <div className='mobileviewimg'>
              <img src={mobileimg} alt=" " />
            </div>

            <p className='section-para mt-5'>To offer industry insights through the lens of key decision-makers, while empowering creators to actively uplift the Ad Tech ecosystem.</p>

            {/* <Col className='col-md-6'>
              <img src={img2} alt=" " />
            </Col> */}
          </Row>
        </Container>
        <Container fluid className='who-we-are-sect mt-5 pt-5 mb-5'>
          <Row>
            <h1 className='about-sub-heading'>WHO WE ARE?</h1>
            <p className='about-sub-para pt-4'>We are a peer-powered network for industry <br />leaders and key decision-makers across</p>
            {/* <p className='about-sub-para2'>leaders and key decision-makers across</p> */}
            <Container className='desktopview'>
              <Row>
                <Col className='col-md-1'></Col>
                <Col className='col-md-10 mt-5 pt-4 pb-5 mb-5'><div className='list'>
                  <ul className='about-list'>
                    <li><img src={img3} alt="" /><h4>news</h4></li>
                    <li><img src={img4} alt=" " /> <h4>media</h4></li>
                    <li><img src={img5} alt=" " /> <h4>entertainment</h4></li>
                    <li className='pt-3'><img src={img6} alt=" " /> <h4>gaming</h4></li>
                    <li className='pt-3'><img src={img7} alt=" " /> <h4>OTT</h4></li>
                  </ul>
                </div></Col>
                <Col className='col-md-1'></Col>
              </Row>
            </Container>
            <Container className='mobileview pb-5 mt-4'>
              <Container>
                <Row>
                  <Col className='col-md-6 padding-social-icon-left'>
                    <div className='text-center social-icon'>
                      <img src={img3} alt="" /><h4>news</h4>
                    </div>
                  </Col>
                  <Col className='col-md-6'></Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col className='col-md-6'></Col>
                  <Col className='col-md-6 padding-social-icon-right'>
                    <div className='text-center social-icon'>
                      <img src={img4} alt=" " /> <h4>media</h4>
                    </div>
                  </Col>
                </Row>
              </Container>
              <Row>
                <Col className='col-md-6 padding-social-icon-left'>
                  <div className='text-center social-icon'>
                    <img src={img5} alt=" " /> <h4>entertainment</h4>
                  </div>
                </Col>
                <Col className='col-md-6'></Col>
              </Row>
              <Row>
                <Col className='col-md-6'></Col>
                <Col className='col-md-6 padding-social-icon-right'>
                  <div className='text-center social-icon'>
                    <img src={img6} alt=" " /> <h4>gaming</h4>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className='col-md-6 padding-social-icon-left'>
                  <div className='text-center social-icon'>
                    <img src={img7} alt=" " /> <h4>OTT</h4>
                  </div></Col>
                <Col className='col-md-6'></Col>
              </Row>
              {/* <Row>
                <Col className='col-md-6'></Col>
                <Col className='col-md-6'>
                  <div className='text-center social-icon'>
                   
                  </div></Col>
              </Row> */}
            </Container>
          </Row>
        </Container>
        <Container className='about-slider mt-5 pt-5'>
          <Row className='mt-5'>
            <h1 className='slider-heading'>AT PUBCLUB, MEMBERS HAVE THE</h1>
            <h1 className='slider-heading'>OPPORTUNITY TO LEARN ABOUT</h1>
            <div className='mb-5 pb-5 text-center'>
              <div className='Carouselsection'>
                <Carousel variant="dark">
                  <Carousel.Item interval={1000}>
                    <img
                      className="d-block"
                      src={img8}
                      alt=" "
                    />

                  </Carousel.Item>
                  <Carousel.Item interval={1000}>
                    <img
                      className="d-block"
                      src={img9}
                      alt=" "
                    />

                  </Carousel.Item>
                  <Carousel.Item interval={1000}>
                    <img
                      className="d-block"
                      src={img10}
                      alt=" "
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block"
                      src={img11}
                      alt=" "
                    />
                  </Carousel.Item>
                </Carousel>

              </div>
            </div>
            {/* <div className='mt-5 mb-5 pb-4'>
            <p className='slider-para'>We aspire to constructively challenge the status quo and establish</p>
            <p className='slider-para'>emerging markets as a defining entity in the ad tech space.</p>
            </div> */}
            <Container fluid className='desktopview'>
              <div className='text-slide mt-5 mb-5 pb-4'>
                <img src={headleft} alt='left-capsule' />
                <div className='text-center'>
                  <p className='slider-para'>We aspire to constructively challenge the status quo and establish</p>
                  <p className='slider-para'>emerging markets as a defining entity in the ad tech space.</p>
                </div>
                <img src={headright} alt=" " />
              </div>
            </Container>
            <Container className='mobileview'>
              <Row>
                <p className='slider-mobileview-para'>We aim to challenge the status quo and elevate emerging markets in the Ad Tech space.
                </p>
              </Row>
            </Container>
          </Row>
          {/* carousel container */}

        </Container>
      </section>
    </>
  )
}

export default Aboutsection