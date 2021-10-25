import {
  POST_OFFER_PENDING,
  POST_OFFER_SUCCESS,
  POST_OFFER_ERROR,
  POST_OFFER_INITIAL,
} from "../constants/offer";
import axios from "axios";

export const postOffer = (id, price) => (dispatch) => {
  dispatch({ type: POST_OFFER_PENDING });
  const token = localStorage.getItem("AccessToken");
  const data = {
    offeredPrice: price,
  };
  axios
    .post("https://bootcampapi.techcs.io/api/fe/v1/product/offer/" + id, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      dispatch({ type: POST_OFFER_SUCCESS, payload: response.data });
    })
    .catch((error) =>
      dispatch({ type: POST_OFFER_ERROR, payload: error.response.data })
    );
};
export const resetPostOffer = (data) => (dispatch) => {
  dispatch({ type: POST_OFFER_INITIAL });
};
