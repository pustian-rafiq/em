import React, { useRef, useState } from "react";
import Image from "next/image";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// mui components
import Box from "@mui/material/Box";

// css
import styles from "../../styles/HeroSection/HeroSection.module.css";


const Slider = () => {
  return (
    <Box className={styles.slider}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide
          style={{
            width: "100%",
            // height: "350px",
            textAlign: "center",
          }}
          className={styles.slider_img}
        >
          <Image
            src="/images/slider/slider4.png"
            alt="eshan_marketing_slider"
            layout="fill"
            //  sx={{}}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "100%",
            // height: "450px",
            textAlign: "center",
          }}
          className={styles.slider_img}
        >
          <Image
            src="/images/slider/slider1.png"
            alt="eshan_marketing_slider"
            layout="fill"
            //  sx={{}}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "100%",
            // height: "450px",
            textAlign: "center",
          }}
          className={styles.slider_img}
        >
          <Image
            src="/images/slider/slider6.jpg"
            alt="eshan_marketing_slider"
            layout="fill"
            //  sx={{}}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "100%",
            // height: "450px",
            textAlign: "center",
          }}
          className={styles.slider_img}
        >
          <Image
            src="/images/slider/slider5.jpg"
            alt="eshan_marketing_slider"
            layout="fill"
            //  sx={{}}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Slider;
