import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createReduxSagamiddelware from "redux-saga";

import rootSaga from "./root-saga";
import rootReducer from "./root-reducer";

const sagaMiddelware = createReduxSagamiddelware();
let middlewares = [sagaMiddelware];
if (process.env.NODE_ENV === "development") {
  middlewares = [...middlewares, logger];
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddelware.run(rootSaga);

export const persistor = persistStore(store);
