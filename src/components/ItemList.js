import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
    return (
    <>
        {products.map(producto => <Item
            key={producto.id}
            id={producto.id}
            articulo={producto.articulo}
            precio={producto.precio}
            stock={producto.stock}
            categoria={producto.categoria}
            imagen={producto.imagen[0]}/>)          
        }
    </>
    );
}
export default ItemList;