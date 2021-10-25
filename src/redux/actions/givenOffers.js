import {
  GET_GIVEN_OFFERS_PENDING,
  GET_GIVEN_OFFERS_SUCCESS,
  GET_GIVEN_OFFERS_ERROR,
  GET_GIVEN_OFFERS_INITIAL,
} from "../constants/givenOffers";
import axios from "axios";
export const getGivenOffers = () => (dispatch) => {
  dispatch({ type: GET_GIVEN_OFFERS_PENDING });
  const token = localStorage.getItem("AccessToken");
  axios
    .get("https://bootcampapi.techcs.io/api/fe/v1/account/given-offers", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      console.log(response);
      dispatch({ type: GET_GIVEN_OFFERS_SUCCESS, payload: response.data });
    })
    .catch((error) =>
      dispatch({ type: GET_GIVEN_OFFERS_ERROR, payload: error })
    );
};

export const resetGivenOffers = (data) => (dispatch) => {
  dispatch({ type: GET_GIVEN_OFFERS_INITIAL});
}
