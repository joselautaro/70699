import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Cart/Cart";
import { CiDark } from "react-icons/ci";
import './NavBar.css';

export const NavBar = ({toggleDarkMode}) =>{
    return(
        <nav>
            <Link className="link" to='/'>Home</Link>
            <Link className="link" to='/productos/bazar'>Bazar</Link>
            <Link className="link" to='/productos/tecnologia'>Tecnología</Link>
            <Link className="link" to='/productos/ropa'>Ropa</Link>
            <Link className="link" to='/productos/musica'>Música</Link>
            <Link className="link" to='cart'><Cart/></Link>
            <CiDark className='btnBt' onClick={toggleDarkMode} />
        </nav>
    )
}