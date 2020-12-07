import React from 'react';
import './Card.css';
import star from "./assets/order-page/star.svg";
import alarm_clock from "./assets/order-page/lightning_bolt.svg";
import lightning_bolt from "./assets/order-page/lightning_bolt.svg";
import person from "./assets/order-page/lightning_bolt.svg";

function Card(props) {
    return (
        <div className={props.cardType}>
            <img id='recipe_image' src={props.imgsrc}></img>
            <div id='title-info'>
                <h5 id='recipe_title'>{props.title}</h5>
                <div id='rating'>
                    <img id='rating_image' src={star}></img>
                    <h6 id='rating_num'>{props.rating}</h6>
                </div>
            </div>
            <div id='desc'>
                <div className='descriptor'>
                    <img className='descriptor_image' src={alarm_clock}></img>
                    <p className='descriptor_text'>{props.time} Minutes</p> 
                </div>
                <div className='descriptor'>
                    <img className='descriptor_image' src={lightning_bolt}></img>
                    <p className='descriptor_text'>{props.calories} Calories</p>
                </div>
                <div className='descriptor'>
                    <img className='descriptor_image' src={person}></img>
                    <p className='descriptor_text'>{props.servings} Servings</p>
                </div>
            </div>
        </div>
    );
}

export default Card;