import { stock } from "../data/stock"

export const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        //Establecemos una demora de cargar de 1000
        setTimeout(() => {
            resolve(stock)
            reject("Rechazado")
        }, 1000)
    })
}