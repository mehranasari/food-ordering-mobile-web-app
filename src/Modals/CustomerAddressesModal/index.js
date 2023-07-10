import React, { useState, useEffect, useRef } from "react";
import { withRouter, Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NameSpace } from "../../Routes/NameSpace.js";
import { toast } from "react-toastify";

//methodes
import Constants from "../../Utils/constants";

//actions
import { setOriginUrl } from "../../Redux/action/auth";
import {
  getUserAddressesForConsumer,
  setSelectAddress,
  removeAddressByCustomer,
  setShowDeleteAddressModal,
  setShowAddUpdateAddressModal,
  setShowAddressActionsModal,
  setShowSearchAddressModal,
  getDistanceBetweenCustomerAndVenue,
} from "../../Redux/action/addresses";
import { setOrderType } from "../../Redux/action/orderType";

//components
import Header from "../../Shared/Header/index.js";
import ContentLoading from "../../Components/CustomerAddresses/CustomerAddressesModal/ContentLoading";
import DeleteAddressConfirmationModal from "../DeleteAddressConfirmationModal";
import CustomerAddressActionsModal from "../CustomerAddressActionsModal";
import CustomerAddressList from "../../Components/CustomerAddresses/CustomerAddressList";
import AddUpdateAddressModal from "../AddUpdateAddressModal/index.js";

//icons
import NoAccessAddressIcon from "../../Assets/icons/NoAccessAddressIcon.jsx";
import PlusIcon from "../../Assets/icons/PlusIcon.jsx";
import CancelIcon from "../../Assets/icons/CancelIcon.jsx";
import LoadingIcon from "../../Assets/icons/LoadingIcon.jsx";
//import styles
import {
  CustomerAddressesDrawerWrapper,
  CustomerAddressesStyledSwipeableDrawer,
  BodyContainer,
  NoAccessWrapper,
  NoAccessHistoryIconWrapper,
  SigninButton,
  CustomerAddressesContainer,
  HeaderTitle,
  AddNewAddress,
  HeaderIconBackWrapper,
  HeaderIconBackButton,
  EmeptyBox,
  LoadingWrapper,
} from "./styles.jsx";
import { Row } from "../../Kit/Row.js";

const steps = {
  addUpdateAddress: "addUpdateAddress",
  deleteAddress: "deleteAddress",
  addAddress: "addAddress",
  showList: "showList",
  addressActions: "addressActions",
  searchAddress: "searchAddress",
};

