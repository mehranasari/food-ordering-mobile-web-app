import { types } from "../types";

const initialState = {
  onlinePaymentResponse: null,
  onlinePaymentLoading: false,
  onlinePayMethod: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.CONNECT_TO_ONLINE_PAY:
      return {
        ...state,
        onlinePaymentLoading: true,
      };
    case types.CONNECT_TO_ONLINE_PAY_SUCCESS:
      return {
        ...state,
        onlinePaymentResponse: payload,
        onlinePaymentLoading: false,
      };
    case types.CLEAR_ONLINEPORTAL_RESPONSE:
      return {
        ...state,
        onlinePaymentResponse: null,
      };
    case types.SET_ONLINE_PAY_METHOD:
      return {
        ...state,
        onlinePayMethod: payload,
      };

      
    default:
      return state;
  }
}
