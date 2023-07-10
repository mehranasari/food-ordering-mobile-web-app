import { types } from "../types";

const initialState = {
  orderType: localStorage.orderType ? JSON.parse(localStorage.getItem('orderType')) : null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.SET_ORDERTYPE:
      return {
        ...state,
        orderType: payload,
        loading: false
      };
    case types.ORDERTYPE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
