import { createTheme } from "@mui/material/styles";
import { theme } from "./index";

export const muiTheme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          width: "max-content",
          fontFamily: "IranSanse !important",
          textTransform: 'none',
          minWidth: 60,
          marginRight: "1rem",
          fontSize: '1rem',
          height: "3.429rem",

          "&.Mui-selected": {
            // color: theme.color_text_primary,
            fontWeight: 'bold',
            fontSize: '1.125rem',
          }
        }
      }
    },

 
    MuiPickersToolbar: {
      styleOverrides: {
        "content": {
          fontFamily: "IranSanse !important",
          justifyContent: "center",
          marginTop: "1rem",

        }
      }
    },

    MuiTimePickerToolbar: {
      styleOverrides: {
        "hourMinuteLabel": {
          fontFamily: "IranSanse !important",
          direction: "ltr !important",
        },


      }
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "IranSanse !important",
        },
      }
    },

  }
});
