import { types } from "../types";

//open hamburger menu
export const openHamburgerMenu = (status, originUrl, history) => (dispatch) => {
  dispatch({
    type: types.SET_HAMBURGERMENU,
    payload: status,
  });
  dispatch({ type: types.CLEAR_ITEM });

  history.push(`${originUrl}#hamburgerMenu`);

};

//close hamburger menu
export const closeHamburgerMenu = (status, url, history) => (dispatch) => {
  dispatch({
    type: types.REMOVE_HAMBURGERMENU,
    payload: status,
  });

  url && history.push(url);

};
