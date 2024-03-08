import React from "react";
import './Header.css';
import arrowLeft from "../assets/icons/small-left.png"
import arrowRight from "../assets/icons/small-right.png"
import searchIcon from "../assets/icons/search.png"
import SearchBar from './SearchBar'

const Header = () => {
    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={arrowLeft} alt="Seta esquerda"></img>
                </button>
                <button className="arrow-right">
                    <img src={arrowRight} alt="Seta direita"></img>
                </button>
            </div>

            <div className="header__search">
                <img src={searchIcon} alt=""></img>
                <SearchBar></SearchBar>
            </div>

            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    )
}

export default Header