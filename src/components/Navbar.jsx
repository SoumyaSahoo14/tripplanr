import React, { useContext, useState } from "react";
import styles from "../styles/NavBar.module.css";
import { ThemeContext } from "../context/ThemeContext";

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
                  <li><a href="#discover" onClick={handleLinkClick}><FaCompass /> Discover</a></li>
                  <li><a href="#hotels" onClick={handleLinkClick}><FaHotel /> Hotels</a></li>
                  <li><a href="#things-to-do" onClick={handleLinkClick}><FaTasks /> Things to Do</a></li>
                  <li><a href="#group-voting" onClick={handleLinkClick}><FaUsers /> Group Voting</a></li>
                  <li><a href="#restaurants" onClick={handleLinkClick}><FaUtensils /> Restaurants</a></li>
                  <li><a href="#flights" onClick={handleLinkClick}><FaPlane /> Flights</a></li>
                  <li><a href="#book-hostels" onClick={handleLinkClick}><FaBed /> Book Hostels</a></li>
                  <li><a href="#reviews" onClick={handleLinkClick}><FaStar /> Reviews</a></li>
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
