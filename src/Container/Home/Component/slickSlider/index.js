import React, { Component, useState, useEffect } from "react";
import { SliderWrapper } from "./style";
import { data } from "../../data";
import { useHistory } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation } from 'swiper';
import _reverse from "lodash/reverse";
SwiperCore.use(Navigation);

const BannerSlider = () => {

  const history = useHistory();
  const handleRedirectToComic = (id) => {
    history.push(`/comic/${id}`);
  };
  const [hotList, setHotList] = useState([]);
  useEffect(() => {
    const newList5 = _reverse([...data.sort(compareScore)]).slice(0, 10);
    setHotList(newList5);
  }, []);
  const compareScore = (o1, o2) => {
    if (o1.rate > o2.rate) {
      return 1;
    } else if (o1.rate < o2.rate) {
      return -1;
    }
    return 0;
  };
  return (
    <SliderWrapper>
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={"auto"}
        navigation={true}
      >
        {hotList.map((item) => (
          <SwiperSlide key={item.id}>
            <img className="image" src={item.src} onClick={() => handleRedirectToComic(item.id)} />
            <h5 className="name-comic" onClick={() => handleRedirectToComic(item.id)}>{item.name}</h5>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  );
}

export default BannerSlider