import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, withRouter, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { palette } from "../../Shared/Theme/Palette";

//utils
import ConvertToPersianDigitWithComma from "../../Utils/method/ConvertToPersianDigitWithComma";

//import components
import Header from "../../Shared/Header";
import { HamburgerMenuConfig } from "./config";
import { Col } from "../../Kit/Column";

//import actions
import {
  closeHamburgerMenu,
  openHamburgerMenu,
} from "../../Redux/action/hamburgerMenu";
import { setOriginUrl, logout } from "../../Redux/action/auth";
//import icons
import MenoBuzzIcon from "../../Assets/icons/MenoBuzzIcon.jsx";
import DefaultLogo from "../../Assets/icons/DefaultLogo.jsx";
import PreviousStepIcon from "../../Assets/icons/PreviousStepIcon.jsx";
import PlusIcon from "../../Assets/icons/PlusIcon.jsx";

//import styles
import {
  HamburgerMenuWrapper,
  LoginRegisterBody,
  LoginRegisterHeader,
  TitleOfDescription,
  DescriptionOfService,
  SigninButton,
  WelcomeText,
  LinkButton,
  HamburgerMenuList,
  HamburgerMenuItem,
  Seprator,
  Version,
  AppInfoWrapper,
  AppIcon,
  AppTitle,
  IconContainer,
  HambergerMenuInner,
  Venue,
  VenueLogo,
  VenueName,
  StyledSwipeableDrawer,
  HamburgerMenuContainer,
  LinkButtonStepsWrapper,
  IncreaseCredit,
} from "./styles.jsx";
import { NameSpace } from "../../Routes/NameSpace";

