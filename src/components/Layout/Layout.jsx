import React from 'react'
import Navbar from '../Navbar/Navbar.jsX'
import Home from '../Home/Home'
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout