import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const PriceRange = (props) => {
  const priceArray = [
    { value: 10 },
    { value: 100 },
    { value: 1000 },
    { value: 10000 },
    { value: 100000 },
  ];
  return (
    <Dropdown className="btn  me-2">
      <Dropdown.Toggle variant="bg-black" id="dropdown-basic">
        Price Range
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {priceArray.map((range) => {
          return (
            <Dropdown.Item onClick={() => props.filterPrice(range.value)}>
              under {range.value} $
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default PriceRange;
