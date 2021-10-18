import {
  GET_STATUS_PENDING,
  GET_STATUS_SUCCESS,
  GET_STATUS_ERROR,
} from "../constants/status";
import { REQUEST_STATUS } from "../../helpers/Constants";
const initial_state = {
  data: [],
  status: "",
  error: "",
};
export const statusReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_STATUS_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case GET_STATUS_SUCCESS:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };
    case GET_STATUS_ERROR:
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.payload };
    default:
      return state;
  }
};
