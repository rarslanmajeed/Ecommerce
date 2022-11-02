const INIT_STATE = {
  carts: [], // initialize cart to null
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (
    action.type // switch to check which function is called
  ) {
    case "addItem":
      const ItemIndex = state.carts.findIndex(
        // find the index of item in array
        (item) => item.id === action.payload.id
      );
      if (ItemIndex >= 0) {
        const item = [...state.carts];
        item[ItemIndex].qnty = (item[ItemIndex].qnty || 0) + 1; // increment the quantity of item
        if (item[ItemIndex].qnty > action.payload.maxQuantity)
          item[ItemIndex].qnty = action.payload.maxQuantity; // if Max Quanity is reached no more quanity is added
        return {
          ...state,
          carts: item,
        };
      } else {
        const temp = { ...action.payload, qnty: 1 }; // added to cart if it is not present
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "addCustomItem": // function to manually add quanity of item
      const carts = state.carts.map((item) => {
        if (item.id === action.payload[0].id) {
          return { ...item, qnty: Number(action.payload[1]) }; // if item is present in cart then add given quanity
        }
        return { ...item };
      });
      return { ...state, carts };

    case "remove": // function to remove item from cart
      const data = state.carts.filter(
        // if id is matched then remove it.
        (element) => element.id !== action.payload
      );
      return {
        ...state,
        carts: data,
      };

    case "delItem": // decrement the quanity of item in cart
      const ItemIndex_dec = state.carts.findIndex(
        // find the index of item in array
        (item) => item.id === action.payload.id
      );
      if (state.carts[ItemIndex_dec].qnty >= 1) {
        const array = [...state.carts];
        array[ItemIndex_dec].qnty -= 1; // decrement the quantity of item
        return {
          ...state,
          carts: array,
        };
      } else if (state.carts[ItemIndex_dec].qnty === 1) {
        // if quantity is 1 then remove it from cart
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
