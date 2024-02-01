import React, {useContext} from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../context/CartContext";

export const Cart = () => {

    const {calcularCantidad} = useContext(CartContext)

    return (
        <>
            <AiOutlineShoppingCart />
            <span>{calcularCantidad()}</span>
        </>
    )
}