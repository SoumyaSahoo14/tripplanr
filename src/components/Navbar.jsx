import React, { useContext } from "react";
import styles from "../styles/NavBar.module.css";
import { ThemeContext } from "../context/ThemeContext";

import { FaHotel, FaTasks, FaUsers, FaUtensils, FaPlane, FaBed, FaStar, FaCompass } from "react-icons/fa";

const NavBar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img
                    src="/TripPlanrbg.png"
                    alt="favicon"
                    style={{
                        height: "32px",
                        marginRight: "8px",
                        verticalAlign: "middle"
                    }}
                />
                <span style={{ fontWeight: "bold", fontSize: "1.4rem", color: "black" }}>
                    TripPlanr
                </span>
            </div>

            <ul className={styles.navLinks}>
                <li><a href="#discover"><FaCompass /> Discover</a></li>
                <li><a href="#hotels"><FaHotel /> Hotels</a></li>
                <li><a href="#things-to-do"><FaTasks /> Things to Do</a></li>
                <li><a href="#group-voting"><FaUsers /> Group Voting</a></li>
                <li><a href="#restaurants"><FaUtensils /> Restaurants</a></li>
                <li><a href="#flights"><FaPlane /> Flights</a></li>
                <li><a href="#book-hostels"><FaBed /> Book Hostels</a></li>
                <li><a href="#reviews"><FaStar /> Reviews</a></li>
            </ul>

            <div className={styles.actions}>
                <button onClick={toggleTheme} title="Toggle Dark Mode">
                    {theme === "light" ? "🌙" : "☀️"}
                </button>
                <button className={styles.signinBtn}>Sign In</button>
            </div>
        </div>
    );
};

export default NavBar;
