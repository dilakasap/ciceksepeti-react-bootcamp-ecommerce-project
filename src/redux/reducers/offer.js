import {
  POST_OFFER_PENDING,
  POST_OFFER_SUCCESS,
  POST_OFFER_ERROR,
  POST_OFFER_INITIAL,
} from "../constants/offer";
import { REQUEST_STATUS } from "../../helpers/Constants";
const initial_state = {
  data: {},
  status: "",
  error: "",
};
export const offerReducer = (state = initial_state, action) => {
  switch (action.type) {
    case POST_OFFER_INITIAL:
      return { state, status: REQUEST_STATUS.PENDING };
    case POST_OFFER_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case POST_OFFER_SUCCESS:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };
    case POST_OFFER_ERROR:
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.payload };
    default:
      return state;
  }
};
