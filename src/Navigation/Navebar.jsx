import { useState } from "react";
import style from './Navbar.module.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    function menuToggle() {
        setMenuOpen(!menuOpen);
    }

    function getBranch(e) {
        console.log("Selected Branch:", e.target.textContent);
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={style.navbar}>
            <div className={style.logo}>
                <h3>📊 Payment Tracker</h3>
            </div>
            <div className={`${style.nav_links} ${menuOpen ? style.open : ""}`}>
                <button className={style.Navbar_btn} onClick={getBranch}>Branch A</button>
                <button className={style.Navbar_btn} onClick={getBranch}>Branch B</button>
                <button className={style.Navbar_btn} onClick={getBranch}>Branch C</button>
                <button className={style.Navbar_btn} onClick={getBranch}>Branch D</button>
                <button className={style.Navbar_btn} onClick={getBranch}>Branch E</button>
            </div>
            <div className={style.menu_toggle} onClick={menuToggle}>
                ☰
            </div>
        </nav>
    );
};

export default Navbar;
