import {
  POST_SIGNUP_PENDING,
  POST_SIGNUP_SUCCESS,
  POST_SIGNUP_ERROR,
} from "../constants/signup";
import { REQUEST_STATUS } from "../../helpers/Constants";
const initial_state = {
  data: {},
  status: "",
  error: "",
};
export const signupReducer = (state = initial_state, action) => {
  switch (action.type) {
    case POST_SIGNUP_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case POST_SIGNUP_SUCCESS:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };
    case POST_SIGNUP_ERROR:
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.payload };
    default:
      return state;
  }
};
