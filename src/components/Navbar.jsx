import React, { useContext, useState } from "react";
import styles from "../styles/NavBar.module.css";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TripSelector from "./TripSelector";


import {
    FaHotel,
    FaTasks,
    FaUsers,
    FaUtensils,
    FaPlane,
    FaBed,
    FaStar,
    FaCompass,
    FaBars,
    FaTimes
} from "react-icons/fa";

const NavBar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };


    return (
        <div className={styles.navbar}>
          <div className={styles.leftSection}>
              {!menuOpen && (
                  <button
                      className={`${styles.menuToggle} ${menuOpen ? styles.hidden : ""}`}
                      onClick={() => setMenuOpen(true)}
                      aria-label="Toggle menu"
                  >
                      <FaBars />
                  </button>

              )}

              <div className={styles.logo}>
                  <img
                      src="/TripPlanrbg.png"
                      alt="favicon"
                      style={{
                          height: "52px",
                          marginRight: "8px",
                          verticalAlign: "middle"
                      }}
                  />
                  <span
                      style={{
                          fontWeight: "bold",
                          fontSize: "1.4rem",
                          color: "black"
                      }}
                  >
                      TripPlanr
                  </span>
              </div>
          </div>

          <div className={styles.actions}>
              <button className={styles.signinBtn}>Sign In</button>
          </div>

          {menuOpen && (
              <div
                  className={styles.backdrop}
                  onClick={() => setMenuOpen(false)}
              ></div>
          )}

          <div
              className={`${styles.sidebar} ${menuOpen ? styles.show : ""}`}
              
          >
              <button
                  onClick={() => setMenuOpen(false)}
                  style={{
                      background: "none",
                      border: "none",
                      fontSize: "1.5rem",
                      alignSelf: "flex-end",
                      cursor: "pointer",
                      marginBottom: "1rem"
                  }}
              >
                  <FaTimes />
              </button>

              <ul className={styles.sidebarMenu}>
                  <li><Link to="/discover" className={styles.sidebarButton} onClick={handleLinkClick}><FaCompass />Discover</Link></li>
                  <li><Link to="/hotels" className={styles.sidebarButton}><FaHotel /> Hotels</Link></li>
                  <li><Link to="/things-to-do"className={styles.sidebarButton}><FaTasks /> Things to Do</Link></li>
                  <li><Link to="/groupvote" className={styles.sidebarButton} onClick={handleLinkClick}><FaUsers /> Group Voting</Link></li>
                  <li><Link to="/restaurants" className={styles.sidebarButton}><FaUtensils /> Restaurants</Link></li>
                  <li><Link to="/flights" className={styles.sidebarButton}><FaPlane /> Flights</Link></li>
                  <li><Link to="/book-hostels" className={styles.sidebarButton}><FaBed /> Book Hostels</Link></li>
                  <li><Link to="/reviews"className={styles.sidebarButton}><FaStar /> Reviews</Link></li>
                  <li>
                      <button onClick={() => { toggleTheme(); setMenuOpen(false); }} className={styles.menuBtn}>
                          {theme === "light" ? "🌙" : "☀️"} Theme
                      </button>
                  </li>
                  <li>
                      <button className={styles.signinBtn} onClick={handleLinkClick}>Sign In</button>
                  </li>
              </ul>
          </div>
      </div>
  );
};

export default NavBar;
