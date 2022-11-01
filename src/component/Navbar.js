import React from 'react';
import styles from "./Navbar.module.css";
import logo from "../images/logo1.png";

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
            {/* <div className={styles.custom}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" className={styles.shape}></path>
    </svg>
</div> */}
                <ul className={styles.list}>
                    <li>Home Page</li>
                    <li>Products</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className={styles.logo}>
                <img className={styles.logo} src={logo} alt="Logo"/>
            </div>
        </header>
    );
};

export default Navbar;