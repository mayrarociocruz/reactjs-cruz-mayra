import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
    return (
    <>
    {
    items.length > 0
        ? items.map(item => <Item key={item.id}
            id={item.id}
            articulo={item.articulo}
            precio={item.precio}
            stock={item.stock}
            categoryId={item.categoryId}
            imagen={item.imagen[0]}/>) 
        : <p>Cargando...</p>         
    }
    </>
    );
}
export default ItemList;