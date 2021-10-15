import { REQUEST_STATUS } from "../../helpers/Constants";
import {
  GET_PRODUCTS_PENDING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../constants/products";
const initial_state = {
  data: [],
  status: "",
  error: "",
};
export const productReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_PRODUCTS_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };
    case GET_PRODUCTS_ERROR:
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.payload };
    default:
      return state;
  }
};
