import styled from "styled-components";

export const GenresWrapper = styled.div`
border: 1px solid #ccc;
margin-top: 30px;
margin-bottom: 10px;
.filter-btn {
    display: inline-block;
    border: 1px solid #9e9e9e;
    border-radius: 5px;
    font-size: 0.9em;
    margin-right: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 15px;
    width: 40%;
    height: 30px;
    &:hover {
        background-color: white ;
        color: darkblue;
        box-shadow: 0 0 10px #33ffff,0 0 10px #66ffff;
        cursor: pointer;
    }
}
.genre-title {
    margin-left: 10px;
    border-bottom: 1px solid;
    margin-right: 10px;
    color: #ae4ad9;
}
.box-genre{
    width: 50%;
    display: inline-block;
    float: left;
}
@media only screen and (max-width: 768px) and (min-width: 500px){
    .filter-btn{
    width: 30%;
    }
}
@media only screen and (max-width: 426px){
  
}
`