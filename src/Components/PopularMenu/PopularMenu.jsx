import React, { useEffect, useState } from "react";
import Heading from "../SectionTitle/Heading";
import MenuItem from "../../Pages/Home/MenuItem/MenuItem";
import useMenu from "../../Hooks/useMenu";
import Button from "../Button/Button";
import MenuCategory from "../../Pages/Menu/MenuCategory";

const PopularMenu = () => {
  const [menu, loading] = useMenu();
  const popularMenu = menu.filter((item) => item.category === "popular");
  // useEffect(() => {
  //   fetch('menu.json')
  //   .then(res => res.json())
  //   .then(data=>{
  //       const popularItems = data.filter(item =>item.category==='popular')
  //       setMenu(popularItems)
  //   })
  // }, []);

  if (loading) {
    return <h1 className="text-3xl text-center font-bold">Loading........</h1>;
  }
  return (
    <div className="my-10">
      <MenuCategory item={popularMenu}></MenuCategory>
      
    </div>
  );
};

export default PopularMenu;
