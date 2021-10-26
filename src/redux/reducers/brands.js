import {
  GET_BRANDS_PENDING,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_ERROR,
} from "../constants/brands";
import { REQUEST_STATUS } from "../../helpers/Constants";
const initial_state = {
  data: [],
  status: "",
  error: "",
};
export const brandsReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_BRANDS_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case GET_BRANDS_SUCCESS:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };
    case GET_BRANDS_ERROR:
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.payload };
    default:
      return state;
  }
};
