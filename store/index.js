import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index";
// Actions
import { fetchProduct } from "./actions/productActions";
import { fetchShop } from "./actions/shopActions";
import { checkForToken } from "./actions/authActions";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchProduct());
store.dispatch(fetchShop());
store.dispatch(checkForToken());
export default store;
