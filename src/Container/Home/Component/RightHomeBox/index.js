import React, {useState, useEffect} from "react";
import { RightHomeBoxWrapper } from "./style";
import { NavLink } from "react-router-dom";
import { data } from "../../data";
import { useHistory } from "react-router-dom";
import axios from "axios";
import _reverse from "lodash/reverse";


const RightHomeBox = () => {
    const BASE_URL = "https://61cad05e194ffe0017788969.mockapi.io/comic";
    const [watchList, setWatchList] = useState([]);
        const [hotList, setHotList] = useState([]);

    useEffect(() => {
        (async () => {
          const res = await axios.get(`${BASE_URL}/watch-list`);
          if (res.data) { 
            const listFollow = res.data.slice(0, 4)
            setWatchList(listFollow);
          }
        })();

        const newList5 = _reverse([...data.sort(compareScore)]).slice(0, 4);
        setHotList(newList5);
      }, []);

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

    return (
        <RightHomeBoxWrapper>
            <div className="dark-box">
                <h2>
                    Truyện đang theo dõi
                    <NavLink exact activeClassName="view-all" to="/follow">Xem tất cả</NavLink>
                </h2>
                {watchList.map((item) => (
                    <div className="list-unstyled">
                        <ul className="">
                            <li>
                                <a className="thump">
                                    <img className="lazy" src={item.src} onClick={() => handleRedirectToComic(item.comic_id)} />
                                </a>
                                <h3 className="title" onClick={() => handleRedirectToComic(item.comic_id)}>{item.name}</h3>
                            </li>
                        </ul>
                    </div>
                )
                )}
            </div>
            <div className="dark-box">
                <h2>Top
                    <NavLink exact activeClassName="view-all" to="/hot">Xem tất cả</NavLink>
                </h2>
                {hotList.map((item) => (
                    <div className="list-unstyled">
                        <ul className="">
                            <li>
                                <a className="thump">
                                    <img className="lazy" onClick={() => handleRedirectToComic(item.id)} src={item.src} />
                                </a>
                                <h3 className="title" onClick={() => handleRedirectToComic(item.id)}>{item.name}</h3>
                            </li>
                        </ul>
                    </div>
                )
                )}
            </div>
        </RightHomeBoxWrapper>
    );
}
export default RightHomeBox