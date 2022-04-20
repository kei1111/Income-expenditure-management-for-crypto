import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials: React.FC = () => (
  <Carousel className="bg-black text-white py-10 lg:py-20 is-draggable">
    <CarouselItem index={0}>
      <Review by="Axel (showtime)">
        Margelo and Showtime both share ssssssssssss ssssssssssss ssssssssssss
      </Review>
    </CarouselItem>
    <CarouselItem index={1}>
      <Review by="Axel (showtime)">
        Margelo sdf Showtime both share 999999999 999999999 999999999
      </Review>
    </CarouselItem>
    <CarouselItem index={2}>
      <Review by="Axel (showtime)">
        Margelo and Showtime both share 7777777777777 7777777777777
        7777777777777
      </Review>
    </CarouselItem>
    <CarouselItem index={3}>
      <Review by="Axel (showtime)">
        Margelo and Showtime both share 33333333 33333333 33333333
      </Review>
    </CarouselItem>
    <CarouselItem index={4}>
      <Review by="Axel (showtime)">
        Margelo and Showtime both share 0000000 0000000 0000000
      </Review>
    </CarouselItem>
  </Carousel>
);

export default Testimonials;
