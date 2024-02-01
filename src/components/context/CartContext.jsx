import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ( {children} ) =>{

    const [carrito, setCarrito] = useState([])

    const addToCart = (item) =>{
        setCarrito([...carrito, item])
    }
    console.log(carrito);

    const calcularCantidad = () =>{
        return carrito.reduce((acc, prod) => acc + prod.counter, 0)
    }

    return(
        <CartContext.Provider value={{
            addToCart,
            calcularCantidad
        }}>
            {children}
        </CartContext.Provider>
    )
}