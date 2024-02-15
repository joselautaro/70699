import React, {useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../context/CartContext';
import Swal from 'sweetalert2';

export const CheckOut = () =>{

    // La peor manera

    // const [email, setEmail] = useState('')

    // const [nombre, setNombre] = useState('')

    // const [apellido, setApellido] = useState('')

    // const [telefono, setTelefono] = useState(0)

    const {vaciarCarrito} = useContext(CartContext)

    const [ordenId, setOrdenId] = useState('')

    const [formData, setFormData] = useState({
        email: '',
        nombre: '',
        apellido: '',
        telefono: ''
    })

    


    const generarOrden = () =>{
        //Generar un numero random para simular un id de orden

        const randomId = Math.floor(Math.random()* 1000000)

        setOrdenId(randomId)

        setFormData({
            email: '',
            nombre: '',
            apellido: '',
            telefono: ''
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        // Ejecuta la función de generar orden
        generarOrden();

        // Ejecuta la función de vaciar carrito(contexto)
        vaciarCarrito()
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Orden generada con éxito, si lo desea copie y pegue el número en pantalla",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

   

    return(
        <div className='container'>
            <h3>Terminar compra</h3>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className='form-group mt-3' >
                    <label htmlFor="email">Email: </label>
                    <input 
                    className='form-control'
                    type="email"
                    id='email'
                    name='email'
                    required
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.nombre} 
                    onChange={handleChange}
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
                    value={formData.apellido}
                    onChange={handleChange}
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
                    value={formData.telefono} 
                    onChange={handleChange}
                    />
                </div>
                <div className='form-group mt-3'>
                    <Link to='/cart' className="btn btn-info">Volver al carrito</Link>
                    <button type='submit' className='btn btn-success float-end'>Finalizar compra</button>
                </div>
            </form>

            {
                ordenId && (
                    <div className='mt-4'>
                        <h5>¡Orden generada con éxito!</h5>
                        <p>Número de orden: {ordenId}</p>
                    </div>
                )
            }
        </div>
    )
}