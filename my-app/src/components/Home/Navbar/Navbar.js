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
                        <Link className="btn-nav" to="/nightparty">Night Party</Link>
                        <Link className="btn-nav" to="/leaderboard">LeaderBoard</Link>
                        <Link to="/login"><button >Login</button></Link>
                        <Link to="/register"><button >Sign Up</button></Link>
                    </li>
                    <Outlet />
                </ul>
            </nav>
        </header>
        
    );
};

export default Navbar;