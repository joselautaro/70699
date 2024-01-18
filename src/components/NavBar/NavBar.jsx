import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Cart/Cart";
import './NavBar.css';

export const NavBar = () =>{
    return(
        <nav>
            <Link className="link" to='/'>Home</Link>
            <Link className="link" to='/contador'>Contador</Link>
            <Link className="link" to='/poke'>Poke Api</Link>
            <Link className="link" to='/check'>Check</Link>
            <Link className="link" to='cart'><Cart/></Link>
        </nav>
    )
}