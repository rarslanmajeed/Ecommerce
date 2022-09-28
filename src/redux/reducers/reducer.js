const INIT_STATE = {
  carts: [],
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const ItemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (ItemIndex >= 0) {
        // state.carts[ItemIndex].qnty += 1;
        const arr = [...state.carts];
        arr[ItemIndex].qnty += 1;
        if (arr[ItemIndex].qnty > action.payload.quantity)
          arr[ItemIndex].qnty = action.payload.quantity;
        return {
          ...state,
          carts: arr,
        };
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "ADD_MORE":
      const ItemIndexes = state.carts.findIndex(
        (item) => item.id === action.payload[0].id
      );
      const arr = [...state.carts];
      arr[ItemIndexes].qnty = action.payload[1];
      return {
        ...state,
        carts: arr,
      };

    case "RMV_CART":
      const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data,
      };

    case "DLT_ONE":
      const ItemIndex_dec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[ItemIndex_dec].qnty >= 1) {
        const arr1 = [...state.carts];
        arr1[ItemIndex_dec].qnty -= 1;
        return {
          ...state,
          carts: arr1,
        };
      } else if (state.carts[ItemIndex_dec].qnty === 1) {
        const data = state.carts.filter((el) => el.id !== action.payload);
        return {
          ...state,
          carts: data,
        };
      }
    default:
      return state;
  }
};
