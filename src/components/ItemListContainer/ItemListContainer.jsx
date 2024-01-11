import React from 'react';
import {ItemCount} from '../ItemCount/ItemCount'
import './ItemListContainer.css';


export const ItemListContainer = ({ losSimpsons }) => {
    return (
        <div className='tarjeta'>
            {
                losSimpsons && losSimpsons.map(({ id, nombre, description }, index) => (
                    <div class="card tarjetaDos">
                        <div class="card-body">
                            <span>{id}</span>
                            <h5 className="card-title">Nombre: {nombre}</h5>
                            <p className="card-text">Description: {description}</p>
                            <ItemCount/>
                        </div>
                    </div>
                ))}
        </div>
    )
}
