import React from 'react'

export const ItemListContainer = ({losSimpsons}) => {
  return (
    <div>
        {
            losSimpsons && losSimpsons.map(({id, nombre, description}, index) =>(
                <div key={index}>
                    <p>ID: {id}</p>
                    <p>Nombre: {nombre}</p>
                    <p>Descripcion: {description}</p>
                    <hr />
                </div>
            ))}
    </div>
  )
}
