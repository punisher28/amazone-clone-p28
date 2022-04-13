import React from 'react'
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search"
import '../styles/Header.css';
function Header() {
    return (
        <nav className='header'>
            <Link to="/login">
                <img className='header__logo'
                    src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt=''
                />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className='header__searchIcon'></SearchIcon>
            </div>

            <div className="header__nav">
                <Link to="/login" className='header__link'>
                    <div className="header__option">
                        <span>Hello mıstık </span>
                        <span>Sign In </span>
                    </div>

                </Link>
                <Link to="/" className='header__link'>
                    <div className="header__option">
                        <span>Returns </span>
                        <span>& Orders </span>
                    </div>

                </Link>
                <Link to="/" className='header__link'>
                    <div className="header__option">
                        <span>Your</span>
                        <span>Prime </span>
                    </div>

                </Link>

            </div>

            {/*3 links*/}
            {/*Basket icon with number*/}
        </nav>
    )
}

export default Header
