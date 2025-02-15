import React from "react";
import Banner from "./Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../../Components/PopularMenu/PopularMenu";
import Fetured from "./Fetured/Fetured";
import Review from "./Review/Review";
import { Helmet } from "react-helmet-async";
import Heading from "../../Components/SectionTitle/Heading";
import Button from "../../Components/Button/Button";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Araki-Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <div className="mt-20">
        <Heading headding={"From Our Menu"} subHeading={"Poular Items"} />
      </div>
      <PopularMenu></PopularMenu>
      <div className="mt-8 text-center">
        <Button btn={'view full menu'}></Button>
      </div>
      <Fetured></Fetured>
      <Review></Review>
    </div>
  );
};

export default Home;
