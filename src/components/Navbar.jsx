/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/super-heroes">Traditional Super Heroes</NavLink>
                <NavLink to="/rq-super-heroes">RQ Super Heroes</NavLink>
            </nav>
        </div>
    )
}

export default Navbar