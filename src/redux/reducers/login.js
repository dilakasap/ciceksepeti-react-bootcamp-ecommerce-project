import {
  POST_LOGIN_PENDING,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_ERROR,
} from "../constants/login";
import { REQUEST_STATUS } from "../../helpers/Constants";
const initial_state = {
  data: {},
  status: "",
  error: "",
};
export const loginReducer = (state = initial_state, action) => {
  switch (action.type) {
    case POST_LOGIN_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case POST_LOGIN_SUCCESS:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };
    case POST_LOGIN_ERROR:
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.payload };
    default:
      return state;
  }
};