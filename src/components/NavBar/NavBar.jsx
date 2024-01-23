import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Cart/Cart";
import './NavBar.css';

export const NavBar = () =>{
    return(
        <nav>
            <Link className="link" to='/'>Home</Link>
            <Link className="link" to='/productos/bazar'>Bazar</Link>
            <Link className="link" to='/productos/tecnologia'>Tecnología</Link>
            <Link className="link" to='/productos/ropa'>Ropa</Link>
            <Link className="link" to='/productos/musica'>Música</Link>
            <Link className="link" to='cart'><Cart/></Link>
        </nav>
    )
}