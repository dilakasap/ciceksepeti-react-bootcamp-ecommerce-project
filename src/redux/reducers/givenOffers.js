import { REQUEST_STATUS } from "../../helpers/Constants";
import {
  GET_GIVEN_OFFERS_PENDING,
  GET_GIVEN_OFFERS_SUCCESS,
  GET_GIVEN_OFFERS_ERROR,
  GET_GIVEN_OFFERS_INITIAL,
} from "../constants/givenOffers";
const initial_state = {
  data: [],
  status: "",
  error: "",
};
export const givenOffersReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_GIVEN_OFFERS_INITIAL:
      return { state, status: REQUEST_STATUS.PENDING };
    case GET_GIVEN_OFFERS_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case GET_GIVEN_OFFERS_SUCCESS:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };
    case GET_GIVEN_OFFERS_ERROR:
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.payload };
    default:
      return state;
  }
};
