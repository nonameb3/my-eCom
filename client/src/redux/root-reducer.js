import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

// session store config
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"]
};

// reducer
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

// reducer with session store
export default persistReducer(persistConfig, rootReducer);
