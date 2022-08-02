import React, { useState, useEffect, useRef } from "react";

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

import "./slider.scss";
import { useNavigate } from "react-router-dom";
import { Box, Button, Modal, Typography } from "@mui/material";
import { FreeMode, Navigation, Thumbs } from "swiper";
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
    <div className="hero-slide">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {/* {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))} */}
        <SwiperSlide>
          <img src="https://i.im.ge/2022/08/02/FyG76P.banner.jpg" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide> */}
      </Swiper>
      {/* {movieItems.map((item, i) => (
        <TrailerModal key={i} item={item} />
      ))} */}
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

const TrailerModal = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const item = props.item;

  const iframeRef = useRef(null);

  //   const onClose = () => iframeRef.current.setAttribute("src", "");

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
    // <Modal active={false} id={`modal_${item.id}`}>
    //   <ModalContent onClose={onClose}>
    //     <iframe
    //       ref={iframeRef}
    //       width="100%"
    //       height="500px"
    //       title="trailer"
    //     ></iframe>
    //   </ModalContent>
    // </Modal>
  );
};

export default HeroSlide;
