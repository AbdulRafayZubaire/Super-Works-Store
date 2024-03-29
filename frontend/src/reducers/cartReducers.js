import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_RESET_ITEMS, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from "../constants/cardConstants";

const cartReducer = (state = { cartItems: [], shippingAddress:{ } }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => {
            if (x.product === existItem.product) {
                return item;
            }
            else{
                return x;
            }
          }),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    }
    case CART_REMOVE_ITEM: {
      
        return{

            ...state,
            cartItems: state.cartItems.filter((item)=> item.product !== action.payload)
        }
    }

    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      }

      case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      }
      case CART_RESET_ITEMS:
      return {
        ...state,
        cartItems: []
      }

    default:
      return state;
  }
};

export { cartReducer };
