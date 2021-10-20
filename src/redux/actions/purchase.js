import {
  PUT_PURCHASE_PENDING,
  PUT_PURCHASE_SUCCESS,
  PUT_PURCHASE_ERROR,
} from "../constants/purchase";
import axios from "axios";

export const putPurchase = (id) => (dispatch) => {
  dispatch({ type: PUT_PURCHASE_PENDING });
  const token = localStorage.getItem("AccessToken");
  console.log(token);
  axios
    .put(
      "https://bootcampapi.techcs.io/api/fe/v1/product/purchase/" + id,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((response) => {
      dispatch({ type: PUT_PURCHASE_SUCCESS, payload: response.data });
    })
    .catch((error) =>
      dispatch({ type: PUT_PURCHASE_ERROR, payload: error.response.data })
    );
};
