import {
  POST_CREATE_PRODUCT_PENDING,
  POST_CREATE_PRODUCT_SUCCESS,
  POST_CREATE_PRODUCT_ERROR,
} from "../constants/createProduct";
import axios from "axios";
export const postCreateProduct = (data) => (dispatch) => {
  dispatch({ type: POST_CREATE_PRODUCT_PENDING });
  const createProductData = {
    price: data.price,
    imageUrl: data.imageUrl,
    title: data.title,
    status: {
      title: data.status.title,
      id: data.status.id,
    },
    color: {
      title: data.color.title,
      id: data.color.id,
    },
    brand: {
      title: data.brand.title,
      id: data.brand.id,
    },
    category: {
      title: data.category.title,
      id: data.category.id,
    },
    description: data.description,
    isOfferable: data.isOfferable,
  };
  const token = localStorage.getItem("AccessToken");
  axios
    .post(
      "https://bootcampapi.techcs.io/api/fe/v1/product/create",
      { data },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )

    .then((response) => {
      dispatch({ type: POST_CREATE_PRODUCT_SUCCESS, payload: response.data });
    })

    .catch((error) => {
      dispatch({
        type: POST_CREATE_PRODUCT_ERROR,
        payload: error.response.data,
      });
    });
};
