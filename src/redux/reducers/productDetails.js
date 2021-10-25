import {
  GET_PRODUCT_DETAILS_PENDING,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_ERROR,
} from "../constants/productDetails";
import { REQUEST_STATUS } from "../../helpers/Constants";
const initial_state = {
  data: {},
  status: "",
  error: "",
};
export const productDetailsReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case GET_PRODUCT_DETAILS_SUCCESS:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };
    case GET_PRODUCT_DETAILS_ERROR:
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.payload };
    default:
      return state;
  }
};
