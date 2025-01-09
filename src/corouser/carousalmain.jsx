import React from "react";
import ImageSlider from "./carosal.jsx";
const App = () => {
  const images = [
    "bannerimg1.jpg",
    "bannerimg2.jpg",
    "backbanner.jpg",
    "bannerimg3.jpg",
    "backbanner1.jpg"
  ];
  return (
    <div style={{backgroundColor:"red",width:"1510px"}}>
      <ImageSlider  images={images} interval={800} />
    </div>



  );
};
export default App;


