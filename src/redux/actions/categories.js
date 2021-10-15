import {
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR,
} from "../constants/categoriesTypes";
import axios from "axios";


export const getCategories = () =>  (dispatch) => {
  dispatch({ type: GET_CATEGORIES_PENDING });
  axios
    .get("http://bootcampapi.techcs.io/api/fe/v1/detail/category/all")
    .then((response) => {
      dispatch({ type: GET_CATEGORIES_SUCCESS, payload: response.data });
    })
    .catch((error) => dispatch({ type: GET_CATEGORIES_ERROR, payload: error }));
};

