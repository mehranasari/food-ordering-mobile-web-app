import axios from "axios";

import store from "../store";
import Constants from "../../Utils/constants";
import { removingAllItemsFromCart } from "./cart";
import { NameSpace } from "../../Routes/NameSpace";
import { types } from "../types";
import BeepSound from "../../Assets/BeepSound.mp3";
import { onlinePay } from "./onlinePortals";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};
// Get order history by user id
export const getAllOrdersByUserId = () => async (dispatch) => {
  dispatch({
    type: types.GET_ORDERS_HISTORY,
  });
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/order/consumerApp/getAllOrdersByUserId`
    );

    dispatch({
      type: types.GET_ORDERS_HISTORY_SUCCESS,
      payload: res?.data,
    });
  } catch (err) {
    dispatch({
      type: types.ORDERS_HISTORY_ERROR,
      payload: { msg: err.response?.data.msg, status: err.response.status },
    });
  }
};

export const getOrderByOrderId = (id) => async (dispatch) => {
  dispatch({
    type: types.GET_ORDER_BY_ID,
  });
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/order/consumerApp/getOrderByOrderId/${id}`
    );
    dispatch({
      type: types.GET_ORDER_BY_ID_SUCCESS,
      payload: res?.data,
    });
  } catch (err) {
    dispatch({
      type: types.ORDER_BY_ID_ERROR,
      payload: { msg: err.response?.data.msg, status: err.response.status },
    });
  }
};
export const getOrderByOrderIdForUpdateStatus =
  (id) => async (dispatch, getState) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/order/consumerApp/getOrderByOrderId/${id}`
      );
      const order = getState().ordersHistory?.order;
      if (order?.orderStatus !== res?.data?.orderStatus) {
        if (res?.data?.orderStatus !== Constants?.orderStatus?.FINISHED?.value)
          new Audio(BeepSound).play();
        dispatch({
          type: types.UPDATE_ORDER_STATUS,
          payload: res?.data,
        });
      }
    } catch (err) {
      // dispatch({
      //   type: types.ORDER_BY_ID_ERROR,
      //   payload: { msg: err.response?.data.msg, status: err.response.status },
      // });
    }
  };
export const getNewOrderByOrderId = (id) => async (dispatch) => {
  dispatch({
    type: types.GET_NEW_ORDER_BY_ID,
  });
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/order/consumerApp/getOrderByOrderId/${id}`
    );
    dispatch({
      type: types.GET_NEW_ORDER_BY_ID_SUCCESS,
      payload: res?.data,
    });
  } catch (err) {
    dispatch({
      type: types.GET_NEW_ORDER_BY_ID_FAIL,
      payload: { msg: err.response?.data.msg, status: err.response.status },
    });
  }
};

