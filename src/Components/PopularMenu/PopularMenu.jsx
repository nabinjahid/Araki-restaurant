import React, { useEffect, useState } from "react";
import Heading from "../SectionTitle/Heading";
import MenuItem from "../../Pages/Home/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch('menu.json')
    .then(res => res.json())
    .then(data=>{
        const popularItems = data.filter(item =>item.category==='popular')
        setMenu(popularItems)
    })
  }, []);
  return (
    <div className="my-10">
      <Heading headding={"From Our Menu"} subHeading={"Poular Items"} />
      <div className="grid md:grid-cols-2 gap-4 space-y-5">
        {
            menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
    </div>
  );
};

export default PopularMenu;
