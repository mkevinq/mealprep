import React from 'react';
import './Card.css';
import star from "./assets/order-page/star.svg";
import alarm_clock from "./assets/order-page/lightning_bolt.svg";
import lightning_bolt from "./assets/order-page/lightning_bolt.svg";
import person from "./assets/order-page/lightning_bolt.svg";

function Card(props) {
    return (
        <div className='card'>
            <img id='recipe_image' src={props.imgsrc}></img>
            <div id='title'>
                <h5 id='recipe_title'>{props.title}</h5>
                <div id='rating'>
                    <img src={star}></img>
                    <h6>{props.rating}</h6>
                </div>
            </div>
            <div id='desc'>
                <div className='descriptor'>
                    <img src={alarm_clock}></img>
                    <p>{props.time} Minutes</p> 
                </div>
                <div className='descriptor'>
                    <img src={lightning_bolt}></img>
                    <p>{props.calories} Calories</p>
                </div>
                <div className='descriptor'>
                    <img src={person}></img>
                    <p>{props.servings} Servings</p>
                </div>
            </div>
        </div>
    );
}

export default Card;