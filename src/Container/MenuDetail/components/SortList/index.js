import React from "react";
import SelectSort from "../../../../Components/SelectSort";
import { SortListWrapper } from "./style";

const SortList = ({selectSort, handleSelectSort}) => {
  const sort = [
    {
      id: "option-0",
      title: "Lựa chọn",
      value: 0,
    },
    {
      id: "option-1",
      title: "Đánh giá thấp đến cao",
      value: 1,
    },
    {
      id: "option-2",
      title: "Đánh giá cao đến thấp",
      value: 2,
    },
    {
      id: "option-3",
      title: "Sắp xếp thứ tự (A-Z)",
      value: 3,
    },
    {
      id: "option-4",
      title: "Sắp xếp thứ tự (Z-A)",
      value: 4,
    },
  ];

  return (
    <SortListWrapper>
      <SelectSort
      options={sort} 
      name="sort"
      className="select-sort"
      value={selectSort}
      onChange={handleSelectSort}
      />
    </SortListWrapper>
  );
};

export default SortList;
