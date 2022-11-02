import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const PriceRange = (props) => {
  // Array which have Price Range
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
            // Return the Items Under That Price
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
