import {
  GET_PRODUCTS_PENDING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../constants/products";
import axios from "axios";

export const getProducts = () => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_PENDING });
  axios
    .get("https://bootcampapi.techcs.io/api/fe/v1/product/all")
    .then((response) => {
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data });
    })
    .catch((error) => dispatch({ type: GET_PRODUCTS_ERROR, payload: error }));
};
