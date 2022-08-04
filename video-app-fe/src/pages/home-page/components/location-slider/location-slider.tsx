import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
const LocationSlider = () => {
  return (
    <Swiper
      loop={true}
      slidesPerView={3}
      spaceBetween={30}
      slidesPerGroup={3}
      navigation={true}
      modules={[FreeMode, Navigation, Thumbs]}
    >
      <SwiperSlide>
        <div className="circle">
          <img src="https://i.im.ge/2022/08/02/FyG76P.banner.jpg" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.im.ge/2022/08/02/FyG76P.banner.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.im.ge/2022/08/02/FyG76P.banner.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.im.ge/2022/08/02/FyG76P.banner.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default LocationSlider;
