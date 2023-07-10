import { combineReducers } from 'redux';

import auth from './reducers/auth';
import venuesGroup from './reducers/venuesGroup';
import venue from './reducers/venue';
import hamburgerMenu from './reducers/hamburgerMenu';
import orderType from './reducers/orderType';
import userProfile from './reducers/userProfile';
import setting from './reducers/setting';
import cart from './reducers/cart';
import menu from './reducers/menu';
import ordersHistory from './reducers/ordersHistory';
import item from './reducers/item';
import theme from "./reducers/theme"
import addresses from "./reducers/addresses"
import onlinePortals from "./reducers/onlinePortals"


export default combineReducers({
  auth,
  venuesGroup,
  venue,
  hamburgerMenu,
  orderType,
  userProfile,
  setting,
  cart,
  menu,
  ordersHistory,
  item,
  theme,
  addresses,
  onlinePortals
});