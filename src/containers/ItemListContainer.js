import React from 'react';
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import { firestoreFetch } from "../utils/firestoreFetch"


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    let { idCategory } = useParams();

 //component didMount llamamos a la promesa- didupdate

    useEffect(()=>{
        firestoreFetch (idCategory)
            .then (result => setDatos(result))
            .catch(err => console.log(err))
    },[idCategory]);

//cuando le agregamos dependencias se comporta como un component didUpDate
    return (
        
        <Container className='container-i'>
            <Row className='container-item'>
                <ItemList items={datos}/>
            </Row>
        </Container>
        
    );
}
export default ItemListContainer;
//el estado lepasamos por props a otro comnponente