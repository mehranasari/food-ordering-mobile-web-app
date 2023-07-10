export const NameSpace = {
  //Venue routes
  url: "/",
  menu: "/menu/",
  payment: "/payment/",
  itemPage: "/menu/item/:id/",
  loginMethods: "/account/login/",
  otpVerification: "/account/auth/",
  orderHistory: "/account/ordersHistory/",
  orderDetailsHistory: "/account/orderDetailsHistory/:orderId",
  buildProfile: "/account/profile/",
  onlineWallet: "/account/onlineWallet/",
  increaseCredit: "/account/onlineWallet/increaseCredit",
  successfulOrder: "/order/successfulOrder",
  unsuccessfulOrder: '/order/unsuccessfulOrder',
  unsuccessfulPay: '/order/unsuccessfulPay',
  redirectToOnlinePortal: "/order/redirectToOnlinePortal/",
  returnToOnlinePortal: "/order/returnToOnlinePortal/:orderId/",
  unsuccessfulOnlinePortal: "/order/unsuccessfulOnlinePortal",
  privacyPolicy: "/privacyPolicy",
  termsOfUse: "/termsOfUse",
  aboutUs: "/aboutUs",
  verifyChargeUserOnlineWallet: "/account/onlineWallet/verifyChargeUserOnlineWallet",
  
  
  //Online Portals
  onlinePortal: "/onlinePortal",
  zibal: "/zibal",
  nextPay: "/nextPay",

  //Common routes
  venuesGroup: "/group/:url/",
  notfound: "/notfound",
};
