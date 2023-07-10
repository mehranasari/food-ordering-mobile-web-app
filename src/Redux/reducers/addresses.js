import { types } from "../types";

const initialState = {
  selectedAddress: localStorage.selectedAddress
    ? JSON.parse(localStorage.getItem("selectedAddress"))
    : null,
  customerAddressList: null,
  getCustomerAddressesLoading: false,
  removeAddressLoading: false,
  showCustomerAddressesModal: false,
  userAddressFromLocation: "",
  showDeleteAddressModal: false,
  showAddUpdateAddressModal: false,
  showAddressActionsModal: false,
  showSearchAddressModal: false,
  searchAddressResults:[],
  searchAddressLoading:false,
  getDistanceBetweenCustomerAndVenueLoading:false,
  distanceBetweenCustomerAndVenue:null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_USER_ADDRESSES_FOR_CONSUMER:
      return {
        ...state,
        getCustomerAddressesLoading: true,
      };
    case types.GET_USER_ADDRESSES_FOR_CONSUMER_SUCCESS:
      return {
        ...state,
        customerAddressList: payload,
        getCustomerAddressesLoading: false,
      };
    case types.GET_USER_ADDRESSES_FOR_CONSUMER_FAIL:
      return {
        ...state,
        customerAddressList: null,
        getCustomerAddressesLoading: false,
      };
    case types.ADD_NEW_ADDRESS_BY_CUSTOMER:
      return {
        ...state,
        addUpdateAddressLoading: true,
      };
    case types.ADD_NEW_ADDRESS_BY_CUSTOMER_SUCCESS:
      return {
        ...state,
        addUpdateAddressLoading: false,
        customerAddressList: [payload,...state.customerAddressList ],
        selectedAddress: payload,
        showAddUpdateAddressModal: false,
        showAddressActionsModal: false,
      };
    case types.ADD_NEW_ADDRESS_BY_CUSTOMER_FAIL:
      return {
        ...state,
        addUpdateAddressLoading: false,
      };
    case types.UPDATE_ADDRESSES_BY_COSTOMER:
      return {
        ...state,
        addUpdateAddressLoading: true,
      };
    case types.UPDATE_ADDRESSES_BY_COSTOMER_SUCCESS:
      const customerAddressList_ = state?.customerAddressList?.map((item) =>
        item?._id === payload?._id ? payload : item
      );
      return {
        ...state,
        addUpdateAddressLoading: false,
        customerAddressList: customerAddressList_,
        showAddUpdateAddressModal: false,
        showAddressActionsModal: false,
      };
    case types.UPDATE_ADDRESSES_BY_COSTOMER_FAIL:
      return {
        ...state,
        addUpdateAddressLoading: false,
      };
    case types.REMOVE_ADDRESS_BY_CONSUMER:
      return {
        ...state,
        removeAddressLoading: true,
      };
    case types.REMOVE_ADDRESS_BY_CONSUMER_SUCCESS:
      return {
        ...state,
        removeAddressLoading: false,
        customerAddressList: payload,
        showDeleteAddressModal: false,
        showAddressActionsModal: false,
      };
    case types.REMOVE_ADDRESS_BY_CONSUMER_FAIL:
      return {
        ...state,
        removeAddressLoading: false,
      };
    case types.SET_SELECT_ADDRESS:
      return {
        ...state,
        selectedAddress: payload,
      };
    case types.SET_SHOW_CUSTOMER_ADDRESSES_MODAL:
      return {
        ...state,
        showCustomerAddressesModal: payload,
      };
    case types.SET_SHOW_DELETE_ADDRESS_MODAL:
      return {
        ...state,
        showDeleteAddressModal: payload,
      };
    case types.SET_SHOW_ADD_UPDATE_ADDRESS_MODAL:
      return {
        ...state,
        showAddUpdateAddressModal: payload,
      };
    case types.SET_SHOW_ADDRESS_ACTIONS_MODAL:
      return {
        ...state,
        showAddressActionsModal: payload,
      };

    case types.GET_USER_ADDRESS_FROM_LOCATION_SUCCESS:
      return {
        ...state,
        userAddressFromLocation: payload?.formatted_address,
      };
    case types.GET_USER_ADDRESS_FROM_LOCATION_FAIL:
      return {
        ...state,
        userAddressFromLocation: "",
      };

    case types.SET_SHOW_SEARCH_ADDRESS_MODAL:
      return {
        ...state,
        showSearchAddressModal: payload,
      };

      case types.SEARCH_ADDRESS:
        return {
          ...state,
          searchAddressLoading:true,
        }
      case types.SEARCH_ADDRESS_SUCCESS:
        return {
          ...state,
          searchAddressLoading:false,
          searchAddressResults:payload
        }
      case types.SEARCH_ADDRESS_FAIL:
        
        return {
          ...state,
          searchAddressLoading:false,
          searchAddressResults:[],
        }

      case types.GET_DISTANCE_BETWEEN_CUSTOMER_AND_VENUE:
        return {
          ...state,
          getDistanceBetweenCustomerAndVenueLoading:true,
        }
      case types.GET_DISTANCE_BETWEEN_CUSTOMER_AND_VENUE_SUCCESS:
        return {
          ...state,
          getDistanceBetweenCustomerAndVenueLoading:false,
          distanceBetweenCustomerAndVenue:payload
        }
      case types.GET_DISTANCE_BETWEEN_CUSTOMER_AND_VENUE_FAIL:
        
        return {
          ...state,
          getDistanceBetweenCustomerAndVenueLoading:false,
          distanceBetweenCustomerAndVenue:null,
        }
    default:
      return state;
  }
}
