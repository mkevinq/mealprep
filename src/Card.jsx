import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className='card'>
            <img src={props.imgsrc}></img>
            <div id='title'>
                <h3>{props.title}</h3>
                <div>
                    <img></img>
                    <h6>{props.rating}</h6>
                </div>
            </div>
            <div id='desc'>
                <div>
                    <img></img>
                </div>
                <p>{props.time} Minutes</p>
                <p>{props.calories} Calories</p>
                <p>{props.servings} Servings</p>
            </div>
        </div>
    );
}