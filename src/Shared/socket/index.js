import { useEffect } from "react";
import { connect } from "react-redux";
import { io } from "socket.io-client";

import {
  acceptNewOrderByMerchant,
  readyForPickupByMerchant,
  finishOpenOrderByMerchant,
  sendByCourierByMerchant,
} from "../../Redux/action/ordersHistory";
import {refundOrderCostToOnlineWallet} from "../../Redux/action/userProfile"
import { handleVenueStatusSocket } from "../../Redux/action/venue";

import BeepSound from "../../Assets/BeepSound.mp3";
import Constants from "../../Utils/constants";

export const ConnectSocket = (
  venue,
  isVenueStatusSocketOn,
  handleVenueStatusSocket,
  
) => {
  if (venue && !isVenueStatusSocketOn) {
    let socket = io(process.env.REACT_APP_SOCKET_URL, {
      query: `consumerAppVenueId=${venue?._id}`,
    });
    handleVenueStatusSocket({
      isVenueStatusSocketOn: true,
      isOpen: venue.isOpen,
      socket,
    });
  }
};

const Socket = ({
  venue: { venue, socket },
  auth: { user, isAuthenticated },
  acceptNewOrderByMerchant,
  readyForPickupByMerchant,
  finishOpenOrderByMerchant,
  handleVenueStatusSocket,
  sendByCourierByMerchant,
  refundOrderCostToOnlineWallet
}) => {
  //Socket ********************
  useEffect(() => {
    if (socket) {
      socket.on("isOpen", (data) => {
        handleVenueStatusSocket({
          isVenueStatusSocketOn: true,
          isOpen: data.isOpen,
          socket,
        });
      });
      if (isAuthenticated && venue?.onlyDigitalMenu !== true) {
        socket.emit("consumerLogin", { userId: user?._id });

        // socket.on("changesOnVenuePage", (data) => {
        //     if (data?.url === venue?.url && data?._id === venue?._id)
        //         window.location.reload();
        // });

        socket.on("acceptNewOrder", (data) => {
          if (data?.user?._id === user?._id) {
            acceptNewOrderByMerchant(data);
            new Audio(BeepSound).play();
            // if (typeof Notification !== 'undefined') {
            //     new Notification(venue?.name, {
            //         body: "سفارش شما تایید شد",
            //         icon: venue?.logo?.logoUrlLocation
            //     })
            // }
          }
        });
        socket.on("readyForPickup", (data) => {
          if (data?.user?._id === user?._id) {
            readyForPickupByMerchant(data);
            new Audio(BeepSound).play();
          }
        });
        socket.on("sendByCourier", (data) => {
          if (data?.user?._id === user?._id) {
            sendByCourierByMerchant(data);
            new Audio(BeepSound).play();
          }
        });
        socket.on("finishOpenOrder", (data) => {
          if (data?.user?._id === user?._id) {
            finishOpenOrderByMerchant(data);
            // new Audio(BeepSound).play();
          }
        });
        socket.on("declineOrder", (data) => {
          if (data?.user?._id === user?._id) {
            finishOpenOrderByMerchant(data);
            new Audio(BeepSound).play();
            if(data?.paymentMethod===Constants.paymentMethod?.ONLINE_WALLET){
              refundOrderCostToOnlineWallet(data?.totalPrice)
            }
          }
        });

        return () => {
          // socket.off("changesOnVenuePage");
          socket.off("acceptNewOrder");
          socket.off("readyForPickup");
          socket.off("finishOpenOrder");
          socket.off("declineOrder");
        };
      }
    }
  }, [socket, isAuthenticated]);
  //Socket ********************
  return null;
};

const mapStateToProps = (state) => ({
  venue: state.venue,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  acceptNewOrderByMerchant,
  readyForPickupByMerchant,
  finishOpenOrderByMerchant,
  handleVenueStatusSocket,
  sendByCourierByMerchant,
  refundOrderCostToOnlineWallet,
})(Socket);
