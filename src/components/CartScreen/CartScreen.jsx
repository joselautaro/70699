import React from "react";
import { Link } from "react-router-dom";
import './CartScreen.css'

export const CartScreen = () => {
    return (
        <div className="container my-5">
            <>
                <h3>Carrito vacio</h3>
                <hr />
                <Link to='/' className="btn btn-success" >Volver a comprar</Link>
            </>
        </div>
    )
}