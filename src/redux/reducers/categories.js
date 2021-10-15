import { GET_CATEGORIES_PENDING,GET_CATEGORIES_SUCCESS,GET_CATEGORIES_ERROR } from "../constants/categoriesTypes";
import { REQUEST_STATUS } from "../../helpers/Constants";
const initial_state = {
  data: [],
  status: "",
  error: "",
};
export const categoriesReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_CATEGORIES_PENDING:
      return {...state,status:REQUEST_STATUS.PENDING};
    case GET_CATEGORIES_SUCCESS:
      return {...state,status:REQUEST_STATUS.SUCCESS,data:action.payload};
    case GET_CATEGORIES_ERROR:
      return {...state,status:REQUEST_STATUS.ERROR,error:action.payload};
    default:
      return state;
  }
};
