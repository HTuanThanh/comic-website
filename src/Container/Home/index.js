import React from "react";
import { HomeWrapper } from "./style";
import BannerSlider from "./Component/slickSlider";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Itembox from "./Component/itembox";
import RightHomeBox from "./Component/RightHomeBox";


const Home = (props) => {
    console.log("test props", props);
    return (
        <HomeWrapper>
            <div className="main-home">
                <h3 className="main-title">Truyện đề cử</h3>
                <div className="slick-slider-swiper">
                <BannerSlider/>
                </div>
                <h3 className="main-title">Tất cả truyện</h3>
                <div className="main-box">        
                        <Itembox/>                        
                        <RightHomeBox/>    
                </div>
                
            </div>
        </HomeWrapper>
    )
}

export default Home