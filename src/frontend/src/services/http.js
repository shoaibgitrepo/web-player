import axios from "axios";
import config from "../config";
import { setToast } from "../redux/slices/toastSlice";

const setupAxios = (axios, store) => {
  if (process.env.NODE_ENV === "production")
    axios.defaults.baseURL = `${window.location.origin}${config.apiUrl}`;
  else axios.defaults.baseURL = `${config.apiEndpoint}${config.apiUrl}`;

  axios.interceptors.request.use(
    (config) => {
      const {
        auth: { accessToken },
      } = store.getState();

      if (accessToken) {
        config.headers["Auth-Token"] = `Bearer ${accessToken}`;
      }

      return config;
    },
    (err) => Promise.reject(err)
  );

  axios.interceptors.response.use(null, (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      // logger.log(error);
      store.dispatch(
        setToast({
          open: true,
          severity: "error",
          message: "An unexpected error occured",
        })
      );
    } else {
      store.dispatch(
        setToast({
          open: true,
          severity: "error",
          message: error.response.data,
        })
      );
    }

    return Promise.reject(error);
  });
};

export default {
  axios,
  setupAxios,
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
