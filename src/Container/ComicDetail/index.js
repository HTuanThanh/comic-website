import React, { useState, useEffect } from "react";
import { ComicDetailWrapper } from "./style";
import { data } from "../Home/data";
import { Button } from "antd"
import ScrollToTop from "../../Components/ScrollToTop";
import axios from "axios";
import RightHomeBox from "../Home/Component/RightHomeBox";
import SimpleSlider from "../Home/Component/slickSlider";

const ComicDetail = (props) => {
  const BASE_URL = "https://61cad05e194ffe0017788969.mockapi.io/comic"
  const [currentComic, setCurrentComic] = useState({});
  const [watchList, setWatchList] = useState([]);
  const [isAddButton, setIsAddButton] = useState(true);
  const [state, setState] = useState(false);
  const { match } = props;
  console.log("lay id", props);
  const { params } = match;
  const { id } = params;



  useEffect(() => {
    const comicData = data.find((item) => +item.id === +id);
    setCurrentComic(comicData);
    (async () => {
      const res = await axios.get(`${BASE_URL}/watch-list`);
      if (res.data) {
        setWatchList(res.data);
      }
      if (!res.data.length) {
        return null
      }
      const listComicId = res.data.map((item) => {
        return item.comic_id
      })
      const isExists = +listComicId.includes(+id);
      if (isExists) {
        setIsAddButton(false)
      } else {
        setIsAddButton(true)
      }
    })();
  }, [id]);


  console.log("category", currentComic);

  if (!currentComic.category) {
    return <h6>Loading...</h6>;
  }

  const handleAddComic = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/watch-list`, {
        id: currentComic.id,
        comic_id: currentComic.id,
        name: currentComic.name,
        src: currentComic.src,
        author: currentComic.author,
        status: currentComic.status,
        category: currentComic.category,
        description: currentComic.description,
      });
      setIsAddButton(false);
      console.log("test response", response);
      const { data, status } = response;
      if (status === 201 || status === 200) {
        setWatchList([data, ...watchList]);
      }
    } catch (err) {
      console.log("err===", err);
    }
  }

  const handleDeleteComic = async () => {
    try {
      let getWatchListComicId = watchList.find((item) => item.comic_id === currentComic.id)
      const response = await axios.delete(`${BASE_URL}/watch-list/${getWatchListComicId.id}`);
      setIsAddButton(true)
      const { data, status } = response;
      if (status === 200 || status === 201) {
        const newData = watchList.filter((item) => item.id !== data.id);
        setWatchList(newData);
      }
    } catch (err) { }
  };

  const handleChangeState = () => {
    setState((state) => !state);
  };

  return (
    <ComicDetailWrapper state={state}>
      <div className="container">
        <h2 className="title-detail">{currentComic.name}</h2>
        <div className="detail-infor">
          <div className="row">
            <div className="col-image">
              <img src={currentComic.src}/>
            </div>
            <div className="col-infor">
              <div className="main-infor">
                <li className="list-infor" >
                  <ul className="col-left">
                    <li className="author-row" ><p className="col-author"><i class="fa fa-user"></i>Tác giả: </p></li></ul>
                  <ul className="col-right"><li className="genre-item" ><div className="list-genre">
                    <p >{currentComic.author}</p>
                  </div>
                  </li>
                  </ul>
                </li>

                <li className="list-infor" >
                  <ul className="col-left">
                    <li className="author-row" ><p className="col-xs-4 col-author"><i class="fa fa-rss"></i>Tình trạng: </p></li></ul>
                  <ul className="col-right"><li className="genre-item" ><div className="list-genre">
                    <p className="genre-item">{currentComic.status}</p>
                  </div>
                  </li>
                  </ul>
                </li>
                <li className="list-infor" >
                  <ul className="col-left">
                    <li className="author-row" ><p className="genre-item col-author"><i class="fa fa-tags"></i>Thể loại</p></li></ul>
                  <ul className="col-right"><li className="genre-item" ><div className="list-genre">
                    {currentComic.category.map((item) => (
                      <p className="genre-item">{item} </p>
                    ))}
                  </div>

                  </li>
                  </ul>
                </li>

                <li className="list-infor" >
                  <ul className="col-left">
                    <li className="author-row" ><p className="genre-item col-author">Đánh giá:</p></li></ul>
                  <ul className="col-right"><li className="genre-item" ><div className="list-genre">
                    <p className="genre-item">{currentComic.rate} / 10</p>
                  </div>
                  </li>
                  </ul>
                </li>
              </div>

              <div className="button-follow">
                {isAddButton ? (
                  <Button className="button-watch-list" type="button" onClick={handleAddComic}>
                    <i class="fa fa-heart"></i> Theo dõi
                  </Button>
                ) : (
                  <Button className="button-unwatch-list" type="button" onClick={handleDeleteComic}>
                    <i class="fa fa-times"></i> Hủy theo dõi
                  </Button>
                )}
              </div>

              <div>
                <Button name="a" type="read more" onClick={handleChangeState}>
                  đọc trailer
                </Button>
              </div>
              <iframe 
              className="like-share-btn"
              src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FReactjs-app-112271111351857&width=450&layout=standard&action=like&size=small&share=true&height=35&appId"
              frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
        <div class="detail-content">
          <h3 class="list-title">
            <i class="fa fa-file-text-o">
            </i> Nội dung
          </h3>
          <p class="shortened">{currentComic.description}</p>
        </div>
        <div className="detail-content">
          <h3 class="list-title">Đề cử</h3>
          <SimpleSlider />
        </div>
        <ScrollToTop />
      </div>
      <div className="right-box-detail">
        <RightHomeBox />
      </div>

      <label className={state ? "overlay" : ""} onClick={handleChangeState}></label>
      <div className={state ? "modal" : "hide"}>
        <div className="modal-header">
          <h4 className="header-text">Đọc thử chapter 1</h4>
          <Button className="close-btn" onClick={handleChangeState}>
            <i class="fas fa-times"></i>
          </Button>
        </div>
        <div className="comic-content">
          {currentComic.comicImage.map((item) => (
            <img src={item} className="trailer-comic" />
          ))}
        </div>
        <div class="fb-comment-comment" data-href="https://www.facebook.com/groups/1030450047710386/posts/1030450057710385/" data-width="500"></div>
      </div>
    </ComicDetailWrapper>
  );
};

export default ComicDetail;
