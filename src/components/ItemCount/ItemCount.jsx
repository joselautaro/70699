import React, { useState } from 'react'

export const ItemCount = () => {

    // declaramos la constante = [variable de estado, estado modificable] = estado()
    const [sarasa, setSarasas] = useState(1)

    const sumar = () => {
        setSarasas(sarasa + 1)
    }

    const restar = () => {
        if (sarasa > 1) {
            setSarasas(sarasa - 1)
        }
    }

    return (
        <div>
            <button className='btn btn-danger m-2' onClick={restar}>Restar</button>
            <span>{sarasa}</span>
            <button className='btn btn-success m-2' onClick={sumar}>Sumar</button>
        </div>
    )
}


