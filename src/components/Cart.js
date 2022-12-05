import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom";
import { collection, serverTimestamp, doc, setDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import { BsFillTrashFill } from "react-icons/bs";




const Cart = () => {
  const { cartList, removeList, deleteItem, totalPriceItem, subTotalPriceCart, totalPriceCart } = useContext(CartContext);
  
  const createOrder = () => {
 let order ={
  buyer: {
    name: 'Mayra Rocio Cruz',
    email: 'rocioczpr@gmail.com',
    phone: '388141529',
  },
  date: serverTimestamp(),
  items: cartList.map(item => ({
    id: item.id,
    price: item.precio,
    title: item.articulo,
    qty: item.qty,
  })),
  total: totalPriceCart(),
 }

 const createOrderInFirestore = async () => {
  const newOrder = doc(collection(db, 'orders'));
  await setDoc(newOrder, order);
  return newOrder
 }
 createOrderInFirestore()
 .then(result => {
  alert('Order ID= ' + result.id)
  cartList.forEach(async(item) => {
    const itemRef = doc(db, 'products', item.id);
    await updateDoc (itemRef, {
      stock: increment(-item.qty)
    });
    console.log(createOrderInFirestore)
  });
  removeList()
 })
 .catch(err => console.log(err))
}

  return (
    <>
    
    <Link to={`/`} ><Button variant="secondary" className="boton-cart">Seguir comprando</Button></Link>

    <div className="body-card">
    <div className="detalle">
    <h3 className="h3">DETALLE DE LA COMPRA</h3>
    {
      cartList.length === 0  
      ? <li>Carrito Vacio</li>
      : cartList.map(item => 
        <Card className="carrito-card" key={item.id}>
                <Card.Img img="fluid" src={item.imagen} className="carrito-img" />
            <Card.Body>
                <Card.Title className="card-ti">{item.articulo}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"> Precio Unitario: $ {item.precio} <br></br> Importe Total: $ {totalPriceItem(item.id)}</Card.Subtitle>
            </Card.Body>
              <Button variant="light" className="delete-boton" onClick={() => deleteItem(item.id)}><BsFillTrashFill/></Button>
          </Card>
      )
    }
    </div>
    <div>
    {
        cartList.length > 0 &&
      <Card className="card-resumen">
      <Card.Header className="h3">RESUMEN DE LA COMPRA</Card.Header>
      <Card.Body>
        <Card.Text>SubTotal: $ {subTotalPriceCart()}</Card.Text>
        <Card.Title>Total a pagar: $  {totalPriceCart()}</Card.Title>
        <Button variant="secondary" onClick={createOrder}>Comprar Carrito</Button>
        <Button variant="outline-secondary" onClick={removeList}>Vaciar Carrito</Button>
      </Card.Body>
      </Card>
    }
    
    
    </div>
    </div>
    </>
  );
}

export default Cart;

//<div className="detalleCarrito">
//<img src={item.imagen}/>
//<h4>{item.articulo}</h4>
//<p>{item.precio}</p>
//</div> 