import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Cart/Cart";
import { CiDark } from "react-icons/ci";
import './NavBar.css';

export const NavBar = ({ toggleDarkMode }) => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">LauShop</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="div-menu collapse navbar-collapse" id="navbarNav">

                    <Link className="link" to='/productos/bazar'>Bazar</Link>
                    <Link className="link" to='/productos/tecnologia'>Tecnología</Link>
                    <Link className="link" to='/productos/ropa'>Ropa</Link>
                    <Link className="link" to='/productos/musica'>Música</Link>
                    <Link className="link link-cart" to='cart'><Cart /></Link>

                    <CiDark className='btnBt' onClick={toggleDarkMode} />

                </div>
            </div>

        </nav>
    )
}