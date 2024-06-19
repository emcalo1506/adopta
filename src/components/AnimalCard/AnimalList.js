import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AnimalCard from './AnimalCard';
import './AnimalList.css'

function AnimalList({ animales }) {
  return (
    <Container className="container-custom">
      <h2 className="CardTitle text-center"> Todos los animales </h2>
      <Row>
        {animales.map(animal => (
          <Col key={animal.id} md={4} className="d-flex align-items-stretch">
            <AnimalCard animal={animal} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AnimalList;
