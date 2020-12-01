import { CarouselProvider, Slider, ButtonBack, ButtonNext } from "pure-react-carousel";
import React from "react";
import butter_chicken from "./assets/order-page/recipes-images/butter-chicken.png";
import lime_chicken_burritos from "./assets/order-page/recipes-images/lime-chicken-burrito.png";
import CustomCardSlide from "./CustomCardSlide.js";
import './CardCarousel.css';

const CardCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1.25}
    totalSlides={6}
    visibleSlides={3}
    id={"carousel"}
  >
    <ButtonBack className={"carousel_button"} id={"left_button"}>&larr;</ButtonBack>
    <Slider id={"slider"}>
      <CustomCardSlide
        id={0}
        title='Butter Chicken' 
        rating={4.9} 
        time={45} 
        calories={450} 
        servings={6} 
        imgsrc={butter_chicken}
      />
      <CustomCardSlide
        id={1}
        title='Lime Chicken Burritos' 
        rating={4.8} 
        time={30} 
        calories={300} 
        servings={8} 
        imgsrc={lime_chicken_burritos}
      />
      <CustomCardSlide
        id={2}
        title='Lime Chicken Burritos' 
        rating={4.9} 
        time={45} 
        calories={450} 
        servings={6} 
        imgsrc={butter_chicken}
      />
      <CustomCardSlide
        id={3}
        title='Butter Chicken' 
        rating={4.9} 
        time={45} 
        calories={450} 
        servings={6} 
        imgsrc={butter_chicken}
      />
      <CustomCardSlide
        id={4}
        title='Lime Chicken Burritos' 
        rating={4.8} 
        time={30} 
        calories={300} 
        servings={8} 
        imgsrc={lime_chicken_burritos}
      />
      <CustomCardSlide
        id={5}
        title='Lime Chicken Burritos' 
        rating={4.9} 
        time={45} 
        calories={450} 
        servings={6} 
        imgsrc={butter_chicken}
      />
    </Slider>
    <ButtonNext className={"carousel_button"} id={"right_button"}>&rarr;</ButtonNext>
  </CarouselProvider>
);

export default CardCarousel;
