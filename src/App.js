import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

//import pages
import HamburgerMenu from './Pages/HamburgerMenu';
import VenueRoutes from "./Routes/VenueRoutes";
import CommonRoutes from "./Routes/CommonRoutes";

//import components
import ThemeProviders from "./ThemeProviders"
import Socket from "./Shared/socket";
import Schema from "./Schema";

//import actions
import store from "./Redux/store";
import setAuthToken from "./Redux/App/setAuthToken";
import { loadUser } from "./Redux/action/auth";
import { getCurrentUserProfile, } from "./Redux/action/userProfile";
import { getVenue } from "./Redux/action/venue";

//utils
import ConvertDomainToStandardState from "./Utils/method/ConvertDomainToStandardState";

//import styles
import "./App.css";

//import theme

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  // const reduxTheme=store.getState()?.theme?.theme

  const [subdomain, setSubDomain] = useState(null);
  useEffect(() => {

    const host = ConvertDomainToStandardState();

    let url;
    let arr;

    switch (host) {
      case "dev-mashinbuzz.ir":
        url = "mehrantest";
        break;
      case "cafekenari.com":
        url = "cafekenari";
        break;
    }

    if (url) {
      arr = url;
    } else {
      arr = host.split(".").slice(0, host.includes("localhost") ? -1 : -2)[0];
    }

    setSubDomain(arr);
    store.dispatch(getVenue(arr), []);

  }, []);

  useEffect(() => {
    store.dispatch(loadUser(), []);
    store.dispatch(getCurrentUserProfile(), []);
  }, []);

  return (
    <Provider store={store}>
      <ThemeProviders>
        <BrowserRouter>
          <Schema />
          <Socket />
          <HamburgerMenu />
          <ToastContainer position="top-center" autoClose={2000} rtl />
          {subdomain ? <VenueRoutes /> : <CommonRoutes />}
        </BrowserRouter>
      </ThemeProviders>
    </Provider>
  );
};

export default App;
