import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imag1 from "../../../assets/home/01.jpg"; // Correct import
import imag2 from "../../../assets/home/02.jpg"; // Correct import
import imag3 from "../../../assets/home/03.png"; // Correct import
import imag4 from "../../../assets/home/04.jpg"; // Correct import
import imag5 from "../../../assets/home/05.png"; // Correct import
import imag6 from "../../../assets/home/06.png"; // Correct import

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={imag1} alt="Slide 1" />
      </div>
      <div>
        <img src={imag2} alt="Slide 2" />
      </div>
      <div>
        <img src={imag3} alt="Slide 3" />
      </div>
      <div>
        <img src={imag4} alt="Slide 1" />
      </div>
      <div>
        <img src={imag5} alt="Slide 2" />
      </div>
      <div>
        <img src={imag6} alt="Slide 3" />
      </div>
    </Carousel>
  );
};

export default Banner;
