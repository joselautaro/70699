import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../context/CartContext";
import Swal from 'sweetalert2'
import './ItemDetail.css';

export const ItemDetail = ({ id, name, description, price, photo, category, stock }) => {

    const [counter, setCounter] = useState(0)

    const otro = useNavigate();

    const volverAtras = () => {
        otro("/")
    }

    const {addToCart} = useContext(CartContext);

    const sumarAlCarrito = () => {
        const newItem = {
            id,
            name,
            description,
            photo,
            price,
            category,
            counter
        }
        addToCart(newItem)
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Producto agregado al carrito",
            showConfirmButton: false,
            timer: 1000
        });
    }

    return (
        <div className="card">
            <div>
                <img src={photo} alt={photo} className="card-img-top" />
                <h4>{description}</h4>
                <div className="card-body text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam necessitatibus reiciendis excepturi, consequatur veniam eligendi aliquid incidunt nobis. Nostrum tempore quia inventore animi enim sequi eum placeat repellat, incidunt consectetur.</div>
                <h5>{category}</h5>
                <div className="contador">
                    <ItemCount max={stock} cantidad={counter} modify={setCounter}/>
                </div>
                <div className="botones">
                    <button className="btn btn-primary m-5" onClick={volverAtras}>
                        Volver atrás
                    </button>
                    <button className="btn btn-success m-5" onClick={sumarAlCarrito}>
                        Agregar al carrito
                    </button>
                    <Link className="btn btn-info m-5" to="/cart">
                        Ir al carrito
                    </Link>
                </div>
            </div>

        </div>
    )
}