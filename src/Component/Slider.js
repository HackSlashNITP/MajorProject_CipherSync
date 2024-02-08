import React from "react";
import Slider from "react-slick";
import { Card } from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SliderS() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <Slider {...settings}>
      <div>
        <Card name='User experience
designers'/>
      </div>
      <div>
        <Card name='User experience
designers'/>
      </div>
      <div>
        <Card name='User experience
designers'/>
      </div>
      <div>
        <Card name='User experience
designers'/>
      </div>
      <div>
        <Card name='User experience
designers'/>
      </div>
      <div>
        <Card name='User experience
designers'/>
      </div>
    </Slider>
  );
}
