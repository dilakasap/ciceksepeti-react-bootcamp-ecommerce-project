import {
  POST_SIGNUP_PENDING,
  POST_SIGNUP_SUCCESS,
  POST_SIGNUP_ERROR,
} from "../constants/signup";
import axios from "axios";
export const postSignup = (email, password) => (dispatch) => {
  dispatch({ type: POST_SIGNUP_PENDING });
  const data = {
    email: email,
    password: password,
  };
  axios
    .post("https://bootcampapi.techcs.io/api/fe/v1/authorization/signup", data)
    .then((response) => {
      dispatch({ type: POST_SIGNUP_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: POST_SIGNUP_ERROR, payload: error.response.data });
    });
};
