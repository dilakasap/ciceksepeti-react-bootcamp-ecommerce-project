import {
  POST_REJECT_OFFER_PENDING,
  POST_REJECT_OFFER_SUCCESS,
  POST_REJECT_OFFER_ERROR,
} from "../constants/rejectOffer";
import axios from "axios";

export const postRejectOffer = (id) => (dispatch) => {
  dispatch({ type: POST_REJECT_OFFER_PENDING });
  const token = localStorage.getItem("AccessToken");
  console.log(token);
  axios
    .post(
      "https://bootcampapi.techcs.io/api/fe/v1/account/reject-offer/" + id,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((response) => {
      dispatch({ type: POST_REJECT_OFFER_SUCCESS, payload: response.data });
    })
    .catch((error) =>
      dispatch({ type: POST_REJECT_OFFER_ERROR, payload: error.response.data })
    );
};
