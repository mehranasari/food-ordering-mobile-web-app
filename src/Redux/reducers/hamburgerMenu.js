import { types } from '../types';

const initialState = {
  enabledHamburgerMenu: false,
};

export default function (state = initialState, action) {

  const { type, payload } = action;

  switch (type) {
    case types.SET_HAMBURGERMENU:
      return {
        enabledHamburgerMenu: payload
      };
    case types.REMOVE_HAMBURGERMENU:
      return {
        enabledHamburgerMenu: payload
      };
    default:
      return state;
  }
}