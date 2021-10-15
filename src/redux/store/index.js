import { applyMiddleware, createStore, combineReducers } from "redux";
import { categoriesReducer } from "../reducers/categories";
import { productReducer } from "../reducers/products";
import { productDetailsReducer } from "../reducers/productDetails";
import thunk from "redux-thunk";
const reducers = combineReducers({
  categories: categoriesReducer,
  products: productReducer,
  details:productDetailsReducer,
});
export const store = createStore(reducers, applyMiddleware(thunk));
