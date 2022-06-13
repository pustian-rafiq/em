import React from "react";

// our components
import Title from "../components/Header/Title";
import HeroSection from "../components/HeroSection/HeroSection";
import Products from "../components/Products/Products";
import Map from "../components/Map/Map";
import Reviews from "../components/Reviews/Reviews";
import ScrollTop from "../components/ScrollTop/ScrollTop";
//import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

const products = [
  { id: 1, title: "Home", image: "/images/products/m-1.jpg" },
  { id: 2, title: "About", image: "/images/products/m-2.jpg" },
  { id: 3, title: "Contact", image: "/images/products/m-3.jpeg" },
  { id: 4, title: "Settings", image: "/images/products/m-4.jpeg" },
  { id: 5, title: "Organization", image: "/images/products/m-5.jpeg" },
  { id: 6, title: "School", image: "/images/products/m-1.jpg" },
  { id: 7, title: "College", image: "/images/products/m-2.jpg" },
  { id: 8, title: "Contact", image: "/images/products/m-3.jpeg" },
  { id: 9, title: "Settings", image: "/images/products/m-4.jpeg" },
  { id: 10, title: "Organization", image: "/images/products/m-5.jpeg" },
  { id: 11, title: "School", image: "/images/products/m-1.jpg" },
  { id: 12, title: "College", image: "/images/products/m-2.jpg" },
];

const Home = () => {
  return (
    <>
      <Title>Ehsan Marketing</Title>
      <HeroSection />
      <Products products={products} title="Related Products" />
      <Reviews />
      <Map />
      <ScrollTop />
    </>
  );
};

export default Home;
