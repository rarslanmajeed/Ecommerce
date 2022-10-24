const INIT_STATE = {
  carts: [],
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "addItem":
      const ItemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (ItemIndex >= 0) {
        const item = [...state.carts];
        item[ItemIndex].qnty = (item[ItemIndex].qnty || 0) + 1;
        if (item[ItemIndex].qnty > action.payload.maxQuantity)
          item[ItemIndex].qnty = action.payload.maxQuantity;
        return {
          ...state,
          carts: item,
        };
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "addCustomItem":
      const carts = state.carts.map((item) => {
        if (item.id === action.payload[0].id) {
          return { ...item, qnty: Number(action.payload[1]) };
        }
        return { ...item };
      });
      return { ...state, carts };

    case "remove":
      const data = state.carts.filter(
        (element) => element.id !== action.payload
      );
      return {
        ...state,
        carts: data,
      };

    case "delItem":
      const ItemIndex_dec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[ItemIndex_dec].qnty >= 1) {
        const array = [...state.carts];
        array[ItemIndex_dec].qnty -= 1;
        return {
          ...state,
          carts: array,
        };
      } else if (state.carts[ItemIndex_dec].qnty === 1) {
        const data = state.carts.filter(
          (element) => element.id !== action.payload
        );
        return {
          ...state,
          carts: data,
        };
      }
      break;
    default:
      return state;
  }
};
