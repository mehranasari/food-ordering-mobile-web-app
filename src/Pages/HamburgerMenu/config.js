import ProfileIcon from "../../Assets/icons/ProfileIcon.jsx";
import OrderHistoryIcon from "../../Assets/icons/OrderHistoryIcon.jsx";
import WebsiteIcon from "../../Assets/icons/WebsiteIcon.jsx";
import TermsOfUseIcon from "../../Assets/icons/TermsOfUseIcon.jsx";
import SubmitComplaintIcon from "../../Assets/icons/SubmitComplaintIcon.jsx";
import PrivacyIcon from "../../Assets/icons/PrivacyIcon.jsx";
import AboutUsIcon from "../../Assets/icons/AboutUsIcon.jsx";
import ContanctUsIcon from "../../Assets/icons/ContanctUsIcon.jsx";
import WalletIconOnHamburgerMenu from "../../Assets/icons/WalletIconOnHamburgerMenu.jsx";

export const HamburgerMenuConfig = {
  authLinks: [
    {
      id: "profile",
      text: "حساب کاربری",
      icon: ProfileIcon,
      link: "/account/profile/",
    },
    {
      id: "ordersHistory",
      text: "سفارش‌های من",
      icon: OrderHistoryIcon,
      link: "/account/ordersHistory/",
    },
    {
      id: "onlineWallet",
      text: "کیف پول",
      icon: WalletIconOnHamburgerMenu,
      link: "/account/onlineWallet/",
    },

    // {
    //   id: "website",
    //   text: "وب‌سایت",
    //   icon: WebsiteIcon,
    //   link: "https://menobuzz.com/"
    // },
    {
      id: "privacyPolicy",
      text: "حریم خصوصی",
      icon: PrivacyIcon,
      link: "/privacyPolicy",
    },
    {
      id: "termsOfUse",
      text: "شرایط استفاده",
      icon: TermsOfUseIcon,
      link: "/termsOfUse",
    },
    {
      id: "submitComplaint",
      text: "ثبت شکایت",
      icon: SubmitComplaintIcon,
      link: "/",
    },
    {
      id: "aboutUs",
      text: "درباره ما",
      icon: AboutUsIcon,
      link: "/aboutUs",
    },
    {
      id: "contanctUs",
      text: "تماس با ما",
      icon: ContanctUsIcon,
      link: "/",
    },
  ],
  guestLinks: [
    {
      id: "privacyPolicy",
      text: "حریم خصوصی",
      icon: PrivacyIcon,
      link: "/privacyPolicy",
    },
    {
      id:"termsOfUse",
      text: "شرایط استفاده",
      icon: TermsOfUseIcon,
      link: "/termsOfUse",
    },
    {
      id: "submitComplaint",
      text: "ثبت شکایت",
      icon: SubmitComplaintIcon,
      link: "/",
    },
    {
      id: "aboutUs",
      text: "درباره ما",
      icon: AboutUsIcon,
      link: "/aboutUs",
    },
    {
      id: "contanctUs",
      text: "تماس با ما",
      icon: ContanctUsIcon,
      link: "/",
    },
  ],
};
