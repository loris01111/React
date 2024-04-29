import React from 'react';
import { Col, Container, Row, Alert } from 'react-bootstrap';

function Link(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Alert className='py-4 my-4' variant={props.variant}>
            {props.text}
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default Link;
