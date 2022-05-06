import { createTheme } from "@rneui/themed";
import constants from "./constants";

const theme = createTheme({
  lightColors: {
    primary: constants.primary_color,
    secondary: constants.secondary_color,
  },
  darkColors: {
    primary: "#000",
  },
});

export default theme;
