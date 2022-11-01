import React from 'react';
import styles from "./Banner.module.css";
import banner from "../images/banner1.jpg";
const Banner = () => {
    return (
        <div className={styles.container}>
            {/* <img className={styles.banner} src={banner} alt="banner" /> */}
            <div className={styles.textContainer}>
                <h1>zhamis Cake</h1>
                <p>
                    enjoy <span>Taste</span>
                </p>
            </div>
        </div>
    );
};

export default Banner;