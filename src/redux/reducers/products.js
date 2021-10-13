import { GET_PRODUCTS_PENDING,GET_PRODUCTS_SUCCESS,GET_PRODUCTS_ERROR } from "../constants/products";
const initial_state = {
  data: [],
  status: "",
  error: "",
};
export const productReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_PRODUCTS_PENDING:
      return {...state,status:"PENDING"};
    case GET_PRODUCTS_SUCCESS:
      return {...state,status:"SUCCESS",data:action.payload};
    case GET_PRODUCTS_ERROR:
      return {...state,status:"ERROR",error:action.payload};
    default:
      return state;
  }
};