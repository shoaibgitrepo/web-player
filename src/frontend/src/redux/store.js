import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import reducer from "./reducer";
import logger from "./middlewares/logger";

const sagaMiddleware = createSagaMiddleware();
const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({ serializableCheck: false })
    .concat(sagaMiddleware)
    .concat(logger("Console"));

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

// sagaMiddleware.run(rootSaga);

export default store;
