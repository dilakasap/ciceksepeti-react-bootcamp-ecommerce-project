import {
  POST_CREATE_PRODUCT_PENDING,
  POST_CREATE_PRODUCT_SUCCESS,
  POST_CREATE_PRODUCT_ERROR,
  POST_CREATE_PRODUCT_INITIAL,
} from "../constants/createProduct";
import { REQUEST_STATUS } from "../../helpers/Constants";
const initial_state = {
  data: {},
  status: "",
  error: "",
};
export const createProductReducer = (state = initial_state, action) => {
  switch (action.type) {
    case POST_CREATE_PRODUCT_INITIAL:
      return { state, status: REQUEST_STATUS.PENDING };
    case POST_CREATE_PRODUCT_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case POST_CREATE_PRODUCT_SUCCESS:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };
    case POST_CREATE_PRODUCT_ERROR:
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.payload };
    default:
      return state;
  }
};

