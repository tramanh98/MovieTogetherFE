import axios from "axios";
import React, { useEffect, useState } from "react";
import HeroSlide from "./components/banner/slider";
import LocationSlider from "./components/location-slider/location-slider";
import LocationTabs from "./components/recommended-location-cards/recommended-location-tabs";

export const HomePage = () => {
  const [video, setVideo] = useState<any>({});
  useEffect(() => {
    // try {
    //   const response = async () => {
    //     const { data } = await axios.get("http://localhost:3001/api/video");
    //     setVideo([...data]);
    //   };
    //   response();
    //   // const data = await response.json();
    // } catch (error) {
    //   console.log(error);
    // }
  }, []);
  return (
    <>
      {/* banner */}
      <HeroSlide />
      <div className="container">
        <LocationTabs />
        <LocationSlider />
      </div>
    </>
  );
};
