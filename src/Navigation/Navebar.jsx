import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">📊 Payment Tracker</Link>
            </div>
            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                <Link to="/">Home</Link>
                <Link to="/students">Students</Link>
                <Link to="/principals">Principals</Link>
                <Link to="/chairman">Chairman</Link>
            </div>
            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
        </nav>
    );
};

export default Navbar;
