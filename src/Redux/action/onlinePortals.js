import axios from "axios";

import store from "../store";
import Constants from "../../Utils/constants";
import { NameSpace } from "../../Routes/NameSpace";
import { types } from "../types";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};
// handle pay online
export const onlinePay = (order, history) => async (dispatch) => {
  dispatch({
    type: types.CONNECT_TO_ONLINE_PAY,
  });
  const venue=store.getState()?.venue?.venue
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/order/consumerApp/generateOrderPaymentPage/${order?._id}`,
      {
        callbackUrl: `${`${process.env.REACT_APP_SSL_PROTOCOL}://${venue?.dedicatedDomain ? venue?.dedicatedDomain : 
          venue?.url+"."+process.env.REACT_APP_DOMAIN_URL}`}/order/successfulOrder`,
      },
      config
    );
    
    localStorage.setItem("orderId", JSON.stringify(order?._id));
    localStorage.setItem("onlinePaymentBackUrl", JSON.stringify(NameSpace.unsuccessfulPay));
    if (order?.paymentMethod === Constants.paymentMethod.ZIBAL) {
      history.push(NameSpace.zibal);
    }
    if (order?.paymentMethod === Constants.paymentMethod.NEXT_PAY) {
      history.push(NameSpace.nextPay);
    }
    dispatch({
      type: types.CONNECT_TO_ONLINE_PAY_SUCCESS,
      payload: res?.data,
    });
  } catch (err) {
    history.push(NameSpace.unsuccessfulOnlinePortal);
  }
};
export const clearOnlinePortalResponse = () => (dispatch) => {
  dispatch({ type: types?.CLEAR_ONLINEPORTAL_RESPONSE });
};
