import * as React from "react"
import { useState } from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import './Header.scss'
import SideMenu from '../SideMenu/SideMenu'

export const Header = () => {

    const [isOpen, setOpen] = useState(false);



    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__list-item">
                                <Link className="menu__list-link"
                                    to="/about"
                                    activeClassName="menu__list-link--active">About</Link>
                            </li>
                            <li className="menu__list-item">
                                <Link className="menu__list-link"
                                    to="/gallery"
                                    activeClassName="menu__list-link--active"
                                >Gallery</Link>
                            </li>
                        </ul>
                    </nav>
                    <Link to="/" className="logo">
                        <StaticImage src="../../images/logo.png" alt="logo" />
                    </Link>
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__list-item">
                                <Link className="menu__list-link" to="/" >Blog</Link>
                            </li>
                            <li className="menu__list-item">
                                <Link
                                    className="menu__list-link"
                                    to="/contact"
                                    activeClassName="menu__list-link--active"
                                >Contact</Link>
                            </li>

                        </ul>
                    </nav>
                    <button className="header__btn" onClick={() => setOpen(true)}>
                        <StaticImage src="../../images/icon_menu.svg" alt="icon menu" />
                    </button>

                    {isOpen && <SideMenu isOpen={isOpen} setOpen={setOpen} />}

                </div>
            </div>
        </header>
    )
}