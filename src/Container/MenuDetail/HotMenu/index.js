import React, { useState, useEffect } from "react";
import { SortMenuWrapper } from "./style";
import '@fortawesome/fontawesome-free/css/all.min.css';
import _intersection from "lodash/intersection";
import { data } from "../../Home/data"
import { useHistory } from "react-router-dom";
import ScrollToTop from "../../../Components/ScrollToTop";
import _reverse from "lodash/reverse";


const HotMenu = () => {
  const [hotList, setHotList] = useState([]);

  const history = useHistory();
  const handleRedirectToComic = (id) => {
    history.push(`/comic/${id}`);
  };

  const compareScore = (o1, o2) => {
    if (o1.rate > o2.rate) {
      return 1;
    } else if (o1.rate < o2.rate) {
      return -1;
    }
    return 0;
  };

  useEffect(() => {
    const newList5 = _reverse([...data.sort(compareScore)]);
    setHotList(newList5);
  }, []) 

  return (
    <SortMenuWrapper>
      <h1 className="main-content">Danh sách truyện Hot</h1>
      <div className="sort-feature">
      </div>
      <div className="content-wrapper">
        <div className="main-list">
          {hotList.map((item) => (

            <div key={item.id} className="item">
              <img
                className="image"
                src={item.src}
                onClick={() => handleRedirectToComic(item.id)}
              />
              <h5
                className="title"
                onClick={() => handleRedirectToComic(item.id)}
              >{item.name}
              </h5>
              
              <span className="icon-hot"> </span>
            </div>
          ))}
        </div>
        <ScrollToTop />
      </div>
    </SortMenuWrapper>
  );

}
export default HotMenu;