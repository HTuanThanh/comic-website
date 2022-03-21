import styled from "styled-components";

export const SliderWrapper = styled.div`
box-sizing: border-box;
height: auto;
width: 100%;
padding-left: 15px;
padding-right: 15px;
.swiper-slide {
    width: auto;
}


.swiper-button-next {
    width: 40px;
    height: 60px;
    background: rgba(0, 0, 0, 0.3);
    border: 0px solid;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    position: absolute;
    top: 45%;
  }
  .swiper-button-prev {
    width: 40px;
    height: 60px;
    background: rgba(0, 0, 0, 0.3);
    border: 0px solid;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    position: absolute;
    top: 45%;
  }
.image{
  display: inline-block;
    width: 180px;
    height: 225px;
    border-radius: 8px;
    cursor: pointer;
  position: relative;
}
.name-comic {
  width: 180px;
  position: absolute;
  z-index: 5;
  text-align: bottom;
  top: 90% !important;
  font-size: 1rem;
  margin-right: 20px;
  text-align: center;
  color: #fff;
  background: url(http://s.nettruyengo.com/Data/Sites/1/skins/comic/images/bg_over.png);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.slick {
    cursor: pointer;
    color: white;
    position: absolute;
    
  }

  .slick-next {
    width: 40px;
    height: 40px;
    border: 0px solid;
    border-radius: 5px;
    right: 1%;
    top: 50%;
    background: rgba(0, 0, 0, 0.1);
    text-align: center;
    display: block;
    cursor: pointer;
    z-index: 2;
    &:before {
      font-family: "Fontawesome";
      content: "\f105";
      font-size: 30px;
    }
  }
  .slick-prev {
    width: 40px;
    height: 40px;
    left: 1%;
    top: 50%;
    z-index: 2;
    border: 0px solid;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.1);
    text-align: center;
    &:before {
      font-family: "Fontawesome";
      content: "\f104";
      font-size: 30px;
    }
  }
  .slick-next:hover, .slick-prev:hover {
    background: rgba(0, 0, 0, 0.5);
  }
/*mobile < 740px */
@media only screen and (max-width: 46.1875em){
  
}
/*tablet >= 740px , < 1024px */
@media only screen and (max-width: 63.9375em) and (min-width:46.25em){
}
`;