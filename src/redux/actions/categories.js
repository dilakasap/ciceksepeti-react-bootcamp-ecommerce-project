import {
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR,
} from "../constants/categoriesTypes";
import axios from "axios";
import { getCategoriesApi } from "../../helpers/FakeDataApi";

export const getCategories = () =>  (dispatch) => {
  dispatch({ type: GET_CATEGORIES_PENDING });
  axios
    .get("#")
    .then((response) => {
      dispatch({ type: GET_CATEGORIES_SUCCESS, payload: getCategoriesApi() });
    })
    .catch((error) => dispatch({ type: GET_CATEGORIES_ERROR, payload: error }));
};

