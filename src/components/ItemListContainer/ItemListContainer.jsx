import React from 'react'

export const ItemListContainer = (props) => {
  return (
    <div>
        {
            props.losSimpsons && props.losSimpsons.map((objeto, index) =>(
                <div key={index}>
                    <p>ID: {objeto.id}</p>
                    <p>Nombre: {objeto.nombre}</p>
                    <p>Descripcion: {objeto.description}</p>
                    <hr />
                </div>
            ))}
    </div>
  )
}
