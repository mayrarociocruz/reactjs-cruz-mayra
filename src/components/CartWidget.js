import { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Button from "react-bootstrap/Button";


const CartWidget = () => {
    const {calcItemsQty} = useContext(CartContext);
    const numerito= calcItemsQty();
    console.log(numerito)

    return (
        <Link to={'/cart'}>
        <Button variant="dark" className="carrito">
            <BsCart3/>
        {
            numerito>0 &&
            <Badge bg="none" className="numerito">{numerito}</Badge>
        }
        </Button>
        </Link>
    )
}
export default CartWidget;


