import React from "react";
import { GenresWrapper } from "./style";
import Button from "../../../../Components/Button";

const Genres = ({onClick, selectGenre}) => {
    const listGenre = [
        {
            id: 1,
            name: "Hành động"
        },
        {
            id: 2,
            name: "Phiêu lưu"
        },
        {
            id: 3,
            name: "Chuyển sinh"
        },
        {
            id: 4,
            name: "ManhWa"
        },
        {
            id: 5,
            name: "Horror"
        },
        {
            id: 6,
            name: "Xuyên không"
        },
        {
            id: 7,
            name: "Truyện màu"
        },
        {
            id: 8,
            name: "Harem"
        },
        {
            id: 9,
            name: "Manhua"
        },
        {
            id: 10,
            name: "Fantasy"
        },
        {
            id: 11,
            name: "Cổ đại"
        },
        {
            id: 12,
            name: "Webtoon"
        },
        {
            id: 13,
            name: "Học đường"
        },
        {
            id: 14,
            name: "Bí ẩn"
        },
        {
            id: 15,
            name: "Ngôn tình"
        }
    ]
    return (
        <GenresWrapper>
            <h3 className="genre-title"> Thể loại</h3>
            <div className="Box-genre">
            {listGenre.map((item) => (
                <Button
                className="filter-btn" 
                name={item.name}
                onClick={() => onClick(item.name)}
                active={selectGenre.includes(item.name)}
                />
            ))}
            </div>
        </GenresWrapper>
    )
}

export default Genres