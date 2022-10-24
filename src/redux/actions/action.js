export const addItem = (item) => {
  return {
    type: "addItem",
    payload: item,
  };
};

export const delItem = (item) => {
  return {
    type: "delItem",
    payload: item,
  };
};

export const remove = (id) => {
  return {
    type: "remove",
    payload: id,
  };
};

export const addCustomItem = (item, value) => {
  return {
    type: "addCustomItem",
    payload: [item, value],
  };
};
