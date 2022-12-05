import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  { Link } from 'react-router-dom';

const Item = ({ id, articulo, precio, imagen, categoryId }) =>{
  return (
    
    <Card className="card">
      
      <Card.Img variant="top" src= {imagen} className="imagen-card" />
      <Card.Body>
        <Card.Title className='title-card'>{articulo}</Card.Title>
        <Card.Text className='title-card'> Precio: $ {precio}</Card.Text>
        <Card.Footer className='title-card'>Categoria: {categoryId}</Card.Footer>
        <Link to={`/item/${id}`}><Button variant="secondary" className='boton-comprar'>COMPRAR</Button></Link>
      </Card.Body>
    </Card>
  
  
  );
  
}
console.log(Item)
export default Item;
//el item dibuja la card