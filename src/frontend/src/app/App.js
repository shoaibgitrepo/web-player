import React, { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { setToast } from "../redux/slices/toastSlice";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import "./App.css";
import Loader from "./components/Loader";
import AuthInit from "./pages/auth/AuthInit";
import { Routing } from "./Routing";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const dispatch = useDispatch();
  const { open, severity, message } = useSelector((state) => state.toast);
  console.log("open, severity", open, severity);

  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <AuthInit>
          <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={() => dispatch(setToast(false))}
          >
            <Alert
              onClose={() => dispatch(setToast(false))}
              severity={severity}
              sx={{ width: "100%" }}
            >
              {message}
            </Alert>
          </Snackbar>
          <Routing />
        </AuthInit>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
