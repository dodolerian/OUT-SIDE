import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../../assets/img/logo.png";

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link className="btn-nav" to="/"><img src={Logo}></img></Link>
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