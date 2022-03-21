import styled from "styled-components";

export const HomeWrapper = styled.div`
width: 1030px;
display: center;
background-color: white;
box-sizing: border-box;
margin-right: auto;
margin-left: auto;
z-index: 10;
display: block;
min-height: 1900px;

@media only screen and (max-width: 768px){
  width: 768px;
  .main-box{
  display: block !important;
}
}
@media only screen and (max-width: 426px){
  width: 426px;
  .main-box{
  display: block !important;
}
}


.main-home {
  width: 100%;
  margin: 0 auto;
}

.main-box{
  background-color: white;
  justify-content: center;
  display: flex;
}

.main-title{
  margin-left: 10px;
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 5px;
    text-transform: uppercase;
    color: #2980b9;
    padding-top: 11px;
    
}
.scroll-to-top {
  position: fixed;
  width: 40px;
  height: 40px;
  bottom: 3.5px;
  right: 3.5rem;
  animation: fadeIn 700ms ease-in-out 2s both;
  cursor: pointer;
  color: #ee2c74;
  font-size: 25px; 
  text-align: center;
  overflow: hidden;
}
.scroll-to-top:hover {
  
}
.slick-slider-swiper{
  width: 100%;
}
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 2;
  }
}


`;