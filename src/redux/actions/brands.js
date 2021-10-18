import {
  GET_BRANDS_PENDING,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_ERROR,
} from "../constants/brands";
import axios from "axios";

export const getBrands = () => (dispatch) => {
  dispatch({ type: GET_BRANDS_PENDING });
  axios
    .get("https://bootcampapi.techcs.io/api/fe/v1/detail/brand/all")
    .then((response) => {
      dispatch({ type: GET_BRANDS_SUCCESS, payload: response.data });
    })
    .catch((error) => dispatch({ type: GET_BRANDS_ERROR, payload: error }));
};
