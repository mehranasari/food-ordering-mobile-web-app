import React, { useEffect, useState } from "react";
import { withRouter, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "../../Shared/Header/index.js";
import { StyledInput } from "../../Kit/StyledInput";
import { Row } from "../../Kit/Row.js";
//import styles
import {
  SearchAddressModalWrapper,
  SearchAddressStyledSwipeableDrawer,
  ModalBody,
  LocationSearchContainer,
  FormIcon,
  SuggestedAddresses,
  SuggestedAddressesLoading,
  CancelIconWrapper,
  AdressContainer,
} from "./styles.jsx";
import { searchAddress } from "../../Redux/action/addresses.js";
import SearchIcon from "../../Assets/icons/SearchIcon.jsx";
import CancelIcon from "../../Assets/icons/CancelIcon.jsx";
import LoadingIcon from "../../Assets/icons/LoadingIcon.jsx";
import LocationIcon from "../../Assets/icons/LocationIcon.jsx";
import CircularCancleIcon from "../../Assets/icons/CircularCancleIcon.jsx";

const SearchAddressModal = ({
  show,
  onSelectedAddress,
  history,
  searchAddressList,
  loading,
  searchAddress,
  theme,
  center,
}) => {
  const [state, setState] = useState({
    loading: false,
    search: "",
    showSuggestedAddress: false,
  });

  const searchHandler = (search) => {
    setState({
      ...state,
      search,
      preventSearchAddress: false,
      showSuggestedAddress: false,
      typingLoading: search?.length > 2,
      selectedSuggestedAddress: null,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (state.search?.length >= 3) {
        if (!state.preventSearchAddress) {
          searchAddress({
            search: state?.search,
            center,
            onSuccessRequest: () => {
              setState({
                ...state,
                typingLoading: false,
                showSuggestedAddress: true,
              });
            },
          });

          // setState({ ...state, typingLoading: true });
        }
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [state.search]);

  const location = useLocation();
  const onHide = () => {
    history.goBack();
  };
  useEffect(() => {
    if (show) {
      history.push(location.pathname);
    } else {
      setState({
        loading: false,
        search: "",
        showSuggestedAddress: false,
        preventSearchAddress: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return (
    <SearchAddressModalWrapper>
      <SearchAddressStyledSwipeableDrawer
        id="searchAddress"
        anchor={"bottom"}
        open={show}
        onClose={() => {
          onHide();
        }}
        onOpen={onHide}
      >
        <Header
          isModal={true}
          onClose={() => {
            onHide();
          }}
          disableBoxShadow={true}
          pageTitle={"جستجو"}
        />

        <ModalBody>
          <LocationSearchContainer>
            <div className="fade">
              <StyledInput
                type="text"
                onChange={(e) => searchHandler(e.target.value)}
                name="search"
                placeholder="جستجو کنید"
                // autoFocus={true}
                backgroundColor="#ffffff"
                value={state?.search}
              />
            </div>
            <FormIcon>
              <SearchIcon stroke={theme?.color_icon_primary} size={"18"} />
            </FormIcon>
            {state?.search?.length > 0 && state?.selectedSuggestedAddress && (
              <CancelIconWrapper
                onClick={() => {
                  setState({
                    ...state,
                    search: "",
                    showSuggestedAddress: false,
                    preventSearchAddress: false,
                  });
                }}
              >
                <CancelIcon width={13} color={theme?.color_icon_primary} />
              </CancelIconWrapper>
            )}
            {(loading || state?.typingLoading) && (
              <SuggestedAddressesLoading>
                <LoadingIcon color={theme.color_icon_primary} />
              </SuggestedAddressesLoading>
            )}
            {state?.showSuggestedAddress && (
              <SuggestedAddressesLoading
                onClick={() => {
                  setState({
                    ...state,
                    search: "",
                    showSuggestedAddress: false,
                    preventSearchAddress: false,
                  });
                }}
              >
                <CircularCancleIcon color={theme.color_icon_primary} />
              </SuggestedAddressesLoading>
            )}
          </LocationSearchContainer>

          {state?.showSuggestedAddress && (
            <SuggestedAddresses>
              {loading ? (
                <SuggestedAddressesLoading>
                  <LoadingIcon color={theme.color_icon_primary} />
                </SuggestedAddressesLoading>
              ) : searchAddressList?.length > 0 ? (
                searchAddressList?.map((address, index) => {
                  return (
                    <Row
                      key={"searchAddress" + index}
                      className="address-row"
                      onClick={() => {
                        setState({
                          ...state,
                          search: `${address?.region ? address?.region : ""} ${
                            address?.neighbourhood ? address?.neighbourhood : ""
                          } ${address?.address ? address?.address : ""} `,
                          showSuggestedAddress: false,
                          preventSearchAddress: true,
                          selectedSuggestedAddress: address,
                        });

                        onSelectedAddress(address);
                      }}
                    >
                      <Row className="icon-wrapper">
                        <LocationIcon
                          stroke={theme.color_icon_primary}
                          width={12}
                          height={14}
                        />
                      </Row>
                      <AdressContainer>
                        <div className="address-title">{address?.title}</div>
                        <div className="ellipsis">
                          {address?.region} {address?.neighbourhood}{" "}
                          {address?.address}
                        </div>
                      </AdressContainer>
                    </Row>
                  );
                })
              ) : (
                <Row>موردی یافت نشد</Row>
              )}
            </SuggestedAddresses>
          )}
        </ModalBody>
      </SearchAddressStyledSwipeableDrawer>
    </SearchAddressModalWrapper>
  );
};
SearchAddressModal.propTypes = {
  searchAddress: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  show: state.addresses?.showSearchAddressModal,
  loading: state.addresses?.searchAddressLoading,
  searchAddressList: state.addresses?.searchAddressResults,
  theme: state.theme.theme,
});

export default connect(mapStateToProps, { searchAddress })(
  withRouter(SearchAddressModal)
);
