import React, { useState } from "react";
import { CategoryMenuWrapper } from "./style";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Itembox from "../../Home/Component/itembox";
import _intersection from "lodash/intersection";
import Genres from "../components/Genres";
import {data} from "../../Home/data"
import { useHistory } from "react-router-dom";



const CategoryMenu = () => {
    const [selectGenre, setSelectGenre] = useState([]);

    const history = useHistory();
    const handleRedirectToComic = (id) => {
        history.push(`/comic/${id}`);
    };

    const handleSelectGenre = (genreItem) => {
        console.log("heyyyy", genreItem)
        const isExists = selectGenre.includes(genreItem);
        let result = [];
        if (isExists) {
            result = selectGenre.filter((item) => item !== genreItem);
        } else {
            result = [...selectGenre, genreItem];
        }
        console.log("test111", result);
        setSelectGenre(result);
    };

    const filterPopularComicByGenre = () => {
        console.log("test data list", data)
        const newList = data.filter((item) => {
            const {category} = item
            const filterData = _intersection(selectGenre, category);
            if (filterData.length) return true;
            return false;
        });
        console.log("test list", newList);
        return newList;
    };

    const getListComic = () => {
        if (selectGenre.length === 0) {
            return data
        } else {
            return filterPopularComicByGenre()
        }
    }

    return (
        <CategoryMenuWrapper>
            <div className="content-wrapper">
                <div className="main-list">
                    {getListComic().map((item) => (

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
                        </div>

                    ))}
                </div>
                <div className="filter-feature">
                    <Genres selectGenre={selectGenre} onClick={handleSelectGenre} />
                </div>
            </div>
            
        </CategoryMenuWrapper>
    );

}
export default CategoryMenu;