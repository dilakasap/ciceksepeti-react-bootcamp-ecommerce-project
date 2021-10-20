import {
  PUT_ACCEPT_OFFER_PENDING,
  PUT_ACCEPT_OFFER_SUCCESS,
  PUT_ACCEPT_OFFER_ERROR,
} from "../constants/acceptOffer";
import axios from "axios";

export const putAcceptOffer = (id) => (dispatch) => {
  dispatch({ type: PUT_ACCEPT_OFFER_PENDING });
  const token = localStorage.getItem("AccessToken");
  console.log(token);
  axios
    .put(
      "https://bootcampapi.techcs.io/api/fe/v1/account/accept-offer/" + id,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((response) => {
      dispatch({ type: PUT_ACCEPT_OFFER_SUCCESS, payload: response.data });
    })
    .catch((error) =>
      dispatch({ type: PUT_ACCEPT_OFFER_ERROR, payload: error.response.data })
    );
};
