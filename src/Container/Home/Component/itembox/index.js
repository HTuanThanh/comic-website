import React, { useEffect, useState } from "react";
import { ItemsliderWrapper } from "./style";
import {data} from "../../data";
import { useHistory } from "react-router-dom";


const Itembox = () => {
  console.log("test data", data);

  const history = useHistory();
  const handleRedirectToComic = (id) => {
    history.push(`/comic/${id}`);
  };

 
  return (
    <ItemsliderWrapper>
      
      {data.map((item) => (
     
          <div key={item.id} className="item">
            <img
              className="image"
              src={item.src}
              onClick={() => handleRedirectToComic(item.id)}
            />
            <h5
              className="title" onClick={() => handleRedirectToComic(item.id)}> {item.name} </h5>
        </div>
      )
      )
      }
    </ItemsliderWrapper>
  );
};
export default Itembox;
