import React from "react";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import Carousel from "../../components/Carousel";
import AppLogo from "../../components/AppLogo";
import styles from "../../utils/styles";
import colors from "../../utils/colors";
import FormField from "../../components/forms/FormField";
import PasswordField from "../../components/forms/PasswordField";
import SubmitButton from "../../components/forms/SubmitButton";
import { login } from "../../../redux/slices/authSlice";

const initialValues = {
  email: "",
  password: "",
};

export default function SignInSide() {
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .max(255, "Maximum 255 characters")
      .required("Required Field"),
    password: Yup.string()
      .max(255, "Maximum 255 characters")
      .required("Required Field"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    dispatch(login(values));
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={0} square>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ status }) => (
            <Box
              component="form"
              sx={{
                m: 3,
                // mr: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Box sx={{ mb: 4 }}>
                <AppLogo />
              </Box>
              <Typography variant="h5" noWrap sx={styles.pageTitle}>
                IOT CCMS LOGIN
              </Typography>
              <FormField name="email" label="Login ID" />
              <PasswordField name="password" />
              {/* <FormControlLabel
                    name="remember"
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  /> */}
              <SubmitButton sx={{ display: "block", my: 3 }} title="LOGIN" />
              <Grid container>
                <Grid item>
                  <Link href="#" variant="body2" sx={{ fontWeight: "bold" }}>
                    Register
                  </Link>
                </Grid>
                <Typography
                  variant="p"
                  noWrap
                  component="p"
                  sx={{
                    mx: 1,
                    display: "inline",
                    color: colors.primary,
                    fontWeight: "bold",
                  }}
                >
                  |
                </Typography>
                <Grid item>
                  <Link href="#" variant="body2" sx={{ fontWeight: "bold" }}>
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          )}
        </Formik>
      </Grid>
      <Grid
        sm={4}
        md={8}
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <Carousel />
      </Grid>
    </Grid>
  );
}
