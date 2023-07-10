import { types } from "../types";

const initialState = {
  menu: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_MENU:
      return {
        ...state,
        menu: payload,
        loading: false
      };
    case types.MENU_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
      case types.CLEAR_MENU:
        return {
          menu: [],
          loading: false
        };
    default:
      return state;
  }
}
