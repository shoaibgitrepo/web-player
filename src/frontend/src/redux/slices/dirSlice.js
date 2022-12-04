import { createSlice } from "@reduxjs/toolkit";
import http from "../../services/http";
import urls from "../../services/urls";

const initialState = {
  loading: false,
  list: [],
  currentDir: "",
};

export const dirSlice = createSlice({
  name: "dir",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setList: (state, action) => {
      state.list = action.payload;
    },
    setCurrentDir: (state, action) => {
      state.currentDir = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading, setList, setCurrentDir } = dirSlice.actions;

export const fetchDir = (query) => (dispatch, getState) => {
  const state = getState().dir;
  dispatch(setLoading(true));
  http
    .get(`${urls.fetchDir}?${query}`)
    .then(({ data }) => {
      dispatch(setLoading(false));
      if (data.data) dispatch(setList(data.data));
      else dispatch(initialState.list);
      const selectedDir = query.split("=")[1];
      if (selectedDir) dispatch(setCurrentDir(selectedDir));
      else dispatch(setCurrentDir(initialState.currentDir));
    })
    .catch((error) => {
      dispatch(setLoading(false));
    });
};

export default dirSlice.reducer;
