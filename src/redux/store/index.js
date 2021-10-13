import { applyMiddleware, createStore, combineReducers } from "redux";
import { categoriesReducer } from "../reducers/categories";
import { productReducer } from "../reducers/products";
import thunk from "redux-thunk";
const reducers = combineReducers({
  categories: categoriesReducer,
  products: productReducer,
});
export const store = createStore(reducers, applyMiddleware(thunk));
