import React, { Component } from 'react';

import Card from './Card';
import styles from "./Cards.module.css";

import card1 from "../images/card1.jpg"
import card2 from "../images/card2.jpg"
import card3 from "../images/card3.jpg"
import card4 from "../images/card4.jpg"
 
class Cards extends Component {
    constructor() {
        super()
        this.state ={
            productData : [
            {id: 1, image: card1 , name: "chocolate cake", cost:"50 $"},
            {id: 2, image: card2 , name: "cup cake", cost:"10 $"},
            {id: 3, image: card3 , name: "dunat", cost:"10 $"},
            {id: 4, image: card4 , name: "cake", cost:"60 $"}
        ]
    }
    }
    render() {
        return (
            <div className={styles.container}>
                {this.state.productData.map(product => <Card key={product.id} image={product.image} name={product.name} cost={product.cost} />)}
            </div>
        );
    }
}

export default Cards;