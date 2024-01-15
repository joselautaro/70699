import React, { useEffect, useState } from 'react';
// import {ItemCount} from '../ItemCount/ItemCount'
import './ItemListContainer.css';


export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const stock = [
        {
            id: 1,
            name: 'Producto 1',
            description: 'Pantalón',
            photo: 'https://picsum.photos/seed/picsum/200/300',
            price: 25000,
            category: "ropa",
            stock: 20
        },
        {
            id: 2,
            name: 'Producto 2',
            description: 'Computadora',
            photo: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
            price: 1500000,
            category: "tecnologia",
            stock: 20
        },
        {
            id: 3,
            name: 'Producto 3',
            description: 'Taza',
            photo: 'https://fastly.picsum.photos/id/63/5000/2813.jpg?hmac=HvaeSK6WT-G9bYF_CyB2m1ARQirL8UMnygdU9W6PDvM',
            price: 7500,
            category: "bazar",
            stock: 20
        },
        {
            id: 4,
            name: 'Producto 4',
            description: 'Guitarra',
            photo: 'https://fastly.picsum.photos/id/145/4288/2848.jpg?hmac=UkhcwQUE-vRBFXzDN1trCwWigpm7MXG5Bl5Ji103QG4',
            price: 1000000,
            category: "musica",
            stock: 20
        },
    ];

    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            //Establecemos una demora de cargar de 1000
            setTimeout(() => {
                resolve(stock)
                reject("Rechazado")
            }, 1000)
        })
    }

    useEffect(() => {
        pedirProductos()
            .then((productosObtenidos) => {
                setProductos(productosObtenidos)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])



    return (
        <div className='container tarjeta'>
            <div>
                <h1>Lista de productos</h1>
                <hr />
                {
                    productos.map((productos) => (
                        <div key={productos.id}>
                            <img src={productos.photo} alt={productos.photo} />
                            <h2>{productos.name}</h2>
                            <p>{productos.description}</p>
                            <p>Precio: {productos.price}</p>
                            <p>Stock disponible: {productos.stock} unidades</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

/*
    const stock = [
        {
            id: 1,
            name: 'Producto 1',
            description: 'Pantalón',
            photo: 'https://picsum.photos/seed/picsum/200/300',
            price: 25000,
            category: "ropa",
            stock: 20
        },
        {
            id: 2,
            name: 'Producto 2',
            description: 'Computadora',
            photo: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
            price: 1500000,
            category: "tecnologia",
            stock: 20
        },
        {
            id: 3,
            name: 'Producto 3',
            description: 'Taza',
            photo: 'https://fastly.picsum.photos/id/63/5000/2813.jpg?hmac=HvaeSK6WT-G9bYF_CyB2m1ARQirL8UMnygdU9W6PDvM',
            price: 7500,
            category: "bazar",
            stock: 20
        },
        {
            id: 4,
            name: 'Producto 4',
            description: 'Guitarra',
            photo: 'https://fastly.picsum.photos/id/145/4288/2848.jpg?hmac=UkhcwQUE-vRBFXzDN1trCwWigpm7MXG5Bl5Ji103QG4',
            price: 1000000,
            category: "musica",
            stock: 20
        },
    ];
    */