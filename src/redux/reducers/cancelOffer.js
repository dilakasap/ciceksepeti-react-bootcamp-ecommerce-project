import {
  DELETE_CANCEL_OFFER_PENDING,
  DELETE_CANCEL_OFFER_SUCCESS,
  DELETE_CANCEL_OFFER_ERROR,
  DELETE_CANCEL_OFFER_INITIAL,
} from "../constants/cancelOffer";
import { REQUEST_STATUS } from "../../helpers/Constants";
const initial_state = {
  data: {},
  status: "",
  error: "",
};
export const cancelOfferReducer = (state = initial_state, action) => {
  switch (action.type) {
    case DELETE_CANCEL_OFFER_INITIAL:
      return { state, status: REQUEST_STATUS.PENDING };
    case DELETE_CANCEL_OFFER_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case DELETE_CANCEL_OFFER_SUCCESS:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };
    case DELETE_CANCEL_OFFER_ERROR:
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.payload };
    default:
      return state;
  }
};