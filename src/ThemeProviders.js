import React from 'react'
import { ThemeProvider as StyleComponentThemeProvider } from "styled-components";
import { ThemeProvider } from "@mui/material/styles";
import { GlobalStyle } from "./Shared/Theme/GlobalStyle";
import { Container } from "@mui/material";
import { StylesProvider } from "@material-ui/core/styles";
import { muiTheme } from "./Shared/Theme/MuiTheme";
import { connect } from "react-redux";

import PropTypes from "prop-types";

const ThemeProviders = ({ children ,theme}) => {

    return (
        <ThemeProvider theme={muiTheme}>
            <StylesProvider injectFirst>
                <Container
                    sx={{
                        margin: "0 !important",
                        padding: "0 !important",
                        maxWidth: "unset !important",
                    }}
                >
                    <StyleComponentThemeProvider theme={theme}>
                        <GlobalStyle />
                        {children}
                    </StyleComponentThemeProvider>
                </Container>
            </StylesProvider>
        </ThemeProvider>
    )
}

ThemeProviders.propTypes = {
    theme: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    theme:state.theme.theme,
  
  });
  
  export default connect(mapStateToProps, {})(ThemeProviders);
