import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import './membercom.css';

import member1 from '../images/member1.webp';
import member2 from '../images/member2.webp';
import member3 from '../images/member3.webp';
import member4 from '../images/member4.webp';

const MembersComp = () => {
  return (
    <>
       <section className='members-section' >
            <Container fluid className='px-5p'>
                <Row>
                    <Col className='col-md-10 mx-auto '>
                        <div className='d-flex member-images p-5'>
                            <img src={ member1 } alt='' />
                            <img src={ member2 } alt='' />
                            <img src={ member3 } alt='' />
                            <img src={ member4 } alt='' />
                        </div>
                    </Col>

                    <Col className='col-md-10 mx-auto '>
                        <div className='d-flex member-images p-5'>
                            <img src={ member3 } alt='' />
                            <img src={ member4 } alt='' />
                            <img src={ member2 } alt='' />
                            <img src={ member1 } alt='' />
                        </div>
                    </Col>

                    <Col className='col-md-10 mx-auto '>
                        <div className='d-flex member-images p-5'>
                            <img src={ member4 } alt='' />
                            <img src={ member3 } alt='' />
                            <img src={ member1 } alt='' />
                            <img src={ member2 } alt='' />
                        </div>
                    </Col>


                    <Col className='col-md-10 mx-auto '>
                        <div className='d-flex member-images p-5 border-0'>
                            <img src={ member2 } alt='' />
                            <img src={ member4 } alt='' />
                            <img src={ member3 } alt='' />
                            <img src={ member1 } alt='' />
                        </div>
                    </Col>
                </Row>
            
            </Container>
        </section>      
    </>
  )
}

export default MembersComp
