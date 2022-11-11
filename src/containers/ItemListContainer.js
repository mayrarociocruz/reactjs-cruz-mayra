import React from 'react';
import {customFetch} from "../utils/customFetch";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect,useState } from "react";
const { products } = require( "../utils/productos");



const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    console.log(idCategory);

    useEffect(() => {
        customFetch(2000, products.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
        .then(result => setDatos(result))
        .catch(err => console.log(err))
    }, [idCategory]);

    return (
        
        <Container>
            <Row>
                <ItemList items={datos} />
            </Row>
        </Container>
        
    );
}
export default ItemListContainer;