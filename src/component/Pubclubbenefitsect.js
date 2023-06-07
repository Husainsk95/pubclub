import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import './pubclubbenefitsect.css'

const Pubclubbenefitsect = () => {
    return (
        <>
            <section className='benefit-section mt-5 pt-5'>
                {/* paragraph section  */}
                <Container className='mb-5 pb-5'>
                    <Row>
                        <p className='benefit-section-para'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
                            est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
                            ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                            ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
                            Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                        </p>
                        <p className='benefit-section-para'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
                            est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
                            ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                            ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
                            Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                        </p><p className='benefit-section-para'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
                            est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
                            ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                            ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
                            Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                        </p><p className='benefit-section-para'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
                            est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
                            ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                            ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
                            Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                        </p>
                    </Row>
                </Container>
            </section>
            <section className='benefit-blog-section'>
                {/* blog section */}
              <Container>
                <Row className='blog-section-div'>
                    <Col className='col-md-6'>
                        <h3 className='blogheading'>KEEP READING..</h3>
                    </Col>
                    <Col className='col-md-6'>
                        <h5 className='viewbtn'>VIEW ALL</h5>
                    </Col>
                </Row>
              </Container>
            </section>
        </>
    )
}

export default Pubclubbenefitsect