const CustomerAddressesModal = ({
  venueLocation,
  show,
  onHide,
  history,
  theme,
  auth: { isAuthenticated, loading },
  setOriginUrl,
  getUserAddressesForConsumer,
  setSelectAddress,
  removeAddressByCustomer,
  setShowDeleteAddressModal,
  setShowAddUpdateAddressModal,
  setShowAddressActionsModal,
  setOrderType,
  addresses,
  setShowSearchAddressModal,
  getDistanceBetweenCustomerAndVenue,
  maxDistanceOrdering,
}) => {
  const [windowlocal] = useState(window.location.pathname);
  const stepRef = useRef(steps.showList);
  const location = useLocation();
  const [state, setState] = useState({
    selectedAddress: {},
    step: null,
    showAddUpdateModal: false,
  });

  const {
    customerAddressList,
    getCustomerAddressesLoading,
    selectedAddress,
    showDeleteAddressModal,
    showAddUpdateAddressModal,
    showAddressActionsModal,
    removeAddressLoading,
    addUpdateAddressLoading,
    getDistanceBetweenCustomerAndVenueLoading,
  } = addresses;
  const handlePopstate = () => {
    if (stepRef.current === steps.showList) {
      onHide();
    } else if (stepRef.current === steps.addressActions) {
      stepRef.current = steps.showList;
      setShowAddressActionsModal(false);
    } else if (stepRef.current === steps.deleteAddress) {
      stepRef.current = steps.addressActions;
      setShowDeleteAddressModal(false);
    } else if (stepRef.current === steps.addUpdateAddress) {
      stepRef.current = steps.addressActions;
      setShowAddUpdateAddressModal(false);
    } else if (stepRef.current === steps.addAddress) {
      stepRef.current = steps.showList;
      setShowAddUpdateAddressModal(false);
    } else if (stepRef.current === steps.searchAddress) {
      stepRef.current = steps.addUpdateAddress;
      setShowSearchAddressModal(false);
    }
  };

  const handleAfterSubmit = () => {
    history.goBack();
    toast.success(
      state?.selectedAddress?._id
        ? "نشانی شما با موفقیت ویرایش شد"
        : "نشانی شما با موفقیت افزوده شد."
    );
    setState({
      ...state,
      selectedAddress: {},
    });
    setTimeout(() => {
      stepRef.current = steps.showList;
    }, 500);
  };

  const handleAfterDelete = () => {
    history.goBack();
    setState({
      ...state,
      selectedAddress: {},
    });
    toast.success("نشانی شما با موفقیت حذف شد.");
    setTimeout(() => {
      stepRef.current = steps.showList;
    }, 500);
  };
  const onAddAddressClick = () => {
    setState({
      ...state,
      selectedAddress: {},
    });
    stepRef.current = steps.addAddress;
    setShowAddUpdateAddressModal(true);
  };

  useEffect(() => {
    if (show) {
      if (customerAddressList?.length !== 0) {
        // setState({ ...state, showAddUpdateModal: false });
      } else {
        setShowAddUpdateAddressModal(true);
        stepRef.current = steps.addAddress;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerAddressList, show]);
  useEffect(() => {
    /**Handles the back navigation */
    if (show) {
      history.push(location.pathname);
      isAuthenticated && getUserAddressesForConsumer();
      window.addEventListener("popstate", handlePopstate);
    }
    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [show]);

  return (
    <>
      <CustomerAddressesDrawerWrapper>
        <CustomerAddressesStyledSwipeableDrawer
          id="customerAddresses"
          disableSwipeToOpen={true}
          anchor={"bottom"}
          open={show}
          onClose={() => {
            onHide();
            history.goBack();
          }}
          onOpen={() => {
            onHide();
            history.goBack();
          }}
        >
          <Header
            className="header"
            isModal={true}
            pageTitle={
              <HeaderTitle>
                {isAuthenticated ? "نشانی خود را انتخاب کنید:" : ""}
              </HeaderTitle>
            }
            rightButton={
              <HeaderIconBackWrapper>
                <HeaderIconBackButton
                  onClick={() => {
                    onHide();
                    history.goBack();
                  }}
                >
                  <CancelIcon fill={theme.color_icon_primary} />
                </HeaderIconBackButton>
              </HeaderIconBackWrapper>
            }
            leftButton={
              isAuthenticated && !loading && customerAddressList?.length > 0 ? (
                <AddNewAddress onClick={onAddAddressClick}>
                  <Row className="icon-wrapper">
                    <PlusIcon transparent={true} fill={theme.color_icon_primary} />
                  </Row>
                  <div>نشانی جدید</div>
                </AddNewAddress>
              ) : (
                <EmeptyBox className="emeptyBox" />
              )
            }
            disableBoxShadow={true}
          />

          <BodyContainer>
            {isAuthenticated && !loading ? (
              <>
                <CustomerAddressesContainer>
                  {getCustomerAddressesLoading || loading ? (
                    <ContentLoading theme={theme} />
                  ) : (
                    <CustomerAddressList
                      onAddressActionsClick={(address) => {
                        setState({
                          ...state,
                          selectedAddress: address,
                        });
                        setShowAddressActionsModal(true);
                        stepRef.current = steps.addressActions;
                      }}
                      onSelectAddress={(address) => {
                        getDistanceBetweenCustomerAndVenue({
                          location: address.location,
                          onSuccess: (distance) => {
                            if (maxDistanceOrdering >= distance) {
                              setSelectAddress(address);
                              onHide();
                              setOrderType(
                                Constants.orderType.DELIVERY_SERVICE,
                                history
                              );
                            } else {
                              toast.error(
                                "نشانی انتخابی شما در محدوده سرویس‌دهی این فروشگاه نمی‌باشد."
                              );
                            }
                          },
                        });
                      }}
                      onAddAddressClick={onAddAddressClick}
                      theme={theme}
                      customerAddressList={customerAddressList}
                      selectedAddress={selectedAddress}
                    />
                  )}
                </CustomerAddressesContainer>
              </>
            ) : (
              <NoAccessWrapper>
                <NoAccessHistoryIconWrapper>
                  <NoAccessAddressIcon fill={theme.primary} stroke={theme.color_icon_primary} />
                </NoAccessHistoryIconWrapper>
                <div className="title">وارد حساب کاربری نشده‌اید</div>
                <div className="message">
                  برای اینکه بتوانید سفارش ارسال با پیک ثبت نمایید، باید وارد
                  حساب کاربری خود شوید.
                </div>
                <Link
                  to="/account/login/"
                  onClick={() => {
                    setOriginUrl(NameSpace.url);
                  }}
                >
                  <SigninButton>
                    <div className="signinButtonText">ورود به حساب کاربری</div>
                  </SigninButton>
                </Link>
              </NoAccessWrapper>
            )}
          </BodyContainer>
          {getDistanceBetweenCustomerAndVenueLoading && (
            <LoadingWrapper>
              <LoadingIcon size={"lg"} />
            </LoadingWrapper>
          )}
        </CustomerAddressesStyledSwipeableDrawer>
      </CustomerAddressesDrawerWrapper>
      <AddUpdateAddressModal
        selectedAddress={state?.selectedAddress}
        venueLocation={venueLocation}
        show={showAddUpdateAddressModal}
        onHide={() => {
          history.goBack();
        }}
        handleAfterSubmit={handleAfterSubmit}
        setCustomerAddressState={setState}
        stepRef={stepRef}
      />

      <CustomerAddressActionsModal
        selectedAddress={state?.selectedAddress}
        show={showAddressActionsModal}
        onHide={() => {
          history.goBack();
        }}
        onEdit={() => {
          setShowAddUpdateAddressModal(true);
          stepRef.current = steps.addUpdateAddress;
        }}
        onDelete={() => {
          setShowDeleteAddressModal(true);
          stepRef.current = steps.deleteAddress;
        }}
      />
      <DeleteAddressConfirmationModal
        show={showDeleteAddressModal}
        onHide={() => {
          history.goBack();
        }}
        loading={removeAddressLoading}
        selectedAddress={state?.selectedAddress}
        onConfirm={() => {
          removeAddressByCustomer({
            values: state?.selectedAddress,
            handleAfterDelete,
          });
        }}
      />
    </>
  );
};
CustomerAddressesModal.propTypes = {
  auth: PropTypes.object.isRequired,
  addresses: PropTypes.object.isRequired,
  setOriginUrl: PropTypes.func.isRequired,
  getUserAddressesForConsumer: PropTypes.func.isRequired,
  removeAddressByCustomer: PropTypes.func.isRequired,
  setShowDeleteAddressModal: PropTypes.func.isRequired,
  setShowAddUpdateAddressModal: PropTypes.func.isRequired,
  setShowAddressActionsModal: PropTypes.func.isRequired,
  setOrderType: PropTypes.func.isRequired,
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
  setSelectAddress,
  removeAddressByCustomer,
  setShowDeleteAddressModal,
  setShowAddUpdateAddressModal,
  setShowAddressActionsModal,
  setOrderType,
  setShowSearchAddressModal,
  getDistanceBetweenCustomerAndVenue,
})(withRouter(CustomerAddressesModal));
