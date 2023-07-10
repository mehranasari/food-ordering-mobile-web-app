import axios from "axios";
import { toast } from "react-toastify";
import store from "../store";
import { NameSpace } from "../../Routes/NameSpace";
import { getAllOrdersByUserId } from "./ordersHistory";
import { types } from "../types";
import Constants from "../../Utils/constants";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

//get current profile user
export const getCurrentUserProfile = () => async (dispatch) => {
  try {
    let res;
    if (localStorage.token) {
      res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/userProfile/consumerApp/getCurrentUserProfile`
      );
      dispatch(getAllOrdersByUserId());
    } else {
      dispatch({
        type: types.USER_PROFILE_ERROR,
        payload: {},
      });
    }
    dispatch({
      type: types.GET_USER_PROFILE,
      payload: res?.data,
    });
  } catch (err) {
    // dispatch(refreshToken({ action: getCurrentUserProfile, data: null }));
    dispatch({
      type: types.USER_PROFILE_ERROR,
      payload: {
        msg: err?.response?.statusText,
        status: err?.response?.status,
      },
    });
  }
};

//get current profile user
export const getCurrentUserProfileOnlineWalletInfoByVenueId =
  (venueId) => async (dispatch) => {
    dispatch({
      type: types.GET_CURRENT_USER_PROFILE_ONLINE_WALLET_INFO,
    });
    try {
      let res;
      if (localStorage.token) {
        res = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/userprofile/consumerApp/getCurrentUserProfileOnlineWalletInfoByVenueId/${venueId}`
        );
      }
      dispatch({
        type: types.GET_CURRENT_USER_PROFILE_ONLINE_WALLET_INFO_SUCCESS,
        payload: res?.data,
      });
    } catch (err) {
      // dispatch(refreshToken({ action: getCurrentUserProfile, data: null }));
      dispatch({
        type: types.GET_CURRENT_USER_PROFILE_ONLINE_WALLET_INFO_FAIL,
        payload: {
          msg: err?.response?.statusText,
          status: err?.response?.status,
        },
      });
    }
  };

//create or update user profile
export const createUserProfile =
  (formData, history, edit, originUrl) => async (dispatch) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/userProfile/consumerApp/createAndUpdateUserProfile`,
        formData,
        config
      );
      await dispatch({
        type: types.GET_USER_PROFILE,
        payload: res?.data,
      });

      // edit && dispatch(setToast("پروفایل شما با موفقیت ویرایش شد.", "info", 2000));

      if (!edit) {
        toast.success("پروفایل شما با موفقیت ایجاد شد.");
        history.push(originUrl);
      } else toast.success("پروفایل شما با موفقیت ویرایش شد");
    } catch (err) {
      // dispatch(
      //   refreshToken({
      //     action: createUserProfile,
      //     data: { formData, history, edit, originUrl },
      //   })
      // );
      const errors = err.response?.data.errors;
      if (errors) {
        errors.forEach((error) => toast.error(error.msg));
      }
      dispatch({
        type: types.USER_PROFILE_ERROR,
        payload: {
          msg: err?.response?.statusText,
          status: err?.response?.status,
        },
      });
    }
  };

//Delete Account
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/userProfile/consumerApp/deleteProfileAndOrders`
      );
      dispatch({ type: types.CLEAR_USER_PROFILE });
      dispatch({ type: types.ACCOUNT_DELETED });
      // dispatch(setToast("Your account has been permanantly deleted!", "info", 4000));
    } catch (err) {
      dispatch({
        type: types.USER_PROFILE_ERROR,
        payload: {
          msg: err?.response?.statusText,
          status: err?.response?.status,
        },
      });
    }
  }
};

export const generateChargeUserOnlineWalletByVenueIdPage =
  (values, history) => async (dispatch) => {
    dispatch({
      type: types.CONNECT_TO_ONLINE_PAY,
    });
    const venueId = values?.venueId;
    const venue = store.getState()?.venue?.venue;
    let body = {
      ...values,
      venueId,
      callbackUrl: `${process.env.REACT_APP_SSL_PROTOCOL}://${
        venue?.dedicatedDomain
          ? venue?.dedicatedDomain
          : venue?.url + "." + process.env.REACT_APP_DOMAIN_URL
      }/account/onlineWallet/verifyChargeUserOnlineWallet`,
    };
    try {
      let url = "";
      if (values?.paymentMethod === Constants?.paymentMethod?.ZIBAL) {
        url = "generateChargeUserOnlineWalletPageForZibal";
      } else if (values?.paymentMethod === Constants?.paymentMethod?.NEXT_PAY) {
        url = "generateChargeUserOnlineWalletPageForNextPay";
        body = {
          ...values,
          callback_uri: `${process.env.REACT_APP_SSL_PROTOCOL}://${
            venue?.dedicatedDomain
              ? venue?.dedicatedDomain
              : venue?.url + "." + process.env.REACT_APP_DOMAIN_URL
          }/account/onlineWallet/verifyChargeUserOnlineWallet`,
          venueId,
        };
      }
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/onlineWallet/consumerApp/${url}`,
        body
      );
      localStorage.setItem(
        "onlinePaymentBackUrl",
        JSON.stringify(NameSpace.increaseCredit)
      );
      setTimeout(() => {
        dispatch({
          type: types.CONNECT_TO_ONLINE_PAY_SUCCESS,
          payload: res?.data,
        });
        if (values?.paymentMethod === Constants?.paymentMethod?.ZIBAL) {
          history.push(NameSpace.zibal);
        } else if (
          values?.paymentMethod === Constants?.paymentMethod?.NEXT_PAY
        ) {
          history.push(NameSpace.nextPay);
        }
      }, 3000);
    } catch (err) {
      setTimeout(() => {
        dispatch({
          type: types.CONNECT_TO_ONLINE_PAY_FAIL,
        });
      }, 3000);
      // history.push(NameSpace.unsuccessfulOnlinePortal);
    }
  };

export const successPayForOnlineWallet =
  ({ trackId, paymentMethod, amount, venueId, history }) =>
  async (dispatch) => {
    dispatch({
      type: types.SUCCESS_PAY_FOR_ONLINE_WALLET,
    });
    try {
      let body;
      let url;
      if (paymentMethod === Constants?.paymentMethod?.ZIBAL) {
        url = "verifyChargeUserOnlineWalletForZibal";
        body = {
          trackId,
          venueId,
        };
      } else if (paymentMethod === Constants?.paymentMethod?.NEXT_PAY) {
        url = "verifyChargeUserOnlineWalletForNextPay";
        body = {
          trans_id: trackId,
          venueId,
          amount,
        };
      }

      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/onlineWallet/consumerApp/${url}`,
        body,
        config
      );
      if (res.status === 200) {
        dispatch({
          type: types.SUCCESS_PAY_FOR_ONLINE_WALLET_SUCCESS,
          payload: res?.data,
        });
      } else {
        history.push("/");
      }
    } catch (err) {
      console.log(err);
      history.push(NameSpace.url);
      // dispatch({
      //   type: types.SUCCESS_PAY_FOR_ONLINE_WALLET_FAIL,
      // });
    }
  };

export const clearOnlinePortalResponse = () => (dispatch) => {
  dispatch({ type: types?.CLEAR_ONLINEPORTAL_RESPONSE });
};

export const refundOrderCostToOnlineWallet = (orderConst) => (dispatch) => {
  dispatch({
    type: types?.REFUND_ORDER_COST_TO_ONLINE_WALLET,
    payload: orderConst,
  });
};
