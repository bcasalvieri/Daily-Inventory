import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function UserHome() {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={3}>This is the sidebar</Col>
          <Col md={9}>This is the main section</Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}
