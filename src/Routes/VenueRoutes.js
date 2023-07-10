import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { NameSpace } from "./NameSpace";
import PrivateRoute from "./PrivateRoute";
import { ConnectSocket } from "../Shared/socket";
import { handleVenueStatusSocket } from "../Redux/action/venue";

//import pages
import Venue from "../Pages/Venue";
import Menu from "../Pages/Menu";
import Payment from "../Pages/Payment";
import ItemPage from "../Pages/ItemPage";
import LoginMethods from "../Pages/Login/LoginMethods";
import OtpVerification from "../Pages/Login/OtpVerification";
import OrderHistory from "../Pages/OrderHistory";
import BuildProfile from "../Pages/Login/BuildProfile";
import NotFound from "../Pages/NotFound";
import SuccessfulOrder from "../Pages/SuccessfulOrder";
import UnsuccessfulOrder from "../Pages/UnsuccessfulOrder";
import UnsuccessfulPay from "../Pages/UnsuccessfulPay";
import RedirectToOnlinePortal from "../Pages/RedirectToOnlinePortal";
import UnsuccessfulOnlinePortal from "../Pages/UnsuccessfulOnlinePortal";
import OrderDetailsHistory from "../Pages/OrderDetailsHistory";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import AboutUs from "../Pages/AboutUs";
import TermsOfUse from "../Pages/TermsOfUse";
import OnlineWallet from "../Pages/OnlineWallet";
import IncreaseOnlineWalletCredit from "../Pages/IncreaseOnlineWalletCredit";
import Zibal from "../Pages/OnlinePortals/Zibal";
import NextPay from "../Pages/OnlinePortals/NextPay";
import VerifyChargeOnlineWallet from "../Pages/VerifyChargeOnlineWallet";

const VenueRoutes = ({
  venue: { loading, venue, isVenueStatusSocketOn },
  handleVenueStatusSocket,
}) => {
  const onlyDigitalMenu = venue?.onlyDigitalMenu;

  useEffect(() => {
    if (venue) {
      ConnectSocket(venue, isVenueStatusSocketOn, handleVenueStatusSocket);
    }
  }, [venue]);

  return !loading && venue === null ? (
    <NotFound />
  ) : (
    <Switch>
      <Route exact path={NameSpace.url} component={Venue} />
      <Route exact path={NameSpace.privacyPolicy} component={PrivacyPolicy} />
      <Route exact path={NameSpace.termsOfUse} component={TermsOfUse} />
      <Route exact path={NameSpace.aboutUs} component={AboutUs} />
      <Route exact path={NameSpace.menu} component={Menu} />
      <Route exact path={NameSpace.itemPage} component={ItemPage} />
      <Route exact path={NameSpace.loginMethods} component={LoginMethods} />
      <Route
        exact
        path={NameSpace.otpVerification}
        component={OtpVerification}
      />
      <PrivateRoute
        path={NameSpace.buildProfile}
        component={BuildProfile}
        onlyDigitalMenu={false}
      />
      <PrivateRoute
        path={NameSpace.orderHistory}
        component={OrderHistory}
        onlyDigitalMenu={false}
      />
      <PrivateRoute
        path={NameSpace.successfulOrder}
        component={SuccessfulOrder}
        onlyDigitalMenu={onlyDigitalMenu}
      />
      <PrivateRoute
        exact
        path={NameSpace.unsuccessfulOrder}
        component={UnsuccessfulOrder}
        onlyDigitalMenu={onlyDigitalMenu}
      />
      <PrivateRoute
        path={NameSpace.unsuccessfulPay}
        component={UnsuccessfulPay}
        onlyDigitalMenu={onlyDigitalMenu}
      />
      <PrivateRoute
        exact
        path={NameSpace.payment}
        component={Payment}
        onlyDigitalMenu={onlyDigitalMenu}
      />
      <PrivateRoute
        exact
        path={NameSpace.redirectToOnlinePortal}
        component={RedirectToOnlinePortal}
        onlyDigitalMenu={onlyDigitalMenu}
      />
      <PrivateRoute
        exact
        path={NameSpace.returnToOnlinePortal}
        component={SuccessfulOrder}
        onlyDigitalMenu={onlyDigitalMenu}
      />
      <PrivateRoute
        exact
        path={NameSpace.unsuccessfulOnlinePortal}
        component={UnsuccessfulOnlinePortal}
        onlyDigitalMenu={onlyDigitalMenu}
      />
      <Route
        exact
        path={NameSpace.orderDetailsHistory}
        component={OrderDetailsHistory}
        onlyDigitalMenu={onlyDigitalMenu}
      />
      <PrivateRoute
        exact
        path={NameSpace.zibal}
        component={Zibal}
        onlyDigitalMenu={onlyDigitalMenu}
      />
      <PrivateRoute
        exact
        path={NameSpace.nextPay}
        component={NextPay}
        onlyDigitalMenu={onlyDigitalMenu}
      />
      <PrivateRoute
        exact
        path={NameSpace.onlineWallet}
        component={OnlineWallet}
        onlyDigitalMenu={onlyDigitalMenu}
      />
      <PrivateRoute
        exact
        path={NameSpace.increaseCredit}
        component={IncreaseOnlineWalletCredit}
        onlyDigitalMenu={onlyDigitalMenu}
      />
      <PrivateRoute
        exact
        path={NameSpace.verifyChargeUserOnlineWallet}
        component={VerifyChargeOnlineWallet}
        onlyDigitalMenu={onlyDigitalMenu}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

VenueRoutes.propTypes = {
  venue: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  venue: state.venue,
});

export default connect(mapStateToProps, { handleVenueStatusSocket })(
  VenueRoutes
);
