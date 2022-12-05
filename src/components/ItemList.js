
import Item from "../components/Item";

const ItemList = ({ items }) => {
    return (
    <>
    {
    items.length > 0 ?
    items.map(item => <Item key={item.id} id={item.id} articulo={item.articulo} precio={item.precio} stock={item.stock} categoryId={item.categoryId} imagen={item.imagen[0]} descripcion={item.descripcion} />) 
    : <p>Cargando...</p>         
    }
    </>
    );
}
export default ItemList;
//el estado que se setea en "itemListContainer" despues de llamar a la promesa se envia por props aotro componente
//a este nuevo componente y se mapea en este componente
//llamamos a otro componente "item" que es el que dibuja la tarjeta(card)