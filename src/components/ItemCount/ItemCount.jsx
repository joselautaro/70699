import React, { useState } from 'react'

export const ItemCount = () => {

    // declaramos la constante = [variable de estado, estado modificable] = estado()
    const [counter, setCounter] = useState(0)

    const sumar = () => {
        setCounter(counter + 1)
    }

    const restar = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    return (
        <div>
            <button className='btn btn-danger m-2' onClick={restar}>➖</button>
            <span>{counter}</span>
            <button className='btn btn-success m-2' onClick={sumar}>➕</button>
        </div>
    )
}