const HamburgerMenu = ({
  history,
  enabledHamburgerMenu,
  closeHamburgerMenu,
  auth: { isAuthenticated, loading },
  originUrl,
  logout,
  userProfile: { profile, onlineWalletAsset },
  theme,
  venue: { venue },
  openHamburgerMenu,
  onlineWallet,
  setOriginUrl,
}) => {
  const currentUrl = useLocation();

  useEffect(() => {
    /**Handles the back navigation */
    window.addEventListener("popstate", (event) => {
      closeHamburgerMenu(false);
    });
  }, []);

  const authLinks = (
    <>
      <HamburgerMenuList>
        {HamburgerMenuConfig.authLinks.map((item) => {
          let Icon = item.icon;
          return (
            <HamburgerMenuItem key={item.id}>
              {item?.id === "contanctUs" || item?.id === "submitComplaint" ? (
                <LinkButton>
                  <a
                    href={`tel:${venue?.phoneNumber}`}
                    // onClick="ga('send', 'event', {eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <div className="linkButtonWrapper">
                      <Icon fill={theme.primary} />
                      <div className="linkButtonText">{item.text} ‍‍</div>
                    </div>
                  </a>
                  <PreviousStepIcon
                    fill={palette.gray4}
                    width="7"
                    height="12"
                  />
                </LinkButton>
              ) : (
                ((item?.id === "onlineWallet" && onlineWallet?.status) ||
                  item?.id !== "onlineWallet") && (
                  <LinkButton
                    onClick={() => {
                      setTimeout(function () {
                        closeHamburgerMenu(false, item.link, history);
                      }, 600);
                    }}
                  >
                    {item?.id === "profile" ? (
                      <div className="linkButtonWrapper">
                        <Icon fill={theme.primary} />
                        <Col className="profileWrapper">
                          <div className="userName">
                            {profile?.firstName || profile?.lastName
                              ? profile?.firstName + " " + profile?.lastName
                              : "کاربر عزیز"}
                          </div>
                          <div className="seeProfile">نمایش اطلاعات کاربری</div>
                        </Col>
                      </div>
                    ) : (
                      <div className="linkButtonWrapper">
                        <Icon fill={theme.primary} />
                        <div className="linkButtonText">{item.text} ‍‍</div>
                      </div>
                    )}
                    <LinkButtonStepsWrapper className="stepWrapper" onClick={() => setOriginUrl(location.pathname)}>
                      {item?.id === "onlineWallet" &&
                        (onlineWalletAsset?.assets ? (
                          <div>
                            {ConvertToPersianDigitWithComma(
                              onlineWalletAsset?.assets
                            )}
                            <span>تومان</span>
                          </div>
                        ) : (
                          <IncreaseCredit
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              setOriginUrl(location.pathname);

                              setTimeout(function () {
                                closeHamburgerMenu(
                                  false,
                                  NameSpace.increaseCredit,
                                  history
                                );
                              }, 600);
                            }}
                          >
                            <PlusIcon transparent={true} fill={theme.primary} />

                            <div>افزایش اعتبار</div>
                          </IncreaseCredit>
                        ))}
                      <PreviousStepIcon
                        fill={palette.gray4}
                        width="7"
                        height="12"
                      />
                    </LinkButtonStepsWrapper>
                  </LinkButton>
                )
              )}
            </HamburgerMenuItem>
          );
        })}
      </HamburgerMenuList>
    </>
  );

  const guestLinks = (
    <>
      <LoginRegisterHeader>
        <TitleOfDescription>
          اسکن کنید، سفارش دهید و لذت ببرید
        </TitleOfDescription>
        <DescriptionOfService>
          برای تجربه سریعترین سفارش و دسترسی به حساب خود وارد شوید.
        </DescriptionOfService>
        <Link
          to="/account/login/"
          onClick={() => {
            closeHamburgerMenu(false);
          }}
        >
          <SigninButton>
            <div className="signinButtonText">ورود به حساب کاربری</div>
          </SigninButton>
        </Link>
      </LoginRegisterHeader>

      <HamburgerMenuList>
        {HamburgerMenuConfig.guestLinks.map((item) => {
          let Icon = item.icon;
          return (
            <HamburgerMenuItem key={item.id}>
              {item?.id === "contanctUs" || item?.id === "submitComplaint" ? (
                <LinkButton>
                  <a
                    href={`tel:${venue?.phoneNumber}`}
                    // onClick="ga('send', 'event', {eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <div className="linkButtonWrapper">
                      <Icon fill={theme.primary} />
                      <div className="linkButtonText">{item.text} ‍‍</div>
                    </div>
                  </a>
                  <PreviousStepIcon
                    fill={palette.gray4}
                    width="7"
                    height="12"
                  />
                </LinkButton>
              ) : (
                <LinkButton
                  onClick={() => {
                    setTimeout(function () {
                      closeHamburgerMenu(false);
                    }, 600);
                  }}
                >
                  <Link to={item.link}>
                    <div className="linkButtonWrapper">
                      <Icon fill={theme.primary} />
                      <div className="linkButtonText">{item.text} ‍‍</div>
                    </div>
                  </Link>
                  <PreviousStepIcon
                    fill={palette.gray4}
                    width="7"
                    height="12"
                  />
                </LinkButton>
              )}
            </HamburgerMenuItem>
          );
        })}
      </HamburgerMenuList>
    </>
  );

  return (
    <HamburgerMenuWrapper>
      <StyledSwipeableDrawer
        disableSwipeToOpen={true}
        anchor={"right"}
        open={enabledHamburgerMenu}
        onClose={() => {
          closeHamburgerMenu(false, currentUrl.pathname, history);
        }}
        onOpen={() => {
          openHamburgerMenu(true, currentUrl.pathname, history);
        }}
        height={"100vh"}
      >
        <HamburgerMenuContainer className="hamburgerMenuContainer">
          <Header
            fill={theme.color_background_primary}
            cancelIcon
            iconBackgroundColor={palette.gray2}
            disableBoxShadow={true}
          />
          <HambergerMenuInner className="hambergerMenuInner">
            <div>
              <Venue
                onClick={() => {
                  closeHamburgerMenu(false, NameSpace.url, history);
                }}
              >
                <VenueLogo hasLogo={venue?.logo?.logoUrlLocation}>
                  {venue?.logo?.logoUrlLocation ? (
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <img
                      className="venueLogo"
                      src={venue?.logo?.logoUrlLocation}
                    />
                  ) : (
                    <div className="venueLogo">
                      <DefaultLogo stroke={theme.color_icon_primary} />
                    </div>
                  )}
                </VenueLogo>

                <VenueName>{venue?.name}</VenueName>
              </Venue>
              <LoginRegisterBody>
                {!loading && (isAuthenticated ? authLinks : guestLinks)}
              </LoginRegisterBody>
            </div>
            <AppInfoWrapper>
              <Version>ورژن ۱.۸.۸</Version>
            </AppInfoWrapper>
          </HambergerMenuInner>
        </HamburgerMenuContainer>
      </StyledSwipeableDrawer>
    </HamburgerMenuWrapper>
  );
};

HamburgerMenu.propTypes = {
  enabledHamburgerMenu: PropTypes.bool.isRequired,
  closeHamburgerMenu: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  enabledHamburgerMenu: state.hamburgerMenu.enabledHamburgerMenu,
  auth: state.auth,
  userProfile: state.userProfile,
  originUrl: state.auth.originUrl,
  theme: state.theme.theme,
  onlineWallet: state.setting.venueSettings?.settings?.onlineWallet,
  venue: state.venue,
});

export default connect(mapStateToProps, {
  closeHamburgerMenu,
  logout,
  openHamburgerMenu,
  setOriginUrl
})(withRouter(HamburgerMenu));
