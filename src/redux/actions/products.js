import {
  GET_PRODUCTS_PENDING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../constants/products";
import axios from "axios";
import { getProductsApi } from "../../helpers/FakeDataApi";

export const getProducts = () =>  (dispatch) => {
  dispatch({ type: GET_PRODUCTS_PENDING });
  axios
    .get("#")
    .then((response) => {
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: getProductsApi() });
    })
    .catch((error) => dispatch({ type: GET_PRODUCTS_ERROR, payload: error }));
};
