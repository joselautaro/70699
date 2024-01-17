import React from "react";
import './NavBar.css';
import { Link } from "react-router-dom";

export const NavBar = () =>{
    return(
        <nav>
            <Link className="link" to='/'>Home</Link>
            <Link className="link" to='/contador'>Contador</Link>
            <Link className="link" to='/poke'>Poke Api</Link>
        </nav>
    )
}