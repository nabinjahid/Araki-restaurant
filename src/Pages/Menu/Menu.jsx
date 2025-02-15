import Button from "../../Components/Button/Button";
import Cover from "../../Components/Cover/Cover";
import PopularMenu from "../../Components/PopularMenu/PopularMenu";
import Heading from "../../Components/SectionTitle/Heading";
import useMenu from "../../Hooks/useMenu";
import pageCover from "../../assets/menu/banner3.jpg";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import saladBg from "../../assets/menu/salad-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Cover
        img={pageCover}
        headding="Our Menu"
        subHeadding="Would you like a dish ! "
        height={"700px"}
      ></Cover>
      <div className="md:mt-20 my-16 md:mb-10">
        <Heading headding={"Tody's Offer"} subHeading={"Don't miss"}></Heading>
      </div>
      <div>
        {/* <PopularMenu></PopularMenu> */}
        <MenuCategory item={offered}></MenuCategory>
        <div className="text-center my-8">
          <Button btn={"order your favorite food"}></Button>
        </div>
      </div>

      {/* dessert */}
      <div className="space-y-8 mt-10">
        <Cover
          img={dessertBg}
          headding="DESSERTS"
          subHeadding="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          height={"700px"}
        ></Cover>
        <MenuCategory item={dessert}></MenuCategory>
        <div className="text-center my-8">
          <Button btn={"order your favorite food"}></Button>
        </div>
      </div>
      {/* pizza */}
      <div className="space-y-8 mt-10">
        <Cover
          img={pizzaBg}
          headding="Pizza"
          subHeadding="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          height={"700px"}
        ></Cover>
        <MenuCategory item={pizza}></MenuCategory>
        <div className="text-center my-8">
          <Button btn={"order your favorite food"}></Button>
        </div>
      </div>
      {/* salads */}
      <div className="space-y-8 mt-10">
        <Cover
          img={saladBg}
          headding="Salads"
          subHeadding="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          height={"700px"}
        ></Cover>
        <MenuCategory item={salad}></MenuCategory>
        <div className="text-center my-8">
          <Button btn={"order your favorite food"}></Button>
        </div>
      </div>
      {/* soup */}
      <div className="space-y-8 my-10 ">
        <Cover
          img={soupBg}
          headding="Soups"
          subHeadding="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          height={"700px"}
        ></Cover>
        <MenuCategory item={soup}></MenuCategory>
        <div className="text-center my-8">
          <Button btn={"order your favorite food"}></Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
