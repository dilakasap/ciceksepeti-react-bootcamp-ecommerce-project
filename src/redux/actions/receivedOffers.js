import {
  GET_RECEIVED_OFFERS_PENDING,
  GET_RECEIVED_OFFERS_SUCCESS,
  GET_RECEIVED_OFFERS_ERROR,
} from "../constants/receivedOffers";
import axios from "axios";
export const getReceivedOffers = () => (dispatch) => {
  dispatch({ type: GET_RECEIVED_OFFERS_PENDING });
  const token = localStorage.getItem("AccessToken");
  axios
    .get("https://bootcampapi.techcs.io/api/fe/v1/account/received-offers", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      dispatch({
        type: GET_RECEIVED_OFFERS_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) =>
      dispatch({ type: GET_RECEIVED_OFFERS_ERROR, payload: error })
    );
};
