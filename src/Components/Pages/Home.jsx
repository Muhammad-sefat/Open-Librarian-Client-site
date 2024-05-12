import AboutUs from "./AboutUs";
import Blog from "./Blog";
import BookCategories from "./BookCategories";
import Carousel from "./Carousel";
import ContactUs from "./ContactUs";
const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <BookCategories></BookCategories>
      <Blog></Blog>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
