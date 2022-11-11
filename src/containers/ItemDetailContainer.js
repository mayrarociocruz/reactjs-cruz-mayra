import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "../components/ItemDetail";
const { products } = require('../utils/productos');

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});

    //component didMount que devuelve un solo producto
    useEffect(() => {
        customFetch(2000, products[0])
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;