import React, { useEffect, useState } from "react";
import Heading from "../../../Components/SectionTitle/Heading";
import { FaQuoteLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-10">
      <div>
        <Heading
          headding={"Testimonials"}
          subHeading={"What Our Clients Say"}
        ></Heading>
      </div>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="px-12 py-6 flex flex-col items-center space-y-5">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <div className="text-5xl">
                  <FaQuoteLeft />
                </div>
                <div>
                  <p className="text-center w-9/12 mx-auto">{review.details}</p>
                  <h2 className="text-3xl mt-5 text-orange-400 text-center">
                    {review.name}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
