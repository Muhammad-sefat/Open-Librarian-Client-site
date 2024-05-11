import AboutUs from "./AboutUs";
import Blog from "./Blog";
import Carousel from "./Carousel";
import ContactUs from "./ContactUs";
const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <Blog></Blog>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
