import styled from "styled-components";

export const SearchMenuWrapper = styled.div`
width: 1050px;
display: center;
background-color: white;
box-sizing: border-box;
margin-right: auto;
margin-left: auto;
z-index: 10;
display: block;
min-height: 1000px;
.container{
  float: left;
}
.item-box{
    width: 700px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
.item{
  position: relative;
  margin-right: 7.5px;
  margin-left: 7.5px;
  margin-top: 15px;
  display: block;
  width: 18%;
}
.colum-right{
  float: right;
}
.item:hover{
    cursor: pointer;
}
.image{
  width: 100%;
  height: 200px;
  border-radius: 5px ;
}
.title {
  font-size: 16px;
    margin: 0 0 7px;
    font-style: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    width: 100%;
}
@media only screen and (max-width: 768px) and (min-width: 500px){
  width: 765px;
  .container{
    float: none;
  }
  .item-box{
    width: 100%;
  }
  .item{
    width: 23%;
  }
  .colum-right{
    float: none;
  }
}
@media only screen and (max-width: 426px){
  width: 424px;
  .item-box{
    width: 100%;
  }
  .item{
    width: 45%;
  }
  .colum-right{
    float: none;
  }
  .container{
    float: none;
  }
}
`