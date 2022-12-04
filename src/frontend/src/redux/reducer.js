import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import session from "redux-persist/lib/storage/session";

import toastReducer from "./slices/toastSlice";
import authReducer from "./slices/authSlice";
import counterReducer from "./slices/counterSlice";
import entityReducer from "./slices/entitySlice";
import nodeReducer from "./slices/nodeSlice";

// Local storage
const storageAuth = { key: "auth", storage };
const storageAuthReducer = persistReducer(storageAuth, authReducer);

// Session storage
const sessionCounter = { key: "counter", storage: session };
const sessionCounterReducer = persistReducer(sessionCounter, counterReducer);

export default combineReducers({
  toast: toastReducer,
  auth: storageAuthReducer,
  counter: sessionCounterReducer,
  entity: entityReducer,
  node: nodeReducer,
});
