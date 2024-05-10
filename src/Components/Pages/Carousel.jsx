// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import bgImg1 from "../assets/images/carousel1.jpg";
import bgImg2 from "../assets/images/carousel2.jpg";
import bgImg3 from "../assets/images/carousel3.jpg";
import Slide from "./Slide";

export default function App() {
  return (
    <div className=" px-8 mx-auto my-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={bgImg1}
            text={"Get Your Web Devlopment Projects Done In Minutes"}
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgImg2}
            text={"Get Your Grapics Design Projects Done In Minutes"}
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgImg3}
            text={"Get Your Digital Marketing Companies Done In Minutes"}
          ></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
