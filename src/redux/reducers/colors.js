import {
  GET_COLORS_PENDING,
  GET_COLORS_SUCCESS,
  GET_COLORS_ERROR,
} from "../constants/colors";
import { REQUEST_STATUS } from "../../helpers/Constants";
const initial_state = {
  data: [],
  status: "",
  error: "",
};
export const colorsReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_COLORS_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case GET_COLORS_SUCCESS:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };
    case GET_COLORS_ERROR:
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.payload };
    default:
      return state;
  }
};
