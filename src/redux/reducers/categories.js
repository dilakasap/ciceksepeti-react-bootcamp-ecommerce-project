import { GET_CATEGORIES_PENDING,GET_CATEGORIES_SUCCESS,GET_CATEGORIES_ERROR } from "../constants/categoriesTypes";
const initial_state = {
  data: [],
  status: "",
  error: "",
};
export const categoriesReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_CATEGORIES_PENDING:
      return {...state,status:"PENDING"};
    case GET_CATEGORIES_SUCCESS:
      return {...state,status:"SUCCESS",data:action.payload};
    case GET_CATEGORIES_ERROR:
      return {...state,status:"ERROR",error:action.payload};
    default:
      return state;
  }
};
