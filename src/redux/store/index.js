import { applyMiddleware, createStore, combineReducers } from "redux";
import { categoriesReducer } from "../reducers/categories";
import { productReducer } from "../reducers/products";
import { productDetailsReducer } from "../reducers/productDetails";
import { emailReducer } from "../reducers/email";
import { givenOffersReducer } from "../reducers/givenOffers";
import { receivedOffersReducer } from "../reducers/receivedOffers";
import { brandsReducer } from "../reducers/brands";
import { colorsReducer } from "../reducers/colors";
import { statusReducer } from "../reducers/status";
import thunk from "redux-thunk";

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productReducer,
  details: productDetailsReducer,
  email: emailReducer,
  givenOffers: givenOffersReducer,
  receivedOffers: receivedOffersReducer,
  brands: brandsReducer,
  colors: colorsReducer,
  status: statusReducer,
});
export const store = createStore(reducers, applyMiddleware(thunk));
