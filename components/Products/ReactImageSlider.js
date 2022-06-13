import React from "react";
import SliderImage from "react-zoom-slider";

const data = [
  {
    image:
      "https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-1-org.jpg",
  },
  {
    image:
      "https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-4-org.jpg",
  },
  {
    image:
      "https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-10-org.jpg",
  },
  {
    image:
      "https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-mau-bac-1-org.jpg",
  },
];

export default function reactImageSlider() {
  return (
    <SliderImage
      data={data}
      width="100%"
      direction="right"
    />
  );
}
