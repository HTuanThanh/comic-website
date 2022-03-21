import styled from "styled-components";
export const FooterWrapper = styled.div`
width: 100%;
background-color: #222;
.Footer-main {
  width: 100%;
  margin: auto;
}
.fb-page{
  width: 300px;
  height: 125px;
  margin-bottom: 20px;
}
.footer-column {
  display: flex;
  padding-top: 30px;
  padding-bottom: 20px;
  margin-left: 30px;
  margin: auto;
  text-align: left;
}

.footer-title {
  color: #fff;
}

.footer-text {
  color: #fff;
  margin-left: 4rem;

}
.footer-main{
  
  width: 60%;
}
.footer-left{
  margin: auto;
  width: 20%;
  padding-left: 25px
}
.fas{
  margin-right: 10px;
  margin-bottom: 20px
}
.map{
    margin-left: 70px;
  }
@media only screen and (max-width: 768px) {
  width: 768px;
  .footer-column{
    display: block;
    text-align: center;
  }
  .footer-left{
    width: 100%;
    margin: auto;
    text-align: center;
  }
  .footer-main{
    width: 700px;
    margin: auto;
    flex-direction: column; 
    text-align: left;
    padding-left: 170px;
  }
  .footer-text{
    width: 100%;
  }
  .map{
    margin-left: 30px;
  }
}
@media only screen and (max-width: 426px){
  width: 426px;
  
  .footer-column{
    display: block;
  }
  .footer-main{
    width: 420px;
    text-align: left;
    margin-left: -190px
  }
  .footer-text{
    width: 130%;
  }
  .footer-left{
    width: 100%;
    text-align: left;
  }
  
}
`;