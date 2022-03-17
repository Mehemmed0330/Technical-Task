import React from 'react'
import { NavLink } from "react-router-dom";
import "../scss/reset.scss"
import "../scss/menu.scss"

export default function Menu() {
    return (
        <div className="menu">
            <ul className="menu-links">

                <li className="menu-link">
                    <NavLink
                        to="add"
                        className="nav_link"
                    >
                        Əlavə et
                    </NavLink>
                </li>
                <li className="menu-link">
                    <NavLink
                        to="books"
                        className="nav_link"
                    >
                        Kitablar
                    </NavLink>
                </li>
            </ul>

        </div>
    )
}
