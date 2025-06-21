import React, { useContext } from 'react';
import styles from '../styles/Discover.module.css'; 
import { ThemeContext } from '../context/ThemeContext';

const Discover = () => {
    const{theme}=useContext(ThemeContext);

  return (
    <div className={`${styles.discoverContainer}${theme ==='dark' ? 'dark':'light'}`}>
        <h1 className={styles.heading}>Welcome to the Discover Page</h1>
        <p className={styles.description}>
            Explore popular destinations,attractions,and hidden gems.
        </p>

        <div className={styles.cardSection}>
            <div className={styles.card}>
                <img src='/images/paris-bg.jpg' alt='Paris'/>
                <h3>Paris</h3>
                <p>City of Love</p>
            </div>
            <div className={styles.card}>
                <img src='/images/Bali-bg.jpg' alt='Bali'/>
                <h3>Bali</h3>
                <p>Tropical Escape</p>
            </div>
        </div>
    </div>
  );
};

export default Discover;
