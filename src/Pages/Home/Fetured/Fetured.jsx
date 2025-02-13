import React from "react";
import Heading from "../../../Components/SectionTitle/Heading";
import feturedImg from "../../../assets/home/featured.jpg";
import './fetured.css'

const Fetured = () => {
  return (
    <div className="fetured relative bg-fixed my-16 pt-7 text-white">
        <div className="absolute inset-0 w-full h-full bg-black/50"></div>
      <div className="relative"><Heading headding={"From our menu"} subHeading={"Check it out"}></Heading></div>
      <div className="flex pb-20 pt-12 px-36 relative">
        <div>
          <img src={feturedImg} alt="" />
        </div>
        <div className="ml-10">
          <p>March 20, 2025</p>
          <h2 className="uppercase">Where can i get some?</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            quibusdam nostrum, cum dignissimos veritatis quo et doloribus enim
            possimus consequatur nihil ad accusantium officia recusandae sunt
            fugiat quis labore optio voluptas earum ducimus, odio voluptatem.
            Vero dolores in eum, odio aliquam, saepe omnis quasi voluptas
            ratione aperiam totam repudiandae labore?
          </p>
          <button className="btn btn-outline">Default</button>
        </div>
      </div>
    </div>
  );
};

export default Fetured;
