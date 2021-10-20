import {
  PUT_ACCEPT_OFFER_PENDING,
  PUT_ACCEPT_OFFER_SUCCESS,
  PUT_ACCEPT_OFFER_ERROR,
} from "../constants/acceptOffer";
import { REQUEST_STATUS } from "../../helpers/Constants";
const initial_state = {
  data: {},
  status: "",
  error: "",
};
export const acceptOfferReducer = (state = initial_state, action) => {
  switch (action.type) {
    case PUT_ACCEPT_OFFER_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case PUT_ACCEPT_OFFER_SUCCESS:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };
    case PUT_ACCEPT_OFFER_ERROR:
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.payload };
    default:
      return state;
  }
};