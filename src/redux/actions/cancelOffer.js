import {
  DELETE_CANCEL_OFFER_PENDING,
  DELETE_CANCEL_OFFER_SUCCESS,
  DELETE_CANCEL_OFFER_ERROR,
  DELETE_CANCEL_OFFER_INITIAL,
} from "../constants/cancelOffer";
import axios from "axios";

export const cancelOffer = (id) => (dispatch) => {
  dispatch({ type: DELETE_CANCEL_OFFER_PENDING });
  const token = localStorage.getItem("AccessToken");
  console.log(token);
  axios
    .delete(
      "https://bootcampapi.techcs.io/api/fe/v1/account/cancel-offer/" + id,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((response) => {
      dispatch({ type: DELETE_CANCEL_OFFER_SUCCESS, payload: response.data });
    })
    .catch((error) =>
      dispatch({
        type: DELETE_CANCEL_OFFER_ERROR,
        payload: error.response.data,
      })
    );
};
export const resetCancelOffer = (data) => (dispatch) => {
  dispatch({ type: DELETE_CANCEL_OFFER_INITIAL });
};
