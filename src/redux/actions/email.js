import {
  GET_EMAIL_PENDING,
  GET_EMAIL_SUCCESS,
  GET_EMAIL_ERROR,
} from "../constants/email";
import axios from "axios";
import { getMail } from "../../helpers/FakeDataApi";
import { useSelector } from "react-redux";

export const getEmail = () => (dispatch) => {
  dispatch({ type: GET_EMAIL_PENDING });
  axios
    .get("https://bootcampapi.techcs.io/api/fe/v1/detail/category/all")
    .then((response) => {
      dispatch({ type: GET_EMAIL_SUCCESS, payload: "dilakasap@gmail.com" });
    })
    .catch((error) => dispatch({ type: GET_EMAIL_ERROR, payload: error }));
};
