import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Row } from "../../Kit/Row";
import { closeOrderNotificationModal } from "../../Redux/action/ordersHistory";
import { removingAllItemsFromCart } from "../../Redux/action/cart";

import NewOrderStatusNotification from "../../Modals/NewOrderStatusNotification";
import { NotificationHandler } from "../../Utils/method/NotificationHandler";
export const PageLayoutWrapepr = styled.div`
@media (min-width: 800px) {
  display:flex;
  flex-direction:row;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
*::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
  cursor: pointer;

}

*::-webkit-scrollbar-track {
  /* background-color: #e40f0f; */
}

*::-webkit-scrollbar-thumb {
  background:${props=>props.theme.color_background_scrollbar} ;
  border-radius: 1rem;
  z-index: 2000;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: ${props=>props.theme.color_background_scrollbar};
}

`;
export const ContentsWrapper = styled.div`
color :${props=>props.theme.color_text_primary};
background:${props=>props.theme.color_background_primary};
@media (min-width: 800px) {
  max-width: 57.143rem;
  max-height: 1000px;
  height: calc(100vh - 5.7143rem);
  box-shadow: 0px 0.429rem 2.143rem rgba(33, 33, 33, 0.1);
  border-radius: 2.857rem;
  overflow-y: auto;
  overflow-x: hidden;

}


`;

export const ChildrenWrapper = styled.div`
@media (min-width: 800px) {
  max-width: 57.143rem;
  width:57.143rem;
  // height:100%;
  position:relative;
  /* overflow-x: hidden; */
}
`
const PageLayout = ({
  component,
  children,
  childrenPadding,
  venue: { venue },
  auth: { user },
  removingAllItemsFromCart,
  currentVenueCart,
  closeOrderNotificationModal,
  orderNotification,
  showOrderNotificationModal,
}) => {
  const orderType = JSON.parse(localStorage.getItem("orderType"));

  useEffect(() => {
    // NotificationHandler()
    //clear shopping card after 1 hour
    const now = new Date().getTime();
    if (currentVenueCart.expireDate && currentVenueCart.expireDate < now)
      removingAllItemsFromCart(venue?._id, orderType);
  }, [venue, currentVenueCart.expireDate]);



  return (
    <PageLayoutWrapepr>
      <ContentsWrapper id="ContentsWrapper">
        <ChildrenWrapper childrenPadding={childrenPadding}>
          {children}
        </ChildrenWrapper>
        <NewOrderStatusNotification
          show={showOrderNotificationModal}
          onHide={closeOrderNotificationModal}
          order={orderNotification}
        />
      </ContentsWrapper>
    </PageLayoutWrapepr>
  );
};

PageLayout.propTypes = {
  removingAllItemsFromCart: PropTypes.func.isRequired,
  venue: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  closeOrderNotificationModal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  venue: state.venue,
  auth: state.auth,
  currentVenueCart: state.cart.currentVenueCart,
  orderNotification: state.ordersHistory?.orderNotification,
  showOrderNotificationModal: state.ordersHistory?.showOrderNotificationModal,
});

export default connect(mapStateToProps, {
  removingAllItemsFromCart,
  closeOrderNotificationModal,
})(PageLayout);
