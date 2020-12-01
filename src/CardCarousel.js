import { CarouselProvider, Slider, ButtonBack, ButtonNext } from "pure-react-carousel";
import React from "react";

import CustomCardSlide from "../components/CustomCardSlide";
import CustomDotGroup from "../components/CustomDotGroup";

const CardCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1.25}
    totalSlides={6}
    visibleSlides={3}
    style={{ width: "900px" }}
  >
    <Slider>
      <CustomCardSlide
        image="https://place-hold.it/800x800&text=Matthew&fontsize=32"
        index={0}
        header="Matthew House"
        meta="Friend"
      />
      <CustomCardSlide
        header="Elliot Baker"
        image="https://place-hold.it/800x800&text=Elliot&fontsize=32"
        index={1}
        meta="Friend"
      />
      <CustomCardSlide
        header="Steve Sanders"
        image="https://place-hold.it/800x800&text=Steve&fontsize=32"
        index={2}
        meta="Friend"
      />
      <CustomCardSlide
        header="Maky Brake"
        image="https://place-hold.it/800x800&text=Maky&fontsize=32"
        index={3}
        meta="Friend"
      />
      <CustomCardSlide
        header="Lotta Hart"
        image="https://place-hold.it/800x800&text=Lotta&fontsize=32"
        index={4}
        meta="Friend"
      />
      <CustomCardSlide
        header="Phoenix Wright"
        image="https://place-hold.it/800x800&text=Phoenix&fontsize=32"
        index={5}
        meta="Friend"
      />
    </Slider>

    <ButtonBack>Back</ButtonBack>
    <ButtonNext>Next</ButtonNext>
  </CarouselProvider>
);

export default CardCarousel;
