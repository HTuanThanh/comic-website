import React, {useState, useEffect} from "react";
import {SearchMenuWrapper} from "./style"
import { useHistory } from "react-router-dom";
import {data} from "../../Home/data"
import { removeVietnameseTones } from "../../../utils";
import RightHomeBox from "../../Home/Component/RightHomeBox";

const SearchMenu = () => {
    const [searchResult, setSearchResult] = useState([]);
    const history = useHistory();

    let searchText = history.location.pathname;
    let res = searchText.slice(8)

    useEffect(() => {
        const newValue = res.toLowerCase();
        const dataFilter = data.filter((item) =>
          removeVietnameseTones(item.name).toLowerCase().includes(newValue) || item.name.toLowerCase().includes(newValue)
        );
        setSearchResult(dataFilter);
    }, [searchText])
    
    const historys = useHistory();
    const handleRedirectToComic = (id) => {
    historys.push(`/comic/${id}`);
    };

    console.log("test data", searchResult)
    return (
        <SearchMenuWrapper>
            <h1>Tìm kiếm với từ khóa: {res}</h1>
            <div className="container">
                <div className="item-box">
                
                    {searchResult.map((item) => (
                        <div className="item">
                            <img className="image" src={item.src} onClick={() => handleRedirectToComic(item.id)}/>
                            <h4 className="title" onClick={() => handleRedirectToComic(item.id)}>{item.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
            <div className="colum-right">
                <RightHomeBox/>
            </div>
            
        </SearchMenuWrapper>
    )
}

export default SearchMenu;