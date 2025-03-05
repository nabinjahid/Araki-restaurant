import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../FoodCard/FoodCard";
import TabsCategory from "../TabsCategory/TabsCategory";
import { useParams } from "react-router-dom";

const TabOptions = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  // console.log(category, initialIndex);
  // console.log (initialIndex);

  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  // const offered = menu.filter((item) => item.category === "offered");

  const [tabIndex, setTabIndex] = useState(initialIndex);

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Salad</Tab>
        <Tab>Pizza</Tab>
        <Tab>Soup</Tab>
        <Tab>Dessert</Tab>
        <Tab>Drinks</Tab>
      </TabList>

      <TabPanel>
        <TabsCategory item={salad}></TabsCategory>
      </TabPanel>
      <TabPanel>
        <TabsCategory item={pizza}></TabsCategory>
      </TabPanel>
      <TabPanel>
        <TabsCategory item={soup}></TabsCategory>
      </TabPanel>
      <TabPanel>
        <TabsCategory item={dessert}></TabsCategory>
      </TabPanel>
      <TabPanel>
        <TabsCategory item={drinks}></TabsCategory>
      </TabPanel>
    </Tabs>
  );
};

export default TabOptions;
