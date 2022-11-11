import React from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "../containers/ItemCount";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const ItemDetail = ({ items }) => {
    return (
    <Card>
        <Container>
        <Row>
            <Col xs={12} md={6} sm={6} lg={6}>
            <Card.Img variant="top" className="imagenProduct" src={items.imagen} />
            </Col>
            <Col xs={12} md={6} sm={6} lg={6}>
            <Card.Body>
                <Card.Title className="tituloProductoDetalle">{items.articulo}</Card.Title>
                <Card.Text> {items.categoryId}</Card.Text>
                <Card.Text className="stockProducto"> Stock: {items.stock} u.</Card.Text>
                <Card.Text className="precioProducto"> Precio: {items.precio}</Card.Text>
                <ItemCount/>
                <Link to={'/cart'}><Button variant="outline-primary">Agregar al carrito</Button></Link>
            </Card.Body>
            </Col>
        </Row>
        </Container>
    </Card>
    );
};
export default ItemDetail;