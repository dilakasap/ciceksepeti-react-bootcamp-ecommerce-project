import {
  POST_CREATE_PRODUCT_PENDING,
  POST_CREATE_PRODUCT_SUCCESS,
  POST_CREATE_PRODUCT_ERROR,
} from "../constants/createProduct";
import axios from "axios";
export const postCreateProduct = (data) => (dispatch) => {
  console.log(data.formObject.price);
  dispatch({ type: POST_CREATE_PRODUCT_PENDING });
  const createProductData = {
    price: data.formObject.price,
    imageUrl: data.formObject.imageUrl,
    title: data.formObject.title,
    status: {
      title: data.formObject.status.title,
      id: data.formObject.status.id,
    },
    color: {
      title: data.formObject.color.title,
      id: data.formObject.color.id,
    },
    brand: {
      title: data.formObject.brand.title,
      id: data.formObject.brand.id,
    },
    category: {
      title: data.formObject.category.title,
      id: data.formObject.category.id,
    },
    description: data.formObject.description,
    isOfferable: data.formObject.isOfferable,
  };
  const token = localStorage.getItem("AccessToken");
  console.log(createProductData.price);
  axios
    .post(
      "https://bootcampapi.techcs.io/api/fe/v1/product/create",
      createProductData,
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
