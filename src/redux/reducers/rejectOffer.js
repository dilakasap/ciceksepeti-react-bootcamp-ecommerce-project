import {
  POST_REJECT_OFFER_PENDING,
  POST_REJECT_OFFER_SUCCESS,
  POST_REJECT_OFFER_ERROR,
} from "../constants/rejectOffer";
import { REQUEST_STATUS } from "../../helpers/Constants";
const initial_state = {
  data: {},
  status: "",
  error: "",
};
export const rejectOfferReducer = (state = initial_state, action) => {
  switch (action.type) {
    case POST_REJECT_OFFER_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case POST_REJECT_OFFER_SUCCESS:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };
    case POST_REJECT_OFFER_ERROR:
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.payload };
    default:
      return state;
  }
};