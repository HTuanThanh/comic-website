import styled from "styled-components";

export const SortMenuWrapper = styled.div`
width: 1030px;
justify-content: center;
margin: 0 auto;
background-color: #f9f9f9;
.content-wrapper {
    display: flex;
}
.main-content{
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    text-align: center;
}
.main-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    
}
.sort-feature{
    width: 100%;
    display: center;
    text-align: center;
}
.item{
  position: relative;
  margin-right: 7.5px;
  margin-left: 7.5px;
  margin-top: 15px;
  display: block;
  width: 18%;
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
.icon-hot{
  background: url(http://s.nettruyengo.com/Data/Sites/1/skins/comic/images/icon-hot.gif) no-repeat;
    height: 11px;
    width: 28px;
    position: absolute;
    top: 5px;
    right: 5px;
}
@media only screen and (max-width: 768px) and (min-width: 500px){
  width: 768px;
  .item{
    width: 23%;
  }
}
@media only screen and (max-width: 426px){
  width: 426px;
  .item{
    width: 46%;
  }
}
`;