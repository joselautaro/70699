import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirProductos } from "../../helpers/pedirProductos";
import { ItemDetail } from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css';



export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);

    const [loading, setLoading] = useState(false);

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true)
        pedirProductos()
            .then((res) => {
                setItem(res.find(prod => prod.id === Number(itemId)));
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])



    return (
        <div className="tarjeta">
            {
                loading ? <div className="spinner"><span className="spinner-grow spinner-grow-xxl" aria-hidden="true"></span></div>
                    : <ItemDetail {...item} />
            }
        </div>
    )
}