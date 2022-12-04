import { createSlice } from "@reduxjs/toolkit";
import http from "../../services/http";
import urls from "../../services/urls";

const initialState = {
  loading: false,
  nodes: [],
  nodeDetails: [],
  count: 0,
};

export const nodeSlice = createSlice({
  name: "node",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setNodes: (state, action) => {
      state.nodes = action.payload;
    },
    setNodeDetails: (state, action) => {
      state.nodeDetails = action.payload;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading, setNodes, setNodeDetails, setCount } =
  nodeSlice.actions;

export const fetchNodes = (query) => (dispatch) => {
  dispatch(setLoading(true));
  http.get(`${urls.fetchNodes}?${query}`).then(({ data }) => {
    if (data.data) dispatch(setNodes(data.data));
    else dispatch(setNodes([]));
    if (data.count) dispatch(setCount(data.count));
    else dispatch(setCount(0));
    dispatch(setLoading(false));
  });
};

export const fetchNodeDetails = (query) => (dispatch) => {
  dispatch(setLoading(true));
  http.get(`${urls.fetchNodeDataById}?${query}`).then(({ data }) => {
    if (data.data) dispatch(setNodeDetails(data.data));
    else dispatch(setNodeDetails([]));
    if (data.count) dispatch(setCount(data.count));
    else dispatch(setCount(0));
    dispatch(setLoading(false));
  });
};

export default nodeSlice.reducer;
