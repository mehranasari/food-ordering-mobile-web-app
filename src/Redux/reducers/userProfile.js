import { types } from "../types";

const initialState = {
  profile: null,
  repos: [],
  loading: true,
  errors: {},
  onlineWalletAsset: null,
  onlineWalletAssetLoading: false,
  connectToOnlinPortalLoading: false,
  successPayForOnlineWalletLoading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_USER_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case types.USER_PROFILE_ERROR:
      return {
        ...state,
        errors: payload,
        loading: false,
        profile: state.profile,
      };
    case types.CLEAR_USER_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
        errors: {},
        onlineWalletAsset: null,
      };
    case types.GET_CURRENT_USER_PROFILE_ONLINE_WALLET_INFO:
      return {
        ...state,
        onlineWalletAssetLoading: true,
      };
    case types.GET_CURRENT_USER_PROFILE_ONLINE_WALLET_INFO_SUCCESS:
      return {
        ...state,
        onlineWalletAsset: payload,
        onlineWalletAssetLoading: false,
      };
    case types.GET_CURRENT_USER_PROFILE_ONLINE_WALLET_INFO_FAIL:
      return {
        ...state,
        onlineWalletAsset: null,
        onlineWalletAssetLoading: false,
      };
    case types.CONNECT_TO_ONLINE_PAY:
      return {
        ...state,
        connectToOnlinPortalLoading: true,
      };
    case types.CONNECT_TO_ONLINE_PAY_SUCCESS:
      return {
        ...state,
        connectToOnlinPortalLoading: false,
      };
    case types.CONNECT_TO_ONLINE_PAY_FAIL:
      return {
        ...state,
        connectToOnlinPortalLoading: false,
      };
    case types.SUCCESS_PAY_FOR_ONLINE_WALLET:
      return {
        ...state,
        successPayForOnlineWalletLoading: true,
      };
    case types.SUCCESS_PAY_FOR_ONLINE_WALLET_SUCCESS:
      return {
        ...state,
        onlineWalletAsset: payload,
        successPayForOnlineWalletLoading: false,
      };
    case types.UPDATE_ONLINE_WALLET_ASSETS:
      return {
        ...state,
        onlineWalletAsset: {
          ...state.onlineWalletAsset,
          assets: payload?.lastAsset,
        },
      };
    case types.REFUND_ORDER_COST_TO_ONLINE_WALLET:
      return {
        ...state,
        onlineWalletAsset: {
          ...state.onlineWalletAsset,
          assets: payload + state?.onlineWalletAsset?.assets,
        },
      };

    default:
      return state;
  }
}
