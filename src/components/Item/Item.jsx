import React from "react";
import { Link } from "react-router-dom";
import './Item.css'

export const Item = ({ id, name, price, photo, description, category}) => {
    return (
        <div className="card m-1">
            <div>
                <img src={photo} alt={photo} />
                <h4>{name}</h4>
                <h4>{description}</h4>
                <p className="p">{category}</p>
                <p>${price}</p>
                <div className="contador">
                    <Link className="btn btn-info m-1" to={`/detail/${id}`}>Ver más detalles</Link>
                </div>
            </div>
        </div>
    )
}