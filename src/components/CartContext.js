import { useState } from 'react';
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const[cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {

        const findItem= cartList.find(item => item === item.id);

        if ( findItem === undefined) {
            setCartList([
                ...cartList,
                { 
                    id: item.id,
                    imagen: item.imagen,
                    articulo: item.articulo,
                    precio: item.precio,
                    qty: qty,
                    stock: item.stock - qty,
                    totalPriceItem: item.price * qty,
                }
            ]);
        }else{
            findItem.qty += qty;
            setCartList([
                ...cartList,
            ]);
        }
    }

    const removeList = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        const result = cartList.filter(item => item.id !== id);
        setCartList(result);
    }

    const totalPriceItem = (id) => {
        const index = cartList.map(item => item.id).indexOf(id);
        return cartList[index].precio * cartList[index].qty;
    }

    const subTotalPriceCart = () => {
        const calcTotalPriceItem = cartList.map(item => totalPriceItem(item.id));
        return calcTotalPriceItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const totalPriceCart = () => {
        return subTotalPriceCart();
    }

    const calcItemsQty = () => {
        const qtys = cartList.map(item => item.qty);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return (
        <CartContext.Provider value={{
            cartList, 
            addToCart, 
            removeList, 
            deleteItem,
            totalPriceItem,
            subTotalPriceCart,
            totalPriceCart,
            calcItemsQty
            }}>
            { props.children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;