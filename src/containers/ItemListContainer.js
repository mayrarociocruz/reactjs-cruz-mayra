import {customFetch} from "../utils/customFetch";
import productos from "../utils/productos";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    let { categoria } = useParams();

    useEffect(() => {
        customFetch(2000, products.filter(product => {
            if (categoria === undefined) return product;
            return product.categoria === parseInt(categoria)
        }))
        .then(result => setProducts(result))
        .catch(err => console.log(err))
    }, [categoria]);

    return (
        <>
        <Container>
            <Row>
                <Col><ItemList productos={products}/></Col>
            </Row>
        </Container>
        </>
    );
}

export default ItemListContainer;