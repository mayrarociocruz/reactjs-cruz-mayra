import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  { Link } from 'react-router-dom';

const Item = ({ id, articulo, precio, imagen, categoryId }) =>{
  return (
    <Link to ={`/item/${id}`}>
    <Card style={{ width: '18rem' }}>
      
      <Card.Img variant="top" src= {imagen} />
      <Card.Body>
        <Card.Title>{articulo}</Card.Title>
        <Card.Text> Precio: $ {precio}</Card.Text>
        <Card.Footer>{categoryId}</Card.Footer>
        <Button variant="secondary"><Link to={`/item/${id}`}>COMPRAR</Link></Button>
      </Card.Body>
    </Card>
    </Link>
  );
}

export default Item;