import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { HiOutlineTrash } from "react-icons/hi2";
import { ItemCount } from "../ItemCount/ItemCount";
import './CartScreen.css'

/*
1- agregar el componente cheout como una sección dentro del componente CartScreen ✅
2 - establecer un estado de visibilidad del modal ✅
3 - Crear una función para manejar la apertura y cierre del modal  ✅
4 - Pasar la información necesaria del carrito al componente checkout
5 - Agregar un botón en el formulario CheckOut para enviar los datos y abrir el modal
6 - Crear un componente Modal para mostrar la información del resumen de compra

*/ 

export const CartScreen = () => {

    const { carrito, precioTotal, removeItem, vaciarCarrito, modifyItem } = useContext(CartContext)

    return (
        <div className="container mt-3">
            {
                !carrito || carrito.length === 0
                    ? <>
                        <h3>Carrito vacio</h3>
                        <hr />
                        <Link to='/' className="btn btn-success" >Volver a comprar</Link>
                    </>
                    : <>
                        <table className="miClase table text-center table-dark table-striped">
                            <thead>
                                <tr>
                                    <th colSpan={5}>
                                        <h3>Resumen de compras</h3>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Descripción</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                    <th></th>
                                    <th></th>
                                </tr>

                            </thead>
                            <tbody>
                            {
                                carrito.map((prod) => (
                                    
                                            <tr key={prod.id}>
                                                <td>
                                                    <p>{prod.description}</p>
                                                </td>
                                                <td>
                                                    <p>{prod.counter}</p>
                                                </td>
                                                <td>
                                                    <p>{prod.price.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})}</p>
                                                </td>
                                                <td>

                                                    <ItemCount max={prod.stock} cantidad={Number(prod.counter)} modify={(newCantidad) => modifyItem(prod.id, newCantidad)} />

                                                </td>
                                                <td>
                                                    <HiOutlineTrash onClick={() => removeItem(prod.id)} />
                                                </td>
                                            </tr>
                                    
                                    ))
                                }
                                </tbody>
                            <tfoot className="text-center">
                                <td>
                                    <p>Precio total</p>
                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                                <td></td>
                                <td>
                                    <p>{precioTotal().toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})}</p>
                                </td>
                            </tfoot>
                        </table>
                        <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar carrito</button>
                        <Link to="/check" className="float-end btn btn-success">Terminar compra</Link>
                    </>
        }
        </div>
    )
}