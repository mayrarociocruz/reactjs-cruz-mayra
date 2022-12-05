import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useEffect, useState } from "react";

export const ItemCount = ({stock , inicio = 1, onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(inicio);
    },[inicio]);

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    };
    
    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
        
    }

    
    return(
        <>
    <ButtonGroup  variant="outline-secondary" aria-label="Basic example">
        <Button  variant="outline-secondary" onClick={restar}> - </Button>
        <Button  variant="outline-secondary">{count}</Button>
        <Button className='suma-restar'  variant="outline-secondary" onClick={sumar}> + </Button>
        {
            stock && count 
        ? <Button  className='sumar-restar' variant='secondary' color='primary' onClick={() => onAdd(count)}>Agregar al Carrito</Button>
        : <Button variant="contained" disabled>Agregar al carrito</Button>

        }
        
    </ButtonGroup>
        </>
    );
}
export default ItemCount;
