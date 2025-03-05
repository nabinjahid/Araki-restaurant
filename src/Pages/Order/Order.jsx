import React from "react";
import Cover from "../../Components/Cover/Cover";
import OrderCover from "../../assets/shop/banner2.jpg";
import TabOptions from "../../Components/Tabs/TabOptions";

const Order = () => {
  return (
    <div>
      <Cover
        img={OrderCover}
        headding={"Our Shope"}
        subHeadding={"Would You Like To Try A Dish!"}
        height={"700px"}
      ></Cover>
      <div className="mt-20 mb-8 text-center">
        <TabOptions></TabOptions>
      </div>
    </div>
  );
};

export default Order;
