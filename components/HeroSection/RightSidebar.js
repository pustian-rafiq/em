import React, { useRef, useState } from "react";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// mui components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

// css
import styles from "../../styles/HeroSection/HeroSection.module.css";

const consumers = [
  {
    id: 1,
    name: "Mohimenol Munna",
    userId: 123456,
    type: "root consumer",
    image: "/images/products/m-1.jpg",
    country: "Bangladesh",
  },
  {
    id: 2,
    name: "Mohimenol Munna",
    userId: 123456,
    type: "root consumer",
    image: "/images/products/m-2.jpg",
    country: "Bangladesh",
  },
  {
    id: 3,
    name: "Mohimenol Munna",
    userId: 123456,
    type: "root consumer",
    image: "/images/products/m-3.jpeg",
    country: "Bangladesh",
  },
  {
    id: 4,
    name: "Mohimenol Munna",
    userId: 123456,
    type: "root consumer",
    image: "/images/products/m-4.jpeg",
    country: "Bangladesh",
  },
  {
    id: 5,
    name: "Mohimenol Munna",
    userId: 123456,
    type: "root consumer",
    image: "/images/products/m-5.jpeg",
    country: "Bangladesh",
  },
  {
    id: 6,
    name: "Mohimenol Munna",
    userId: 123456,
    type: "root consumer",
    image: "/images/slider/slider1.png",
    country: "Bangladesh",
  },
  {
    id: 7,
    name: "Mohimenol Munna",
    userId: 123456,
    type: "root consumer",
    image: "/images/slider/slider2.jpeg",
    country: "Bangladesh",
  },
  {
    id: 8,
    name: "Mohimenol Munna",
    userId: 123456,
    type: "root consumer",
    image: "/images/slider/slider3.jpg",
    country: "Bangladesh",
  },
  {
    id: 9,
    name: "Mohimenol Munna",
    userId: 123456,
    type: "root consumer",
    image: "/images/slider/slider4.png",
    country: "Bangladesh",
  },
  {
    id: 10,
    name: "Mohimenol Munna",
    userId: 123456,
    type: "root consumer",
    image: "/images/slider/slider5.jpg",
    country: "Bangladesh",
  },
];

const RightSidebar = () => {
  return (
    <Box className={styles.right_sidebar}>
      <Box
        sx={{
          borderBottom: "1px dashed rgba(0, 0, 0, 0.25)",
          background: "var(--secondary)",
          padding: "5px",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="images/products/m-1.jpg"
              sx={{
                width: 50,
                height: 50,
                border: "2px solid var(--secondary)",
              }}
            />
          </Grid>

          <Grid item xs={8} sx={{ textAlign: "left" }}>
            <Typography variant="caption" component="p">
              H.M.A EHSAN
            </Typography>
            <Typography variant="caption" component="p">
              Inventor
            </Typography>
            <Typography variant="caption" component="p">
              Ehsan Marketing System
            </Typography>
            <Typography variant="caption" component="p">
              Founder,
            </Typography>
            <Typography variant="caption" component="p">
              Ehsan Marketing
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* slider  */}
      <Swiper
        direction={"vertical"}
        slidesPerView={4}
        spaceBetween={0}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        style={{
          textAlign: "center",
          height: "450px",
        }}
      >
        {consumers.map((consumer) => (
          <SwiperSlide
            key={consumer.id}
            style={{
              textAlign: "center",
              padding: "5px",
              minHeight: "90px",
              background: "var(--secondary)",
              borderBottom: "0.12rem solid #ffffff",
            }}
          >
            <Grid container>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={consumer.image}
                  sx={{
                    width: 50,
                    height: 50,
                    border: "2px solid var(--secondary)",
                  }}
                />
              </Grid>

              <Grid item xs={8} sx={{ textAlign: "left" }}>
                <Typography variant="caption" component="p">
                  {consumer.name}
                </Typography>
                <Typography variant="caption" component="p">
                  {consumer.userId}
                </Typography>
                <Typography variant="caption" component="p">
                  {consumer.type}
                </Typography>
                <Typography variant="caption" component="p">
                  {consumer.country}
                </Typography>
              </Grid>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default RightSidebar;
