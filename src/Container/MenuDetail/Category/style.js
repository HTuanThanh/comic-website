import styled from "styled-components";

export const CategoryMenuWrapper = styled.div`
width: 1030px;
display: flex;
justify-content: center;
margin: 0 auto;
background-color: #f9f9f9;
.content-wrapper {
    display: flex;
}

.main-list {
    width: 700px;
    display: flex;
    flex-wrap: wrap;
}

.filter-feature{
    width: 300px;
}

.item{
  position: relative;
  margin-right: 7.5px;
  margin-left: 7.5px;
  margin-top: 15px;
  display: block;
  width: 22%;
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
  width: 768px;
  .content-wrapper{
    flex-direction: column-reverse;
  }
  .item{
    width: 23%;
  }
  .main-list{
    width: 100%;
  }
  .filter-feature{
    width: 100%;
    margin: auto;
}
}
@media only screen and (max-width: 426px){
  width: 426px;
  .content-wrapper{
    flex-direction: column-reverse;
  }
  .item{
    width: 46%;
  }
  .main-list{
    width: 100%;
  }
  .filter-feature{
    width: 100%;
    margin: auto;
}
}
`;