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
import { signupReducer } from "../reducers/signup";
import { loginReducer } from "../reducers/login";
import thunk from "redux-thunk";
import { purchaseReducer } from "../reducers/purchase";
import { rejectOfferReducer } from "../reducers/rejectOffer";
import { acceptOfferReducer } from "../reducers/acceptOffer";
import { offerReducer } from "../reducers/offer";
import { cancelOfferReducer } from "../reducers/cancelOffer";
import { uploadImageReducer } from "../reducers/uploadImage";
import { createProductReducer } from "../reducers/createProduct";
import { composeWithDevTools } from "redux-devtools-extension";

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
  signup: signupReducer,
  login: loginReducer,
  purchase: purchaseReducer,
  rejectOffer: rejectOfferReducer,
  acceptOffer: acceptOfferReducer,
  offer: offerReducer,
  cancelOffer: cancelOfferReducer,
  uploadedImage: uploadImageReducer,
  createProduct: createProductReducer,
});
export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
