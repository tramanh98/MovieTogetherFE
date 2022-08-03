import { useEffect, useState } from "react";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import Button, { OutlineButton } from "../button/Button";
// import Modal, { ModalContent } from "../modal/Modal";

// import tmdbApi, { category, movieType } from "../../api/tmdbApi";
// import apiConfig from "../../api/apiConfig";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { useNavigate } from "react-router-dom";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "./slider.scss";

import { HomeOutlined } from "@ant-design/icons";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const HeroSlide = () => {
  SwiperCore.use([Autoplay]);

  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      //   try {
      //     const response = await tmdbApi.getMoviesList(movieType.popular, {
      //       params,
      //     });
      //     setMovieItems(response.results.slice(1, 4));
      //     console.log(response);
      //   } catch {
      //     console.log("error");
      //   }
    };
    getMovies();
  }, []);

  return (
    <div className="heroSlide">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://i.im.ge/2022/08/02/FyG76P.banner.jpg" />
        </SwiperSlide>
      </Swiper>
      <FilterBox />
    </div>
  );
};

const HeroSlideItem = (props: any) => {
  let navigate = useNavigate();

  const item = props.item;

  //   const background = apiConfig.originalImage(
  //     item.backdrop_path ? item.backdrop_path : item.poster_path
  //   );

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);

    // const videos = await tmdbApi.getVideos(category.movie, item.id);

    // if (videos.results.length > 0) {
    //   const videSrc = "https://www.youtube.com/embed/" + videos.results[0].key;
    //   modal
    //     .querySelector(".modal__content > iframe")
    //     .setAttribute("src", videSrc);
    // } else {
    //   modal.querySelector(".modal__content").innerHTML = "No trailer";
    // }

    // modal.classList.toggle("active");
  };

  //   return (
  //     <div
  //       className={`hero-slide__item ${props.className}`}
  //       style={{ backgroundImage: `url(${background})` }}
  //     >
  //       <div className="hero-slide__item__content container">
  //         <div className="hero-slide__item__content__info">
  //           <h2 className="title">{item.title}</h2>
  //           <div className="overview">{item.overview}</div>
  //           <div className="btns">
  //             <Button onClick={() => navigate("/movie/" + item.id)}>
  //               Watch now
  //             </Button>
  //             <Button variant="outlined" onClick={setModalActive}>
  //               Watch trailer
  //             </Button>
  //           </div>
  //         </div>
  //         <div className="hero-slide__item__content__poster">
  //           <img src={apiConfig.w500Image(item.poster_path)} alt="" />
  //         </div>
  //       </div>
  //     </div>
  //   );
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const tabList = [
  {
    title: "Hotel & motel",
  },
  {
    title: "Flights",
  },
  {
    title: "Long stays",
  },
];

const FilterBox = () => {
  return (
    <>
      <div className="wrapFilter">
        <Tabs defaultActiveKey="1">
          {tabList.map((t, i) => (
            <TabPane
              className="m-0"
              tab={<TabPaneCustom title={t.title} />}
              key={i + 1}
            >
              {/* Content of Tab Pane {i} */}
              {/* <TabContent/> */}
            </TabPane>
          ))}
        </Tabs>
      </div>
      <TabContent />
    </>
  );
};

const TabPaneCustom = ({ title }: { title: string }) => {
  return (
    <>
      <span className="d-flex flex-column justify-content-center">
        <HomeOutlined className="m-0" />
        <span>{title}</span>
      </span>
    </>
  );
};

const TabContent = () => {
  return (
    <div className="tabContent p-3">
      <h1>halooooo</h1>
    </div>
  );
};
const t = {};

export default HeroSlide;
