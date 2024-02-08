import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { HiOutlineTrash } from "react-icons/hi2";
import { ItemCount } from "../ItemCount/ItemCount";
import './CartScreen.css'

export const CartScreen = () => {

    const { carrito, precioTotal, removeItem, vaciarCarrito, modify } = useContext(CartContext)

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
                            {
                                carrito.map((prod) => (
                                    <>
                                        <tbody>
                                            <tr key={prod.id}>
                                                <td>
                                                    <p>{prod.description}</p>
                                                </td>
                                                <td>
                                                    <p>{prod.counter}</p>
                                                </td>
                                                <td>
                                                    <p>${prod.price}</p>
                                                </td>
                                                <td>
                                                <ItemCount max={prod.stock} cantidad={Number(prod.counter)} modify={(newCantidad) => modify(prod.id, newCantidad)}/>

                                                </td>
                                                <td>

                                                    <HiOutlineTrash onClick={() => removeItem(prod.id)} />

                                                </td>
                                                

                                            </tr>
                                        </tbody>
                                    </>
                                ))
                            }
                            <tr className="text-center">
                                <td>
                                    <p>Precio total</p>
                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                                <td></td>
                                <td>
                                    <p>${precioTotal()}</p>
                                </td>
                            </tr>
                        </table>
                        <button onClick={vaciarCarrito} className="btn btn-danger float-end">Vaciar carrito</button>
                    </>
            }
        </div>
    )
}