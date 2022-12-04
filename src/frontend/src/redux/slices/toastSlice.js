import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  severity: null,
  message: null,
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setToast: (state, action) => {
      if (!action.payload) state.open = false;
      else {
        const { open, severity, message } = action.payload;
        if (open) {
          state.open = true;
          state.severity = severity ? severity : "info";
          state.message = message;
        } else state.open = false;
      }
    },
  },
});

export const { setToast } = toastSlice.actions;
export default toastSlice.reducer;
