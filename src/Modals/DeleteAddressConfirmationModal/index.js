import React, { useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../../Shared/Header/index.js";
import DeleteAddressIcon from "../../Assets/icons/DeleteAddressIcon.jsx";
//import styles
import {
  DeleteAddressConfirmationModalDrawerWrapper,
  DeleteAddressConfirmationStyledSwipeableDrawer,
  HeaderText,
  ConfirmationModalBody,
  CountinueButton,
  CancelButton,
  ActionContainer,
} from "./styles.jsx";

const Modal = ({ show, onHide, history, loading, onConfirm, theme }) => {
  const location = useLocation();

  useEffect(() => {
    if (show) {
      history.push(location.pathname);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return (
    <DeleteAddressConfirmationModalDrawerWrapper>
      <DeleteAddressConfirmationStyledSwipeableDrawer
        id="deleteAddress"
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
        />

        <ConfirmationModalBody>
          <DeleteAddressIcon
            stroke={theme.color_icon_primary}
            background={theme.color_background_primary}
          />
          <HeaderText>آیا از حذف این نشانی اطمینان دارید؟ </HeaderText>
          <ActionContainer>
            <CountinueButton disabled={loading} onClick={onConfirm}>
              {loading ? "لطفا منتظر بمانید" : "حذف"}
            </CountinueButton>
            <CancelButton onClick={onHide}>انصراف</CancelButton>
          </ActionContainer>
        </ConfirmationModalBody>
      </DeleteAddressConfirmationStyledSwipeableDrawer>
    </DeleteAddressConfirmationModalDrawerWrapper>
  );
};
Modal.propTypes = {};

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps, {})(withRouter(Modal));
