import React, { useState, useEffect } from "react";
import { withRouter, Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
//components
import Header from "../../Shared/Header/index.js";
import { Row } from "../../Kit/Row.js";
//icons
import EditIcon from "../../Assets/icons/EditIcon.jsx";
import DeleteIcon from "../../Assets/icons/DeleteIcon.jsx";
//import styles
import {
  CustomerAddressActionsModalDrawerWrapper,
  CustomerAddressActionsStyledSwipeableDrawer,
  BodyContainer,
  HeaderTitle,
  EditWrapper,
  DeleteWrapper,
} from "./styles.jsx";

const CustomerAddressActionsModal = ({
  show,
  onHide,
  history,
  onEdit,
  onDelete,
  selectedAddress,
  theme,
}) => {
  const location = useLocation();
  useEffect(() => {
    if (show) {
      history.push(location.pathname);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return (
    <CustomerAddressActionsModalDrawerWrapper>
      <CustomerAddressActionsStyledSwipeableDrawer
        anchor={"bottom"}
        id="addressesActions"
        open={show}
        onClose={() => {
          onHide();
        }}
        onOpen={()=>{
          onHide();
        }}
      >
        <Header
          isModal={true}
          pageTitle={<HeaderTitle>{selectedAddress?.title}</HeaderTitle>}
          onClose={() => {
            onHide();
          }}
          disableBoxShadow={true}
        />

        <BodyContainer>
          <div className="address">{selectedAddress?.address}</div>
          <EditWrapper onClick={onEdit}>
            <Row className="edit-Container">
            <Row className="edit-wrapper">
              <EditIcon width={12} stroke={theme.color_icon_primary} strokeWidth={2}/>
            </Row>
            <div>ویرایش</div>
            </Row>
           
          </EditWrapper>
          <DeleteWrapper
            onClick={onDelete}
          >
            <Row className="edit-wrapper">
              <DeleteIcon />
            </Row>
            <div>حذف</div>
          </DeleteWrapper>
        </BodyContainer>
      </CustomerAddressActionsStyledSwipeableDrawer>
    </CustomerAddressActionsModalDrawerWrapper>
  );
};
CustomerAddressActionsModal.propTypes = {
};

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps, {
})(withRouter(CustomerAddressActionsModal));
