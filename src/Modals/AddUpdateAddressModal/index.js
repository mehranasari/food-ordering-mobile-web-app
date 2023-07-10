import React, { useState, useEffect } from "react";
import { withRouter, Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NameSpace } from "../../Routes/NameSpace.js";
//actions
import { setOriginUrl } from "../../Redux/action/auth";
import {
  getUserAddressesForConsumer,
  addNewAddressByCustomer,
  setSelectAddress,
  updateAddressByCustomer,
  removeAddressByCustomer,
  getUserAddress,
  setShowSearchAddressModal,
  getDistanceBetweenCustomerAndVenue,
} from "../../Redux/action/addresses";
//components
import Header from "../../Shared/Header/index.js";
import SelectLocation from "../../Components/CustomerAddresses/SelectLocation";
import AddUpdateAddress from "../../Components/CustomerAddresses/AddUpdateAddress";

//import styles
import {
  CustomerAddressesDrawerWrapper,
  CustomerAddressesStyledSwipeableDrawer,
  BodyContainer,
  CustomerAddressesContainer,
  HeaderTitle,
} from "./styles.jsx";
//constants
const steps = {
  addUpdateAddress: "addUpdateAddress",
  deleteAddress: "deleteAddress",
  addLocation: "addLocation",
  showList: "showList",
  searchAddress: "searchAddress",
};
const AddUpdateAddressModal = ({
  show,
  onHide,
  history,
  selectedAddress,
  handleAfterSubmit,
  setCustomerAddressState,
  addNewAddressByCustomer,
  updateAddressByCustomer,
  venueLocation,
  getUserAddress,
  addresses: {
    userAddressFromLocation,
    addUpdateAddressLoading,
    distanceBetweenCustomerAndVenue,
  },
  auth: { user },
  theme,
  setShowSearchAddressModal,
  stepRef,
  getDistanceBetweenCustomerAndVenue,
  maxDistanceOrdering,
}) => {
  const [state, setState] = useState({
    state: steps.addLocation,
    address: selectedAddress,
  });
  const location = useLocation();
  const handleAfterGetAddress = (address) => {
    if (selectedAddress?.location !== state?.address?.location)
      setState((state) => ({
        ...state,
        address: { ...state.address, address },
      }));
  };
  const handleClose = () => {
    onHide();
    setState({ ...state, address: {}, step: null });
  };

  const handleSearchAddressClicked = () => {
    setShowSearchAddressModal(true);
    stepRef.current = steps.searchAddress;
  };

  useEffect(() => {
    if (show) {
      if (selectedAddress?._id) {
        setState((state) => ({
          ...state,
          address: selectedAddress,
          step: steps.addUpdateAddress,
        }));
      } else {
        setState({
          ...state,
          step: steps.addLocation,
          address: selectedAddress,
        });
      }
      history.push(location.pathname);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  useEffect(() => {
    if (show && state?.address?.location?.length > 0) {
      getUserAddress({
        values: state?.address?.location,
        handleAfterGetAddress,
      });
      getDistanceBetweenCustomerAndVenue({
        location: state?.address?.location,
      });
    }
  }, [state.address?.location]);

  return (
    <CustomerAddressesDrawerWrapper>
      <CustomerAddressesStyledSwipeableDrawer
        id="addUpdateAddress"
        anchor={"bottom"}
        open={show}
        onClose={() => {
          handleClose();
        }}
      >
        <Header
          isModal={true}
          pageTitle={
            <HeaderTitle>
              {selectedAddress?._id ? "ویرایش نشانی" : "ایجاد نشانی"}
            </HeaderTitle>
          }
          onClose={() => {
            handleClose();
          }}
          disableBoxShadow={true}
        />

        <BodyContainer>
          <CustomerAddressesContainer>
            {state?.step === steps.addUpdateAddress ? (
              <AddUpdateAddress
                selectedAddress={state?.address}
                theme={theme}
                maxDistanceOrdering={maxDistanceOrdering}
                distanceBetweenCustomerAndVenue={
                  distanceBetweenCustomerAndVenue
                }
                userPhone={user?.phone}
                userAddressFromLocation={userAddressFromLocation}
                onSubmit={(e) => {
                  if (selectedAddress?._id) {
                    updateAddressByCustomer({
                      values: e,
                      handleAfterSubmit,
                    });
                  } else {
                    addNewAddressByCustomer({
                      values: e,
                      handleAfterSubmit,
                    });
                  }
                }}
                onClose={() => {
                  handleClose();
                }}
                onBackToSelectLocation={() => {
                  setState({ ...state, step: steps.addLocation });
                }}
                loading={addUpdateAddressLoading}
              />
            ) : (
              state?.step === steps.addLocation && (
                <SelectLocation
                  theme={theme}
                  onSearchAddress={handleSearchAddressClicked}
                  venueLocation={venueLocation}
                  location={state?.address?.location}
                  onSelectLocation={(loc) => {
                    setState({
                      ...state,
                      step: steps.addUpdateAddress,
                      address: { ...state.address, location: loc },
                    });
                  }}
                />
              )
            )}
          </CustomerAddressesContainer>
        </BodyContainer>
      </CustomerAddressesStyledSwipeableDrawer>
    </CustomerAddressesDrawerWrapper>
  );
};
AddUpdateAddressModal.propTypes = {
  auth: PropTypes.object.isRequired,
  addresses: PropTypes.object.isRequired,
  setOriginUrl: PropTypes.func.isRequired,
  getUserAddressesForConsumer: PropTypes.func.isRequired,
  addNewAddressByCustomer: PropTypes.func.isRequired,
  updateAddressByCustomer: PropTypes.func.isRequired,
  removeAddressByCustomer: PropTypes.func.isRequired,
  getUserAddress: PropTypes.func.isRequired,
  setShowSearchAddressModal: PropTypes.func.isRequired,
  getDistanceBetweenCustomerAndVenue: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
  auth: state.auth,
  addresses: state.addresses,
  maxDistanceOrdering:
    state.setting.venueOrderSettings?.orderSettings?.deliveryService
      ?.maxDistanceOrdering,
});

export default connect(mapStateToProps, {
  setOriginUrl,
  getUserAddressesForConsumer,
  addNewAddressByCustomer,
  setSelectAddress,
  updateAddressByCustomer,
  removeAddressByCustomer,
  getUserAddress,
  setShowSearchAddressModal,
  getDistanceBetweenCustomerAndVenue,
})(withRouter(AddUpdateAddressModal));
