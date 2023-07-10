import React from "react";
import { Switch, Route } from "react-router-dom";
import { NameSpace } from './NameSpace';
import PropTypes from "prop-types";
import { connect } from "react-redux";

//import pages
import VenuesGroup from "../Pages/VenuesGroup";
import NotFound from "../Pages/NotFound";

const CommonRoutes = ({ venuesGroup: { loading, venuesGroup } }) => {

  return !loading && venuesGroup === null ? (
    <NotFound />
  ) : (
    <Switch>
      <Route exact path={NameSpace.venuesGroup} component={VenuesGroup} />
    </Switch >
  );
};


CommonRoutes.propTypes = {
  venuesGroup: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  venuesGroup: state.venuesGroup,
});

export default connect(mapStateToProps, {})(CommonRoutes);