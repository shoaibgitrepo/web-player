import { createSlice } from "@reduxjs/toolkit";
import http from "../../services/http";

const initialState = {
  loading: false,
  value: 0,
  user: { results: [] },
};

const url = "?page=1";

export const entitySlice = createSlice({
  name: "entity",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading, increment, decrement, incrementByAmount, setUser } =
  entitySlice.actions;

export const increaseCounter = () => (dispatch, getState) => {
  console.log("dispatch, getState", dispatch, getState);
  dispatch(increment());
};

export const decreaseCounter = () => (dispatch, getState) => {
  console.log("dispatch, getState", dispatch, getState);
  dispatch(decrement());
};

export const fetchUsers = () => (dispatch) => {
  dispatch(setLoading(true));
  http.get(url).then(({ data }) => {
    dispatch(setUser(data));
    dispatch(setLoading(false));
  });
};

export default entitySlice.reducer;
