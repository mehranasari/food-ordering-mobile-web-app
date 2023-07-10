import {
types
} from '../types';


const initialState = {
  selectedItem: null,
  pageYOffset: 0,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.SET_ITEM:
      return {
        ...state,
        selectedItem: payload.item,
        pageYOffset: payload.pageYOffset,
        loading: false
      };
    case types.SET_PAGE_Y_OFFSET:
      return {
        ...state,
        pageYOffset: payload.pageYOffset,
        loading: false
      };
    case types.ITEM_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case types.CLEAR_ITEM:
      return {
        selectedItem: null,
        pageYOffset: 0,
        loading: false
      };
    default:
      return state;
  }
}
