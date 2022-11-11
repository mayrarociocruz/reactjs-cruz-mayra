
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ articulo, precio, imagen, categoria }) =>{
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {imagen} />
      <Card.Body>
        <Card.Title>{articulo}</Card.Title>
        <Card.Text>{precio}</Card.Text>
        <Card.Footer>{categoria}</Card.Footer>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;