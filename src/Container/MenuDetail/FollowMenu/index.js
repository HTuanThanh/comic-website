import React, { useState, useEffect } from "react";
import { FollowMenuWrapper } from "./style";
import { useHistory } from "react-router-dom";
import axios from "axios";

const FollowMenu = () => {
  const BASE_URL = "https://61cad05e194ffe0017788969.mockapi.io/comic";
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${BASE_URL}/watch-list`);
      if (res.data) {
        setWatchList(res.data);
      }
    })();
  }, []);

  const historyss = useHistory();
  const handleRedirectToComic = (id) => {
    historyss.push(`/comic/${id}`);
  };

  return (
    <FollowMenuWrapper>
      <h1 className="main-content">Truyện đang theo dõi</h1>
      <div className="container">
        
          {watchList.map((item) => (
            <div className="item">
              <img className="image" src={item.src} onClick={() => handleRedirectToComic(item.comic_id)} />
              <h4 className="title" onClick={() => handleRedirectToComic(item.comic_id)}>{item.name}</h4>
            </div>
          ))}
        
      </div>
    </FollowMenuWrapper>
  )
}

export default FollowMenu