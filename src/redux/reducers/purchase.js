import {
  PUT_PURCHASE_PENDING,
  PUT_PURCHASE_SUCCESS,
  PUT_PURCHASE_ERROR,
  PUT_PURCHASE_INITIAL,
} from "../constants/purchase";
import { REQUEST_STATUS } from "../../helpers/Constants";
const initial_state = {
  data: {},
  status: "",
  error: "",
};
export const purchaseReducer = (state = initial_state, action) => {
  switch (action.type) {
    case PUT_PURCHASE_INITIAL:
      return { state, status: REQUEST_STATUS.PENDING };
    case PUT_PURCHASE_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case PUT_PURCHASE_SUCCESS:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };
    case PUT_PURCHASE_ERROR:
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.payload };
    default:
      return state;
  }
};
