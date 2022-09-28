export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

export const DLT = (item) => {
  return {
    type: "DLT_ONE",
    payload: item,
  };
};

export const RMV = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};

export const INC = (item, v) => {
  return {
    type: "ADD_MORE",
    payload: [item, v],
  };
};
