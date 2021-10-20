import {
  POST_LOGIN_PENDING,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_ERROR,
} from "../constants/login";
import axios from "axios";
export const postLogin = (email, password) => (dispatch) => {
  dispatch({ type: POST_LOGIN_PENDING });
  const data = {
    email: email,
    password: password,
  };
  axios
    .post("https://bootcampapi.techcs.io/api/fe/v1/authorization/signin", data)
    .then((response) => {
      dispatch({ type: POST_LOGIN_SUCCESS, payload: response.data });
      
    })
    
    .catch((error) => {
      dispatch({ type: POST_LOGIN_ERROR, payload: error.response.data });
    });
    
};
