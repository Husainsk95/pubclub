import React from 'react'
import './advisorysection.css'
import { Container, Row, Col } from 'react-bootstrap'
import img1 from '../images/Maskgroupimg.webp'

const Advisorysection = () => {
    return (
        <>
            <section className='advisory-section'>
                <Container className='mb-5 pb-5'>
                    <Row>
                        <Col className='col-md-3'>
                            <div>
                                <img src={img1} alt=" " />
                                <h4 className='advsection-heading mt-5'>Timmy Bankole</h4>
                                <p className='advsection-subheading'>Director, Advertising Business Operations at South China </p>
                                <p className='advsection-subheading mt-para'>Marketing Post</p>
                            </div>
                        </Col>
                        <Col className='col-md-9 border-bottom'>
                            <p className='advsection-para'>Timmy Bankole, Director, Advertising Business Operations at South China Marketing Post is a veteran marketer with over 12 years of experience across the digital landscape. His experience can be scaled over varied expertise including an understanding of supply mix, publisher performance, and strategic revenue growth. 
</p>
                        </Col>
                    </Row>
                </Container>
                <Container className='mt-5 pt-5 mb-5 pb-5'>
                    <Row>
                        <Col className='col-md-3'>
                            <div>
                                <img src={img1} alt=" " />
                                <h4 className='advsection-heading mt-5'>Timmy Bankole</h4>
                                <p className='advsection-subheading'>Director, Advertising Business Operations at South China</p>
                                <p className='advsection-subheading mt-para'>Marketing Post</p>
                            </div>
                        </Col>
                        <Col className='col-md-9'>
                            <p className='advsection-para'>Timmy Bankole, Director, Advertising Business Operations at South China Marketing Post is a veteran marketer with over 12 years of experience across the digital landscape. His experience can be scaled over varied expertise including an understanding of supply mix, publisher performance, and strategic revenue growth. 
</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Advisorysection