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

import { HomeOutlined, SearchOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
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
    <section className="containerTitle">
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
    </section>
  );
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
    <div className="container wrapOutsideFilter">
      <div className="wrapFilter mx-auto">
        <Tabs defaultActiveKey="1">
          {tabList.map((t, i) => (
            <TabPane
              className="m-0"
              tab={<TabPaneCustom title={t.title} />}
              key={i + 1}
            ></TabPane>
          ))}
        </Tabs>
      </div>
      <TabContent />
    </div>
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
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="container tabContent px-3 py-5 mx-auto">
        <Form.Item className="w-100" name="location">
          <Input
            className="w-100"
            size="large"
            placeholder="Enter the location"
            prefix={<SearchOutlined />}
          />
        </Form.Item>
      </div>
      <div className="d-flex justify-content-center btn-submit">
        <Form.Item>
          <Button
            shape="round"
            type="primary"
            htmlType="submit"
            className="w-100"
          >
            Search
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default HeroSlide;
