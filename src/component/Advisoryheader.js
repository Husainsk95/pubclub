import React from 'react'
import './advisoryheader.css'
import { Container, Row } from 'react-bootstrap'

const AdvisoryHeader = () => {
  return (
    <>
      <section className='advisory-council'>
        <Container fluid className='advisory'>
          <Row>
            <h1 className='advisory-heading'>ADVISORY COUNCIL</h1>
            <p className='council-para'>The best in the business. Thinkers and subject matter experts of</p>
            <p className='council-para second-para'>PubClub paving the way for next-gen of publishers and content creators.</p>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default AdvisoryHeader