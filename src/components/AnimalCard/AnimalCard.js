import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './AnimalCard.css'; 

function AnimalCard({ animal }) {
  const navigate = useNavigate();

  const handleAdoptClick = () => {
    navigate('/formulario');
  };

  return (
    <Card className="mb-4" >
      <Card.Img variant="top" src={animal.imagen} alt={animal.nombre} />
      <Card.Body>
        <Card.Title>{animal.nombre}</Card.Title>
        <Card.Text>{animal.tipo}</Card.Text>
        <Card.Text>{animal.provincia}</Card.Text>
        <Card.Text>{animal.descripcion}</Card.Text>
        <Button variant="primary" onClick={handleAdoptClick}>Adoptar</Button>
      </Card.Body>
    </Card>
  );
}

export default AnimalCard;
