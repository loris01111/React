import React from 'react';
import { Col, Container, Row, Alert } from 'react-bootstrap';

function Link(props) {
  return (
    <Container>
      <Row>
        <Col>
        <Alert className='py-4 my-4' variant={props.variant}>
      This is a {props.variant} alert with{' '}
      <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
      you like.
    </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default Link;
