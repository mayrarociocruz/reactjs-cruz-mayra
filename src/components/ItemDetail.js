import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "../containers/ItemCount";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useState } from "react";
import { CartContext } from "./CartContext";


const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const { addToCart } = useContext(CartContext);

    const onAdd = (qty) =>{
        alert("Has agregado " + qty + " unidades del articulo al carrito.");
        setItemCount(qty);
        addToCart(item, qty);
    }
    return (
        <>
        {
            item && item.imagen
            ?
        <Card className="tarjeta">
        <Container>
        <Row>
            
            <Col xs={12} md={6} sm={6} lg={6}>
            <Card.Img variant="top" className="img-detail" src={item.imagen} />
            </Col>
            <Col xs={12} md={6} sm={6} lg={6}>
            <Card.Body>
                <Card.Title className="title-detail">{item.articulo}</Card.Title>
                <Card.Text className="stock-detail"> Stock: {item.stock} u.</Card.Text>
                <Card.Text className="precio-detail"> Precio: $ {item.precio}</Card.Text>
                <Card.Text>Categoria: {item.categoryId}</Card.Text>
                <Card.Text>Descripcion: {item.descripcion}</Card.Text>
                {
                    itemCount === 0
                    ? <ItemCount className="sumar-restar" stock={item.stock} initial={itemCount} onAdd={onAdd}/>
                    : <Link to={'/cart'}><Button variant="secondary" className="sumar-restar">Ver Carrito</Button></Link>
                }
            </Card.Body>
            </Col>
        </Row>
        </Container>
    </Card>
    : <p>Cargando...</p>
    }
    </>
    );
};
export default ItemDetail;
//recibe el objeto del "itemDetailContainer" y dibuja la card