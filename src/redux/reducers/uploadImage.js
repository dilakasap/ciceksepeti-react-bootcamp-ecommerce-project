import {
  POST_UPLOAD_IMAGE_PENDING,
  POST_UPLOAD_IMAGE_SUCCESS,
  POST_UPLOAD_IMAGE_ERROR,
} from "../constants/uplooadImage";
import { REQUEST_STATUS } from "../../helpers/Constants";
const initial_state = {
  data: {},
  status: "",
  error: "",
};
export const uploadImageReducer = (state = initial_state, action) => {
  switch (action.type) {
    case POST_UPLOAD_IMAGE_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case POST_UPLOAD_IMAGE_SUCCESS:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };
    case POST_UPLOAD_IMAGE_ERROR:
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.payload };
    default:
      return state;
  }
};