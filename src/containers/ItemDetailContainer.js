import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { products } from '../utils/productos';


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    //component didMount que devuelve un solo producto
    useEffect(() => {
        customFetch(2000, products.find(item => item.id === idItem))
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, [idItem]);

    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;