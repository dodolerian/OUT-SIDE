import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link className="btn-nav" to="/">Home</Link>
                    </li>
                    <Outlet />
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;