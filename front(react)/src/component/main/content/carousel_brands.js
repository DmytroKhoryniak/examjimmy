import React from "react";
import style from '../content/carousel_brands.module.css';
import { Swiper, SwiperSlide} from 'swiper/react';
import swiper1 from '../../../images/img5.jpg';
import swiper2 from '../../../images/img6.jpg';
import swiper3 from '../../../images/img7.jpg';
import swiper4 from '../../../images/img8.jpg';
import swiper5 from '../../../images/img9.jpg';
import swiper6 from '../../../images/img10.jpg';
import 'swiper/css';
import Img from "../../../elements/img";
import Button from "../../../elements/button";

function Carousel_brands() {
  
  return (
    <>
    <div className={style.carouselBrandsContainer}>
      <p className={style.brandText}>Бренди, які ми представляємо</p>
    </div>
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
      <SwiperSlide><div style={{display: "flex", justifyContent: "center"}}>
        <Img src={swiper5} alt="swiper1"></Img>
        </div>
      </SwiperSlide>
      <SwiperSlide><div style={{display: "flex", justifyContent: "center"}}>
        <Img src={swiper6} alt="swiper1"></Img>
        </div>
      </SwiperSlide>
    </Swiper>
    <br/>
    <Button/>
    </>
  );
}

export default Carousel_brands;
