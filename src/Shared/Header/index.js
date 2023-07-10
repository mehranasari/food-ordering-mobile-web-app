import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, withRouter, useLocation, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Import actions
import {
  openHamburgerMenu,
  closeHamburgerMenu,
} from "../../Redux/action/hamburgerMenu";

//Import styles
import {
  HeaderWrapper,
  HeaderIconWrapper,
  HeaderItemWrapper,
  HeaderLogo,
  VenueLogo,
  VenueName,
  Title,
  RightPart,
  LeftPart,
  MiddlePart,
  WrapperBox,
  HeaderContainr,
  MenuSizeHandlerIconWrapper,
} from "./styles.jsx";

//Import icons
import MenuIcon from "../../Assets/icons/MenuIcon.jsx";
import PreviousStepIcon from "../../Assets/icons/PreviousStepIcon.jsx";
import CancelIcon from "../../Assets/icons/CancelIcon.jsx";
import MenuSizeHandlerIcon from "../../Assets/icons/MenuSizeHandlerIcon.jsx";

const Header = (props) => {
  const {
    iconBackgroundColor,
    fill,
    previousPage,
    cancelIcon,
    menu,
    onClose,
    venueLogo,
    pageTitle,
    pageIcon,
    position,
    backgroundColor,
    leftButton,
    rightButton,
    disableBoxShadow,
    isModal,
    translateY,
    closeHamburgerMenu,
    openHamburgerMenu,
    venue: { venue },
    theme,
    className,
    onPreviousPageClicked
  } = props;
  const currentUrl = useLocation();
  const history = useHistory();

  return (
    <HeaderWrapper
    className={className}
      translateY={translateY}
      backgroundColor={backgroundColor}
      position={position}
      disableBoxShadow={disableBoxShadow}
    >
      {isModal && (
        <MenuSizeHandlerIconWrapper>
                    <MenuSizeHandlerIcon color={theme.color_border_primary} />

        </MenuSizeHandlerIconWrapper>
      )}
      <HeaderContainr disableBoxShadow={disableBoxShadow}>
        <RightPart isMenu={menu} className="right-part-menu">
          {rightButton && <div>{rightButton}</div>}
          {menu && (
            <WrapperBox>
              <HeaderIconWrapper
                iconBackgroundColor={iconBackgroundColor}
                onClick={() => {
                  openHamburgerMenu(true, currentUrl.pathname, history);
                }}
              >
                <MenuIcon fill={fill} />
              </HeaderIconWrapper>
            </WrapperBox>
          )}
          {cancelIcon ? (
            <WrapperBox className="closeButton">
              <HeaderIconWrapper
                iconBackgroundColor={iconBackgroundColor}
                onClick={() => {
                  closeHamburgerMenu(false, currentUrl.pathname, history);
                }}
              >
                <CancelIcon fill="#FFFFFF" />
              </HeaderIconWrapper>
            </WrapperBox>
          ) : onClose ? (
            <WrapperBox className="closeButton">
              <HeaderIconWrapper
                onClick={() => {
                  onClose()
                }}
              >
                <CancelIcon fill={theme.color_icon_primary} />
              </HeaderIconWrapper>
            </WrapperBox>
          ) : null}
        </RightPart>
        <MiddlePart isMenu={menu}>
          <HeaderItemWrapper>
            {venueLogo && (
              <Link to={"/"}>
                <HeaderLogo>
                  {venue?.logo?.logoUrlLocation && (
                    <VenueLogo
                      src={
                        venue?.logo?.logoUrlLocation
                      }
                    />
                  )}
                  <VenueName>{venue?.name}</VenueName>
                </HeaderLogo>
              </Link>
            )}
            {pageTitle && (
              <Title>
                {pageIcon && pageIcon}
                <div className="titleText">{pageTitle}</div>
              </Title>
            )}
          </HeaderItemWrapper>
        </MiddlePart>
        <LeftPart isMenu={menu}>
          {previousPage && (
            <HeaderItemWrapper>
              <WrapperBox>
                <Link to={previousPage}>
                  <HeaderIconWrapper>
                    <PreviousStepIcon fill={fill} />
                  </HeaderIconWrapper>
                </Link>
              </WrapperBox>
            </HeaderItemWrapper>
          )}
          {onPreviousPageClicked && (
            <HeaderItemWrapper onClick={onPreviousPageClicked}>
              <WrapperBox>
                  <HeaderIconWrapper>
                    <PreviousStepIcon fill={fill} />
                  </HeaderIconWrapper>
              </WrapperBox>
            </HeaderItemWrapper>
          )}

          {leftButton && <div>{leftButton}</div>}
        </LeftPart>
      </HeaderContainr>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  openHamburgerMenu: PropTypes.func.isRequired,
  closeHamburgerMenu: PropTypes.func.isRequired,
  venue: PropTypes.object.isRequired,
  venuesGroup: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  venue: state.venue,
  venuesGroup: state.venuesGroup,
  theme: state.theme.theme,
});

export default connect(mapStateToProps, {
  openHamburgerMenu,
  closeHamburgerMenu,
})(withRouter(Header));
