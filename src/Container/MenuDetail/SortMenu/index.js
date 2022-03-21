import React, { useState } from "react";
import { SortMenuWrapper } from "./style";
import '@fortawesome/fontawesome-free/css/all.min.css';
import _intersection from "lodash/intersection";
import { data } from "../../Home/data"
import { useHistory } from "react-router-dom";
import ScrollToTop from "../../../Components/ScrollToTop";
import SortList from "../components/SortList";
import _reverse from "lodash/reverse";


const SortMenu = () => {
  const [selectSort, setSelectSort] = useState([]);

  const history = useHistory();
  const handleRedirectToComic = (id) => {
    history.push(`/comic/${id}`);
  };

  const handleSelectSort = (event) => {
    const { value } = event.target;
    console.log("check value", value);
    setSelectSort(+value);
  };

  const compareScore = (o1, o2) => {
    if (o1.rate > o2.rate) {
      return 1;
    } else if (o1.rate < o2.rate) {
      return -1;
    }
    return 0;
  };

  const compareName = (o1, o2) => {
    if (o1.name > o2.name) {
      return 1;
    } else if (o1.name < o2.name) {
      return -1;
    }
    return 0;
  };

  const handleSortFeature = () => {
    let newList = [];
    if (selectSort === 1) {
      newList = [...data].sort(compareScore);
    } else if (selectSort === 2) {
      newList = _reverse([...data.sort(compareScore)]);
    } else if (selectSort === 3) {
      newList = [...data].sort(compareName);
    } else if (selectSort === 4) {
      newList = _reverse([...data].sort(compareName));
    } else {
      newList = data;
    }
    return newList;
  };

  return (
    <SortMenuWrapper>
      <h1 className="main-content"> Xắp xếp</h1>
      <div className="sort-feature">
        <SortList
          className="sort-item"
          selectSort={selectSort}
          handleSelectSort={handleSelectSort}
        />
      </div>
      <div className="content-wrapper">
        <div className="main-list">
          {handleSortFeature().map((item) => (

            <div key={item.id} className="item">
              <img
                className="image"
                src={item.src}
                onClick={() => handleRedirectToComic(item.id)}
              />
              <h5
                className="title"
                onClick={() => handleRedirectToComic(item.id)}
              >
                {item.name}
                
              </h5>
              <span className="rate"><i class="fas fa-star"></i> {item.rate} / 10</span>
              
            </div>
            
          ))}
        </div>

        <ScrollToTop />
      </div>

    </SortMenuWrapper>
  );

}
export default SortMenu;