//Create new order by customer
export const createNewOrderByCustomer =
  (order, history) => async (dispatch) => {
    dispatch({
      type: types.CREATE_NEW_ORDER_BY_CUSTOMER,
      payload: order,
    });
const venue=store.getState()?.venue?.venue
    let body = {
      ...order,
      callbackUrl: `${`${process.env.REACT_APP_SSL_PROTOCOL}://${venue?.dedicatedDomain ? venue?.dedicatedDomain :  venue?.url
        +"."+process.env.REACT_APP_DOMAIN_URL}`}/order/successfulOrder`,
    };
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/order/consumerApp/createNewOrderByCustomer`,
        body,
        config
      );
      let time =
        (res?.data.paymentMethod === Constants.paymentMethod.ZIBAL ||
          res?.data?.paymentMethod === Constants?.paymentMethod?.NEXT_PAY) ? 0 : 3000;
      setTimeout(() => {
        dispatch({
          type: types.CREATE_NEW_ORDER_BY_CUSTOMER_SUCCESS,
          payload: res?.data,
        });
        if (res?.data.paymentMethod === Constants.paymentMethod.ZIBAL || res?.data?.paymentMethod === Constants?.paymentMethod?.NEXT_PAY) {
          dispatch(onlinePay(res?.data, history));
        }
        else if (res?.data.paymentMethod === Constants.paymentMethod.ONLINE_WALLET)
          dispatch({
            type: types.UPDATE_ONLINE_WALLET_ASSETS,
            payload: res?.data?.userProfile,
          });
      }, time);
    } catch (err) {
      setTimeout(() => {
        dispatch({
          type: types.ORDERS_HISTORY_ERROR,
          payload: err.response,
        });
        history.push(NameSpace.unsuccessfulOrder);
        dispatch(removingAllItemsFromCart(order?.venueId, order?.orderType));
      }, 3000);
    }
  };

export const setOnlinePayMethod = (method) => async (dispatch) => {
  dispatch({
    type: types.SET_ONLINE_PAY_METHOD,
    payload: method,
  });
};

// handle pay online
// export const onlinePay = (order, history) => async (dispatch) => {
//   dispatch({
//     type: types.CONNECT_TO_ONLINE_PAY,
//   });
//   try {
//     const res = await axios.post(
//       `${process.env.REACT_APP_BASE_URL}/order/consumerApp/generateOrderPaymentPage/${order?._id}`,
//       {
//         callbackUrl: `${`${process.env.REACT_APP_SSL_PROTOCOL}://${
//           store.getState()?.venue?.venue?.url
//         }.${process.env.REACT_APP_DOMAIN_URL}`}/order/successfulOrder`,
//       },
//       config
//     );
//     localStorage.setItem("orderId", JSON.stringify(order?._id));
//     localStorage.setItem("originUrl", JSON.stringify(NameSpace.onlinePortal));
//     history.push(NameSpace.zibal);
//     dispatch({
//       type: types.CONNECT_TO_ONLINE_PAY_SUCCESS,
//       payload: res?.data,
//     });
//   } catch (err) {
//     history.push(NameSpace.unsuccessfulOnlinePortal);
//   }
// };

export const successPayOrder =
  ({ orderId, trackId, amount, paymentMethod }) =>
    async (dispatch) => {
      dispatch({
        type: types.SUCCESS_PAY_ORDER,
      });
      try {
        if (paymentMethod === Constants.paymentMethod.ZIBAL) {
          const res = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/order/consumerApp/verifyPaymentForZibalOnlinePortal/${orderId}`,
            { trackId },
            config
          );
          dispatch({
            type: types.SUCCESS_PAY_ORDER_SUCCESS,
            payload: res?.data,
          });
        } else if (paymentMethod === Constants.paymentMethod.NEXT_PAY) {
          const res = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/order/consumerApp/verifyPaymentForNextPayOnlinePortal/${orderId}`,
            { trans_id: trackId, amount },
            config
          );
          dispatch({
            type: types.SUCCESS_PAY_ORDER_SUCCESS,
            payload: res?.data,
          });
        }

      } catch (err) {
      }
    };

export const acceptNewOrderByMerchant = (data) => async (dispatch) => {
  dispatch({
    type: types.ACCEPT_NEW_ORDER_BY_MERCHANT,
    payload: data,
  });
};

export const readyForPickupByMerchant = (data) => async (dispatch) => {
  dispatch({
    type: types.READY_FOR_PICKUP_BY_MERCHANT,
    payload: data,
  });
};
export const sendByCourierByMerchant = (data) => async (dispatch) => {
  dispatch({
    type: types.SEND_BY_COURIER_BY_MERCHANT,
    payload: data,
  });
};

export const finishOpenOrderByMerchant = (data) => async (dispatch) => {
  dispatch({
    type: types.FINISH_OPEN_ORDER_BY_MERCHANT,
    payload: data,
  });
};

// set select order
export const setSelectOrder = (order) => (dispatch) => {
  dispatch({
    type: types.SET_SELECT_ORDER,
    payload: order,
  });
};

export const clearSelectOrder = () => (dispatch) => {
  dispatch({
    type: types.CLEAR_SELECT_ORDER,
  });
};

export const clearNewOrder = () => (dispatch) => {
  dispatch({
    type: types.CLEAR_NEW_ORDER,
  });
};
export const clearError = () => (dispatch) => {
  dispatch({
    type: types.CLEAR_ERROR,
  });
};

export const closeOrderNotificationModal = () => (dispatch) => {
  dispatch({
    type: types.CLOSE_ORDER_NOTIFIVATION_MODAL,
  });
};
export const setScrollY = (scrollY) => (dispatch) => {
  dispatch({
    type: types.SET_SCROLL_Y_ORDERS_HISTORY,
    payload: scrollY,
  });
};
export const setShowQrCodeModal = (show) => (dispatch) => {
  dispatch({
    type: types.SET_SHOW_QR_CODE_MODAL,
    payload: show,
  });
};
export const setPreventbackToSuccessfulOrderPage = (data) => (dispatch) => {
  dispatch({
    type: types.SET_PREVENT_BACK_TO_SUCCESSFUL_ORDER_PAGE,
    payload: data,
  });
};
export const setOrderDetailsSourceUrl = (data) => (dispatch) => {
  dispatch({
    type: types.SET_ORDER_DETAILS_SOURCE_URL,
    payload: data,
  });
};

// produce form for connect shaparak
function post(path, params, method = "post") {
  const form = document.createElement("form");
  form.target = "_blank";
  form.method = method;
  form.action = path;
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const hiddenField = document.createElement("input");
      hiddenField.type = "hidden";
      hiddenField.name = key;
      hiddenField.value = params[key];
      form.appendChild(hiddenField);
    }
  }
  document.body.appendChild(form);
  form.submit();
}
