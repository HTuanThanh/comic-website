import styled from "styled-components";

export const ItemsliderWrapper = styled.div`
margin: 0 10px;
box-sizing: border-box;
height: 2100px;
z-index: 0;
width: 700px;
.item{
  position: relative;
  padding-right: 7.5px;
  padding-left: 7.5px;
  padding-top: 15px;
  width: 25%;
  height: 300px;
  float: left;
  
}
.item:hover{
  cursor: pointer;
}
.image{
  width: 100%;
  height: 200px;
  border-radius: 5px;
  
}

.title {
  font-size: 16px;
    margin: 0 0 7px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    width: 100%;
    font-style: bold;
    height: 100px;
    display: block;
}
/*mobile < 740px */
@media only screen and (max-width: 768px){
    width: 768px;
    padding-right: 15px;
}
/*tablet >= 740px , < 1024px */
}
@media only screen and (max-width: 426px){
  width: 426px;
  min-height: 3900px;
  .item{
    width: 50%;
  }
`;