import React from 'react';
import { Link } from 'react-router-dom';

export const CheckOut = () =>{
    return(
        <div className='container'>
            <h3>Terminar compra</h3>
            <hr />
            <form>
                <div className='form-group mt-3'>
                    <label htmlFor="email">Email: </label>
                    <input 
                    className='form-control'
                    type="email"
                    id='email'
                    name='email'
                    required 
                    />
                </div>
                <div className='form-group mt-3'>
                    <label htmlFor="nombre">Nombre:</label>
                    <input 
                    className='form-control'
                    type="text"
                    id='nombre'
                    name='nombre'
                    required 
                     />
                </div>
                <div className='form-group mt-3'>
                    <label htmlFor="apellido">Apellido:</label>
                    <input 
                    className='form-control'
                    type="text" 
                    id='apellido'
                    name='apellido'
                    required
                    />
                </div>
                <div className='form-group mt-3'>
                    <label htmlFor="Teléfono">Teléfono</label>
                    <input 
                    className='form-control'
                    type="number"
                    id='telefono'
                    name='telefono'
                    required 
                    />
                </div>
                <div className='form-group mt-3'>
                    <Link to='/cart' className="btn btn-info">Volver al carrito</Link>
                    <button className='btn btn-success float-end'>Finalizar compra</button>
                </div>
            </form>
        </div>
    )
}