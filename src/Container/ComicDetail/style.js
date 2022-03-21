import styled from "styled-components";

export const ComicDetailWrapper = styled.div`
width: 1050px;
background-color: white;
box-sizing: border-box;
margin-right: auto;
margin-left: auto;
z-index: 10;
display: block;
margin-top: -20px;
min-height: 900px;
.container{
background-color: white;
  flex-direction: column;
  width: 67.9999%;
  font-size: calc(10px + 2vmin);
  padding-top: 25px;
  display: inline-block;
  height: 900px;
}
.button-watch-list{
    color: white;
    background-color: #5cb85c;
    border-color: #4cae4c;
}
.fa {
    margin-right: 10px;
}
.button-unwatch-list{
    color: white;
    background-color: #c9302c;
    border-color: #c9302c;
}
.button-detail{
    margin: auto;
}
.button-follow{
    margin-left: auto;
    padding: auto;
}
.button-read{
    float: left;
    margin-right: 15px;
}
.col-infor{
    margin-left: 30px;
    width: 100%;
    display: block;
}
.title-detail{
    font-weight: 400;
    font-size: 21px;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    line-height: 1.2;
    padding-top: 20px
}

.detail-content{
    padding-bottom: 5px;
    margin-left: 15px;
}
.list-title{
    color: #2980b9;
    border-bottom: 2px solid #2980b9;
    font-weight: 300;
    font-size: 16px;
    text-transform: uppercase;
    margin: 10px 0 10px;
    padding-bottom: 2px;
}
.col-xs-8{
    clear: both;
    overflow: hidden;
    display: inline-block;
    flex-wrap: wrap;
}
.main-infor{
    margin-top: 10px;
}
.col-left{
    width: 30%;
    
}
.col-right{
    width: 70%;
}
.list-infor{
    list-style: none;
    display: flex;
    font-weight: 400;
    font-size: 16px;
    padding: 0;
    text-transform: inherit;
    color: #777676;
}
.morelink{
    color: #2980b9;
    font-weight: 300;
    font-size: 16px;
    text-transform: uppercase;
    margin: 10px 0 10px;
    padding-bottom: 2px;
}
.shortened{
    font-family: Tahoma,sans-serif,Helvetica,Arial;
    font-weight: 400;
    font-size: 14px;
}
.author-row{
    display: inline-block;
}
.status-row{
    display: flex;
    margin-top: 20px;
}
.category-row{
    display: flex;
    margin-top: 20px;
}
.row{
    display: flex;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 25px;
}

.list-genre {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    max-width: 350px;
    
}

.genre-title {
    margin-right: 15px;
    
}
.genre-item{
    list-style: none;
}
.genre-item:not(:nth-child(1)):before {
        content: "-"
}


.trailer-comic{
  width: auto;
  height: auto;
  padding-top: 20px;
  margin: 0 auto;
}
.fb-share-button{

}
.like-share-btn{
    width: auto;
    height: 100px;
    margin-top: 10px;
}
.modal {
    background: #fff;
    display: ${(props) => (props.state ? "block" : "none")};
    position: absolute;
    top: 52%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 55.5%;
    height: 90vh;
    color: #000;
    overflow-y: auto;
    z-index: 9999999999999;
    
    
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .hide {
    display: none;
  }
.right-box-detail{
    width: 30%;
    float: right;
    margin-top: 30px;
    margin-right: 20px;
}
  .modal-header {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1.5rem;
    background: #000;
    position: sticky;
    top: 0;
  }

  .header-text {
    color: #fff;
  }

  .comic-content {
      display: block;
  }
@media only screen and (max-width: 768px) {
    margin-top: 0;
    width: 768px;
    min-height: 2000px;
    .right-box-detail{
        float: none;
    }
    .container{
        width: 100%;
    }
    .modal{
        width: 100%;
        top: 49%;
        height: 100vh;
    }
    
}
@media only screen and (max-width: 426px){
    width: 426px;
    margin-left: 0 ;
    .row{
        flex-direction: column;
    }
    .col-image{
        margin: auto;
        margin-bottom: 20px;
    }
    .col-image img{
        width: 250px;
        height: 350px;
    }
    .main-infor{
        margin: 0 auto;
    }
    .list-infor{
        margin: 0 auto;
    }
    .col-infor{
        width: 100%;
        
    }
    .col-author{
        font-weight: 400;
    font-size: 16px;
    padding: 0;
    text-transform: inherit;
    }
    .right-box-detail{
        float: none;
        width: 426px;
    }
    .container{
        width: 100%;
        
    }
    .modal{
        width: 426px;
        top: 100%;
        height: 200vh;
    }
}
`   