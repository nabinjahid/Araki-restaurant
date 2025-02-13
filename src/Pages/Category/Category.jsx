import React from "react";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Heading from "../../Components/SectionTitle/Heading";

const Category = () => {
  return (
    <div className="my-7">
      <Heading
        headding={'Order Online'}
        subHeading={'From 11am to 10pm'}
      ></Heading>
      <Swiper
        slidesPerView={4} // Set to 3 to display three images at a time, and have one center
        spaceBetween={30} // Set spacing between slides
        centeredSlides={true} // Ensure the selected slide is always in the center
        pagination={{
          clickable: true,
        }}
        initialSlide={2} // Set the third slide as the default
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="Slide 1" />
          <h2 className="text-3xl uppercase text-center -mt-16 text-white">
            Salads
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="Slide 2" />
          <h2 className="text-3xl uppercase text-center -mt-16 text-white">
            Pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="Slide 3" />
          <h2 className="text-3xl uppercase text-center -mt-16 text-white">
            Soups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="Slide 4" />
          <h2 className="text-3xl uppercase text-center -mt-16 text-white">
            Desserts
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="Slide 5" />
          <h2 className="text-3xl uppercase text-center -mt-16 text-white">
            Salads
          </h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
