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
                                <Link className="menu__list-link" to="/" >About</Link>
                            </li>
                            <li className="menu__list-item">
                                <Link className="menu__list-link" to="/" >Gallery</Link>
                            </li>
                        </ul>
                    </nav>
                    <a href="#" className="logo">
                        <StaticImage src="../../images/logo.png" alt="logo" />
                    </a>
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__list-item">
                                <Link className="menu__list-link" to="/" >Blog</Link>
                            </li>
                            <li className="menu__list-item">
                                <Link className="menu__list-link" to="/" >Contact</Link>
                            </li>

                        </ul>
                    </nav>
                    <button className="header__btn" onClick={() => setOpen(true)}>
                        <StaticImage src="../../images/icon_menu.svg" alt="icon menu" />
                    </button>

                    <SideMenu isOpen={isOpen} setOpen={setOpen} />

                </div>
            </div>
        </header>
    )
}