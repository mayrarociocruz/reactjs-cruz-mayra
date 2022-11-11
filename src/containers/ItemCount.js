import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useEffect, useState } from "react";

export const ItemCount = () => {
    const [count, setCount] = useState(0);

    useEffect(() => { },[count]);

    const sumar = () => {
        setCount(count + 1);
    };
    
    const restar = () => {
        if (count>0)
        setCount(count - 1);
    };

    
    return(
        <>
    <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={restar}> - </Button>
        <Button variant="secondary">{count}</Button>
        <Button variant="secondary" onClick={sumar}> + </Button>
    </ButtonGroup>
        </>
    );
}
export default ItemCount;
