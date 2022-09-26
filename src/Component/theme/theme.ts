import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "green",
        },
      },
    },
  },
});

export default theme;
