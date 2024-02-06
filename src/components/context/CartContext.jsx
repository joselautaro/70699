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
        return carrito.reduce((acc, prod) =>{
            if( prod.price !== undefined && prod.counter !== undefined && typeof prod.price === 'number' && typeof prod.counter === 'number' ){
                return acc + prod.price * prod.counter;
            }
        }, 0)
    }
    const removeItem = (itemId) =>{
        const newItem = carrito.filter((prod) =>  prod.id !== itemId)
        setCarrito(newItem)
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Estás seguro de deseas eliminar el producto?",
            text: "Esta acción no tiene retorno!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si, quiero eliminarlo!",
            cancelButtonText: "No, cancelar!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire({
                title: "Eliminado!",
                text: "Tu producto ha sido eliminado.",
                icon: "success"
              });
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
              });
            }
          });
    }

    return(
        <CartContext.Provider value={{
            carrito,
            addToCart,
            calcularCantidad,
            precioTotal,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}