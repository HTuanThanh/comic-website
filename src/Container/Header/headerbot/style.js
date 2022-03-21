import styled from "styled-components";
export const HeaderbotWrapper = styled.div`
position: sticky;
z-index: 10;
-webkit-position: sticky;
top: 0;
margin-top: 1px;
width: 100%;
background-color: #e4e4e4;
.Footer-main{
  background-color: #e4e4e4;
  width: 1024px;
  margin: 0 auto;
  height: 40px;
  -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    line-height: 1.42857143;
    color: #333;
    font-family: Tahoma,sans-serif,Helvetica,Arial;
    font-weight: 400;
    font-size: 14px;
    box-sizing: border-box;
    background-color: #e4e4e4;
    margin: auto;
}
.Footer-content{
  margin: auto;
}
.Footer-content{
  -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    line-height: 1.42857143;
    color: #333;
    font-family: Tahoma,sans-serif,Helvetica,Arial;
    font-weight: 400;
    font-size: 14px;
    box-sizing: border-box;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    text-align: center;

}
.Footer-main .Footer-content ul{
  margin: 0;
  padding: 0;
}
.Footer-main .Footer-content ul li{
    margin: 0;
    margin-right: 5px;
    line-height: 38px;
    list-style: none;
    display: inline-block;
}
.Footer-main .Footer-content ul li a{
    padding: 5px;
    white-space: nowrap;
    border-radius: 4px;
    color: black;
    text-decoration: none;
}
.Footer-main .Footer-content ul li a:hover{
  background-color: white ;
  color: purple;
}

.selected {
  font-weight: bold;
  color: #ae4ad9 !important;
  background-color: #e4e4e4 !important;
}
/*mobile < 740px */
@media only screen and (max-width: 46.1875em){

  display: none;

}
/*tablet >= 740px , < 1024px */
@media only screen and (max-width: 63.9375em) and (min-width:46.25em){
  display:none;
 
}
`;