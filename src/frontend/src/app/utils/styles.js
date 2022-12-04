import colors from "./colors";

const appTitle = {
  display: { xs: "none", md: "flex" },
  fontFamily: "bahnschrift",
  fontStretch: "semi-condensed",
  fontSize: 38,
  color: "inherit",
  textDecoration: "underline",
};

const appLogo = {
  fontFamily: "candara",
  fontWeight: "bold",
  textDecoration: "none",
  lineHeight: 1.15,
};

const submitButton = {
  fontFamily: "candara",
  fontWeight: "bold",
  color: "inherit",
};

const pageTitle = {
  display: { xs: "none", md: "flex" },
  fontFamily: "bahnschrift",
  fontStretch: "semi-condensed",
  color: "inherit",
  textDecoration: "underline",
};

const dashboardToggle = {
  m: "0px 5px",
  display: "inline",
  fontFamily: "bahnschrift",
  fontStretch: "semi-condensed",
  color: colors.primary,
};

const table = {
  header: {
    background: colors.primary,
    color: "white",
    fontSize: 10,
    border: `1px solid ${colors.light}`,
    padding: 1,
    fontWeight: "bold",
    lineHeight: 1.5,
  },
  body: {
    fontSize: 10,
    border: `1px solid ${colors.light}`,
    padding: 1,
  },
};

export default {
  appLogo,
  submitButton,
  appTitle,
  pageTitle,
  dashboardToggle,
  table,
};
