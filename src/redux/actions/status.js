import {
  GET_STATUS_PENDING,
  GET_STATUS_SUCCESS,
  GET_STATUS_ERROR,
} from "../constants/status";
import axios from "axios";

export const getStatus = () => (dispatch) => {
  dispatch({ type: GET_STATUS_PENDING });
  axios
    .get("https://bootcampapi.techcs.io/api/fe/v1/detail/status/all")
    .then((response) => {
      dispatch({ type: GET_STATUS_SUCCESS, payload: response.data });
    })
    .catch((error) => dispatch({ type: GET_STATUS_ERROR, payload: error }));
};
