import { types } from "../types";
const initialState = {
  venuesGroup: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_VENUES_GROUP:
      return {
        ...state,
        venuesGroup: payload,
        loading: false,
      };
    case types.VENUES_GROUP_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
