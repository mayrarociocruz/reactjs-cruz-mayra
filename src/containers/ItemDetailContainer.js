import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { firestoreFetchOne } from "../utils/firestoreFetch";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    console.log(idItem);
    //component didMount uso la misma promesa pero devuelve un solo producto
    useEffect(() => {
        firestoreFetchOne(idItem)
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, [idItem]);

    return ( 
        <>
        <Container className="container-i">
            <Row>
                <Col><ItemDetail item={dato} /></Col>
            </Row>
        </Container>
        </>
    );
}
//se setea la estado y se envia por props a otro componentellamado item detail
export default ItemDetailContainer;