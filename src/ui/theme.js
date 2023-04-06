import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";
const coalblack = "#293026"




export const theme = createTheme({
  palette: {
    mode: "light",
    common: {
      blue: arcBlue,
      orange: arcOrange,
      black: coalblack
    },
    primary: {
      main: coalblack,
    },
    secondary: {
      main: arcOrange,
    },
    text: {
      primary: coalblack,
      secondary: {
        background: '#000000',
        opacity: 0.6,
    }
    }
  },
});
