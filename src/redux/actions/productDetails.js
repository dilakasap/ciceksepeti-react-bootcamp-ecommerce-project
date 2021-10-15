import {
  GET_PRODUCT_DETAILS_PENDING,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_ERROR,
} from "../constants/productDetails";
import axios from "axios";

export const getProductDetails = (id) =>  (dispatch) => {
  dispatch({ type: GET_PRODUCT_DETAILS_PENDING });
  axios
    .get("http://bootcampapi.techcs.io/api/fe/v1/product/"+id)
    .then((response) => {
      dispatch({ type: GET_PRODUCT_DETAILS_SUCCESS, payload: response.data });
    })
    .catch((error) => dispatch({ type: GET_PRODUCT_DETAILS_ERROR, payload: error }));
};
