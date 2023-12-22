import React from 'react';
import Layout from '../component/layout/layout';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import swiper1 from '../images/img1.jpg';
import swiper2 from '../images/img2.jpg';
import swiper3 from '../images/img3.jpg';
import swiper4 from '../images/img4.jpg';
import Img from "../elements/img";
import Carousel_brands from '../component/main/content/carousel_brands'

function Home() {
  return (
    <>
    <Layout>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      <SwiperSlide>
        <div style={{display: "flex", justifyContent: "center"}}>
        <Img src={swiper1} alt="swiper1"></Img>
        </div>
      </SwiperSlide>
      <SwiperSlide><div style={{display: "flex", justifyContent: "center"}}>
        <Img src={swiper2} alt="swiper1"></Img>
        </div> 
      </SwiperSlide>
      <SwiperSlide><div style={{display: "flex", justifyContent: "center"}}>
        <Img src={swiper3} alt="swiper1"></Img>
        </div>
      </SwiperSlide>
      <SwiperSlide><div style={{display: "flex", justifyContent: "center"}}>
        <Img src={swiper4} alt="swiper1"></Img>
        </div>
      </SwiperSlide>
    </Swiper>
    <Carousel_brands/>

    <h1>Database</h1>
    </Layout>
    </>
  );
}

export default Home;
