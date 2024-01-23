import React from "react";
import {Item} from '../Item/Item'


export const ItemList = ({productos=[]}) =>{
    return(
        <div className="container">
            <h3>Nuestros productos</h3>
            <div className="tarjeta">
                {
                    productos.map((item) => <Item {...item} key={item.id}/>)
                }
            </div>
        </div>
    )
}