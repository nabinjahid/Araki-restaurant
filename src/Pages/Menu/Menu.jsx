import Button from "../../Components/Button/Button";
import Cover from "../../Components/Cover/Cover";
import PopularMenu from "../../Components/PopularMenu/PopularMenu";
import Heading from "../../Components/SectionTitle/Heading";
import pageCover from "../../assets/menu/banner3.jpg"

const Menu = () => {
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
        <PopularMenu></PopularMenu>
        <div className="text-center my-8"><Button></Button></div>
      </div>

      {/* ---------coppy past for design_____ */}
      <Cover
        img={pageCover}
        headding="Our Menu"
        subHeadding="Would you like a dish ! "
        height={"500px"}
      ></Cover>
      <div className="md:mt-20 my-16 md:mb-10">
        <Heading headding={"Tody's Offer"} subHeading={"Don't miss"}></Heading>
      </div>
      <div>
        <PopularMenu></PopularMenu>
        <div className="text-center my-8"><Button></Button></div>
       
      </div>
      <Cover
        img={pageCover}
        headding="Our Menu"
        subHeadding="Would you like a dish ! "
        height={"500px"}
      ></Cover>
      <div className="md:mt-20 my-16 md:mb-10">
        <Heading headding={"Tody's Offer"} subHeading={"Don't miss"}></Heading>
      </div>
      <div>
        <PopularMenu></PopularMenu>
        <div className="text-center my-8"><Button></Button></div>
      </div>
    </div>
  );
};

export default Menu;
