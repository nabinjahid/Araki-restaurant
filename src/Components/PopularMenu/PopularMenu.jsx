import React, { useEffect, useState } from "react";
import Heading from "../SectionTitle/Heading";
import MenuItem from "../../Pages/Home/MenuItem/MenuItem";
import useMenu from "../../Hooks/useMenu";
import Button from "../Button/Button";

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
      <div className="grid md:grid-cols-2 gap-4 space-y-5">
        {popularMenu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button></Button>
      </div>
    </div>
  );
};

export default PopularMenu;
