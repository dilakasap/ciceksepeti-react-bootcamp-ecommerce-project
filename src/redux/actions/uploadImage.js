import {
  POST_UPLOAD_IMAGE_PENDING,
  POST_UPLOAD_IMAGE_SUCCESS,
  POST_UPLOAD_IMAGE_ERROR,
} from "../constants/uplooadImage";
import axios from "axios";
export const uploadImage = (data) => (dispatch) => {
  dispatch({ type: POST_UPLOAD_IMAGE_PENDING });
  const token = localStorage.getItem("AccessToken");
  const formData = new FormData();
  formData.append("file", data);
  axios
    .post(
      "https://bootcampapi.techcs.io/api/fe/v1/file/upload/image",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": `multipart/form-data`,
        },
      }
    )

    .then((response) => {
      dispatch({ type: POST_UPLOAD_IMAGE_SUCCESS, payload: response.data });
    })

    .catch((error) => {
      dispatch({ type: POST_UPLOAD_IMAGE_ERROR, payload: error.response.data });
    });
};
