import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import { useTheme } from "@mui/material/styles";
import { TextField } from "@mui/material";
import styled from "styled-components";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { connect } from "react-redux";

const CutomTimePicker = styled(StaticTimePicker)({
  "& .MuiDialogActions-root": {
    display: "none !important",
  },
});

const TimePicker = (props) => {
  const {
    label,
    icon,
    direction,
    backgroundColor,
    name,
    require,
    error,
    showErrorMessage,
    defaultValue,
    value,
    onChange,
    theme,
    ...rest
  } = props;

  const outerTheme = useTheme();

  const innerTheme = createTheme({
    ...outerTheme,
    palette: {
      primary: {
        main: grey[900],
        // main:`${theme.color_text_primary}` ,
      },
    },
    components: {
      ...outerTheme.components,
      MuiPickerStaticWrapper: {
        styleOverrides: {
          root: {
            fontFamily: "IranSanse !important",
            color: `${theme.color_text_primary}`,
            "& .MuiDialogActions-root": {
              display: "none !important",
            },
          },
          content: {
            backgroundColor: `${theme.color_background_primary}`,
          },

        },
      },
      MuiClock: {
        styleOverrides: {
          clock: {
            backgroundColor: `${theme.color_background_clock}`,
          },
        },
      },
   
      MuiTypography: {
        styleOverrides: {
          root: {
            "&.PrivatePickersToolbarText-root" :{
                color: `${theme.color_text_clock}`,

            },
            "&.PrivatePickersToolbarText-root.Mui-selected" :{
                color: `${theme.color_text_primary}`,

            }
          },
        },
      },
    },
  });
  const handleChange = (e) => {
    onChange && onChange(e);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={innerTheme}>
        <CutomTimePicker
          displayStaticWrapperAs="mobile"
          ampm={false}
          value={value}
          onChange={handleChange}
          toolbarTitle={""}
          renderInput={(params) => <TextField {...params} fullWidth />}
          {...rest}
        />
      </ThemeProvider>
    </LocalizationProvider>
  );
};
const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps, {})(TimePicker);
