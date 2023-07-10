import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { NameSpace } from './NameSpace';


const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, onlyDigitalMenu, ...rest }) => (
  <Route {...rest} render={props => {
    if (!isAuthenticated && !loading) return <Redirect to="/account/login" />
    else {
      if (onlyDigitalMenu) return <Redirect to={NameSpace.menu} />
      else return <Component {...props} />
    }
  }} />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
