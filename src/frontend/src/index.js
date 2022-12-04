import React from "react";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";

import http from "./services/http";
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import store, { persistor } from "./redux/store";
import Loader from "./app/components/Loader";
import colors from "./app/utils/colors";

http.setupAxios(http.axios, store);

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
  palette: { primary: { main: colors.primary } },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<Loader />}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
