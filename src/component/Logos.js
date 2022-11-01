import React from 'react';
import styles from "./Logos.module.css";
import starbucks from "../images/logo-1987.png";
import nespresso from "../images/download (2).png";
import nesscafe from "../images/download (1).png";
const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>who support us</h3>
            <div>
                <img src={starbucks} alt="logo"/>
                <img src={nespresso} alt="logo"/>
                <img src={nesscafe} alt="logo"/>
            </div>
        </div>
    );
};

export default Logos;