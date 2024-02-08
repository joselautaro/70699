import { useState, createContext, useEffect } from "react";
import Swal from 'sweetalert2'

export const CartContext = createContext();

const init = JSON.parse(localStorage.getItem('carrito')) || [];

export const CartProvider = ( {children} ) =>{

    const [carrito, setCarrito] = useState(init)

    useEffect(() =>{
        localStorage.setItem('carrito' , JSON.stringify(carrito))
    }, [carrito])

    const addToCart = (item) =>{
        setCarrito([...carrito, item])
    }
    console.log(carrito);

    const calcularCantidad = () =>{
        return carrito.reduce((acc, prod) => acc + prod.counter, 0)
    }

    const precioTotal = () =>{
        // return carrito.reduce((acc, prod) =>{
        //     if( prod.price !== undefined && prod.counter !== undefined && typeof prod.price === 'number' && typeof prod.counter === 'number' ){
        //         return acc + prod.price * prod.counter;
        //     }
        // }, 0)
        return carrito.reduce((acc, prod) => acc + (prod.price || 0) * (prod.counter || 0), 0)
    }
    const removeItem = (itemId) =>{
        const newItem = carrito.filter((prod) =>  prod.id !== itemId)
        setCarrito(newItem)
        Swal.fire({
          position: "top-end",
          icon: "warning",
          title: "Producto eliminado satisfactoriamente",
          showConfirmButton: false,
          timer: 1000
        });
    }

    const modify = (itemId, newCantidad) =>{
        console.log(modify);
        console.log(`itemId: ${itemId} a newCantidad: ${newCantidad}`);
        const updateCarrito = carrito.map((prod) =>{
            if( prod.id === itemId ){
                return {...prod, counter: newCantidad}
            }
            return prod;
        })
        setCarrito(updateCarrito)
    }

    const vaciarCarrito = () =>{
        setCarrito([])
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Carrito vacio",
            showConfirmButton: false,
            timer: 1000
          });
    }

   

    return(
        <CartContext.Provider value={{
            carrito,
            addToCart,
            calcularCantidad,
            precioTotal,
            removeItem,
            vaciarCarrito,
            modify
        }}>
            {children}
        </CartContext.Provider>
    )
}