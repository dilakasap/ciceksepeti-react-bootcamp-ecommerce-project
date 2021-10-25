import {
  GET_PRODUCT_DETAILS_PENDING,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_ERROR,
  GET_PRODUCT_DETAILS_INITIAL,
} from "../constants/productDetails";
import axios from "axios";

export const getProductDetails = (id) => (dispatch) => {
  dispatch({ type: GET_PRODUCT_DETAILS_PENDING });
  const token = localStorage.getItem("AccessToken");
  console.log(token);
  axios
    .get(`https://bootcampapi.techcs.io/api/fe/v1/product/${id}`, { headers: {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    }})
    .then((response) => {
      dispatch({ type: GET_PRODUCT_DETAILS_SUCCESS, payload: response.data });
    })
    .catch((error) =>
      dispatch({ type: GET_PRODUCT_DETAILS_ERROR, payload: error })
    );
};

export const resetProductDetails = (data) => (dispatch) => {
  dispatch({ type: GET_PRODUCT_DETAILS_INITIAL});
}
