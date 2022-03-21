import styled from "styled-components";

export const RightHomeBoxWrapper = styled.div`
box-sizing: border-box;
z-index: 0;
padding-right: 10px;
width: 300px;
.dark-box {
    border: 1px solid #ddd;
    color: #333;
    padding: 10px;
    clear: right;
    margin-top: 15px;
}
.dark-box h2{
    font-size: 16px;
    margin: 0;
    margin-bottom: 10px;
    font-weight: 400;
    color: #2980b9;
}
.dark-box h2 a{
    float: right;
    font-size: 13px;
    line-height: 22px;
    font-style: italic;
    color: #000;
}
.dark-box ul{
    margin: 0;
    padding-bottom: 0
}
.dark-box ul li{
    list-style: none;
    margin: 0;
    padding: 10px 0 10px 0;
    border-top: 1px solid #dedede;
    width: 100%;
    height: 90px;
}
.title {
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    margin-bottom: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 15px;
    font-style: bold;
    width: auto;
    height: auto;
}
.dark-box .thump{
    overflow: hidden;
    width: 70px;
    height: 100%;
    margin-right: 15px;
    float: left;
}
.dark-box .thump img{
    width: 100%;
    left: 0;
}
.dark-box ul li:last-child {
    
}
.lazy:hover{
    cursor: pointer;
}
.title:hover{
    cursor: pointer;
}
@media only screen and (max-width: 426px){
    width: 426px;
    padding-left: 10px;

}
/*mobile < 740px */
@media only screen and (max-width: 768px) and (min-width: 500px){
    width: 768px;
    padding-left: 15px;
}
/*tablet >= 740px , < 1024px */
@media only screen and (max-width: 63.9375em) and (min-width:46.25em){
    
}
`;