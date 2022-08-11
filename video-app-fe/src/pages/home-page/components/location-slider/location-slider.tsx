import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./location-slider.scss";
const LocationSlider = () => {
  const imgList = [
    "https://pix6.agoda.net/geo/city/13170/1_13170_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
    "https://pix6.agoda.net/geo/city/2758/1_2758_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
    "https://pix6.agoda.net/geo/city/16440/1_16440_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
    "https://pix6.agoda.net/geo/city/15932/1_15932_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
    "https://pix6.agoda.net/geo/city/17190/1_17190_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
    "https://pix6.agoda.net/geo/city/2679/1_2679_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
    "https://pix6.agoda.net/geo/city/16552/1_16552_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
  ];
  return (
    <div>
      <h2>Top destinations in Vietnam</h2>
      <Swiper
        className="swp"
        loop={true}
        slidesPerView={6}
        spaceBetween={30}
        slidesPerGroup={6}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {imgList.map((i) => (
          <SwiperSlide>
            <div>
              <img className="mx-auto" alt="example" src={i} />
              <div className="mt-2 d-flex flex-column justify-content-center">
                <span>
                  <b>Hoi An</b>
                </span>
                <span>1,652 accommodations</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LocationSlider;
