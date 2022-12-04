import { createSlice } from "@reduxjs/toolkit";
import http from "../../services/http";
import urls from "../../services/urls";
import { setToast } from "./toastSlice";

// const initialState = {
//   loading: false,
//   accessToken: null,
//   user: null,
// };

const initialState = {
  loading: false,
  accessToken: "token1",
  user: {
    name: "Test",
  },
};

const url = "/todos/1";

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { setLoading, setAccessToken, setUser, logout } =
  authSlice.actions;

export const login = (body) => (dispatch) => {
  dispatch(setLoading(true));
  http
    .post(urls.userLogin, body)
    .then(({ data }) => {
      dispatch(setLoading(false));
      if (data.access_token) {
        dispatch(setAccessToken(data.access_token));
        dispatch(getUserByToken());
      } else
        dispatch(setToast({ open: true, severity: "error", message: data }));
    })
    .catch(() => dispatch(setLoading(false)));
};

export const getUserByToken = () => (dispatch) => {
  dispatch(setLoading(true));
  http
    .get(urls.userByToken)
    .then(({ data }) => {
      dispatch(setLoading(false));
      if (data.email) dispatch(setUser(data));
      else {
        // dispatch(setToast({ open: true, severity: "error", message: data }));
        dispatch(logout());
      }
    })
    .catch(() => {
      dispatch(setLoading(false));
      dispatch(logout());
    });
};

export default authSlice.reducer;
