import React, { useEffect, useState } from 'react';
import { pedirProductos } from '../../helpers/pedirProductos';
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemListContainer.css';


export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const [loading, setLoading] = useState(false)



    useEffect(() => {
        setLoading(true)
        pedirProductos()
            .then((productosObtenidos) => {
                setProductos(productosObtenidos)
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])



    return (
        <>

            <h1>Lista de productos</h1>

            <div className='tarjeta'>
                {loading ? <div className='spinner'>
                    <span class="spinner-grow spinner-grow-xxl" aria-hidden="true">
                    </span>
                            </div>
                    : productos.map((productos) => (
                        <div className='card' key={productos.id}>
                            <img src={productos.photo} alt={productos.photo} />
                            <h2>{productos.description}</h2>
                            <i>{productos.category}</i>
                            <b>Precio: ${productos.price}</b>
                            <div className="contador">
                                <ItemCount />
                            </div>
                            <p>Stock disponible: {productos.stock} unidades</p>
                        </div>
                    ))
                }

            </div>
        </>
    )
}