import {
  GET_COLORS_PENDING,
  GET_COLORS_SUCCESS,
  GET_COLORS_ERROR,
} from "../constants/colors";
import axios from "axios";

export const getColors = () => (dispatch) => {
  dispatch({ type: GET_COLORS_PENDING });
  axios
    .get("https://bootcampapi.techcs.io/api/fe/v1/detail/color/all")
    .then((response) => {
      dispatch({ type: GET_COLORS_SUCCESS, payload: response.data });
    })
    .catch((error) => dispatch({ type: GET_COLORS_ERROR, payload: error }));
};
