import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import './Contacto.css'; 

function Contacto() {
  return (
    <Container className="contact-info-container py-4">
      <Row>
        <Col md={12}>
          <h2 className="mb-4 text-center">Datos de Contacto</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Nombre:</strong> Estela Martinez
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Teléfono:</strong> +123 456 789
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Correo Electrónico:</strong> estela@example.com
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Dirección:</strong> Calle Principal, Vigo, España
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacto;
