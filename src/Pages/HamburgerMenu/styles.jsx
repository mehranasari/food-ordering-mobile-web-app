import styled from "styled-components";
import { Col } from "../../Kit/Column";
import { Row } from "../../Kit/Row";
import { Button } from "@mui/material";
import { palette } from "../../Shared/Theme/Palette";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";



// export const StyledSwipeableDrawer = withStyles({
//   paper: {
//     backgroundColor: `#212121`,
//     height: "100%",
//     right: "0",
//     left: "0",
//   },
// })(SwipeableDrawer);

export const StyledSwipeableDrawer = styled(SwipeableDrawer)`
  .MuiPaper-root {
    background-color: ${palette.gray1};
    height: 100%;
    width: 100%;
    right: 0;
    lefy: 0;
    @media (min-width: 800px) {
      max-width: 30.714rem;
    }
  }
  *::-webkit-scrollbar-track {
    // background-color: #e40f0f;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #424242;
    border-radius: 1rem;
    z-index: 2000;
  }

  *::-webkit-scrollbar-thumb:hover {
    // background-color: rgb(74, 158, 102);
  }
`;

export const HamburgerMenuWrapper = styled(Col)``;
export const HamburgerMenuContainer = styled(Col)`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const HambergerMenuInner = styled(Col)`
  height: calc(100vh - 4.714rem);
  overflow-y: auto;
  flex-wrap: nowrap;
  justify-content: start;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px 0;
  width: 100%;
  @media only screen and (max-width: 335px) {
    padding: 20px 20px 0;
  }
`;

export const HeaderIconWrapper = styled.div`
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 12px;
`;

export const LoginRegisterBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;
  // margin-top: 2rem;
`;

export const LoginRegisterHeader = styled.div`
  width: 100%;
  padding: 0 1rem;
  justify-content: space-between;

  &.withSignOut {
    display: flex;
  }
`;

export const TitleOfDescription = styled.div`
  display: flex;
  color: ${(props) => props.theme.primary};
  font-weight: bold;
  margin-top: 2rem;
`;

export const DescriptionOfService = styled.div`
  display: flex;
  color: ${(props) => props.theme.color_background_primary};
  margin-top: 12px;
  font-size: 15px;
  line-height: 28px;
  text-align: start;
`;

export const SigninButton = styled.div`
  display: flex;
  width: auto;
  padding: 15px 25px;
  position: relative;
  background-color: ${(props) => props.theme.primary};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  @media only screen and (max-width: 335px) {
    padding: 10px 20px;
  }
  .signinButtonText {
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme.textColorOfPrimaryButtons};
  }
`;

export const WelcomeText = styled.div`
  color: ${palette.white};
  text-align: right;

  .Hey {
    color: ${palette.gray9};
  }
  .userName {
    font-size: 1.57rem;
    margin-top: 0.21rem;
  }
`;


export const HamburgerMenuList = styled.div`
  color: ${(props) => props.theme.color_background_primary};
  margin-top: 1.929rem;
  width: 100%;
`;

export const HamburgerMenuItem = styled.div`
  display: flex;
  margin-bottom: 0.357rem;
  @media only screen and (max-height: 750px) {
    // height: 40px;
  }
  @media only screen and (max-height: 570px) {
    // height: 35px;
  }
  .hamburgerMenuItemIcon {
    /* margin-left: 20px; */
  }
`;

export const LinkButton = styled(Button)`
  width: 100%;
  display: flex;
  align-items: center !important;
  padding: 0.857rem 1.286rem 0.857rem 1.429rem !important;
  color: ${palette.white} !important;
  border-radius: 0.8rem !important;
  alogn-items: center;
  justify-content: space-between;

  .linkButtonWrapper {
    display: flex;
    color: ${palette.white};
    font-size: 1.143rem;
    width: 100%;
    align-items: center;

    .linkButtonText {
      margin-right: 1.071rem;
    }
  }
  .profileWrapper {
    align-items: start;
    margin-right: 1.143rem;
  }
  .userName {
    font-size: 1.286rem;
    font-weight: 600;
  }
  .seeProfile {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme.color_text_primary_l7};
  }
`;

export const Seprator = styled.div`
  width: 80%;
  border-top: 1px solid ${palette.gray2};
  margin-top: 4px;
`;

export const Version = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: ${palette.gray4};
`;

export const AppIcon = styled.div``;
export const AppInfoWrapper = styled(Col)`
  color: ${(props) => props.theme.gray9};
  font-size: 0.857rem;
  align-items: center;
  justify-content: center;
  // height: 13rem;
  flex-wrap: nowrap;
  padding-bottom: 1.429rem;
  margin-top: auto;
  .appInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3.714rem;
  }
`;
export const AppTitle = styled.div`
  /* margin-top:1rem; */
  .appName {
    font-size: 1.572rem;
    color: ${(props) => props.theme.color_background_primary};
    font-weight: 600;
    padding-right: 0.5rem;
  }
`;
export const IconContainer = styled.div``;

export const VenueLogo = styled(Row)`
  .venueLogo {
    padding: ${(props) => !props.hasLogo && "1.2rem"};
    width: 4.286rem;
    height: 4.286rem;
    background-size: cover;
    border-radius: 8px;
    background-color: ${(props) =>
      !props.hasLogo && props.theme.color_background_secondary};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Venue = styled(Row)`
  padding: 0 2.786rem 0 2rem;
  gap: 1.63rem;
  align-items: center;
  margin-top: 2.286rem;
`;
export const VenueName = styled.div`
  font-size: 1.571rem;
  color: ${palette.white};
  font-weight: 700;
`;
export const LinkButtonStepsWrapper = styled(Row)`
  flex-wrap: nowrap;
  align-item: center;
  font-size: 1.143rem;
  gap: 1.143rem;
  span {
    font-size: 0.857rem;
    font-weight: 300;
    margin-right: 4px;
  }
`;
export const IncreaseCredit = styled(Row)`
  background: transparent;
  flex-wrap: nowrap;
  color: ${(props) => props.theme.primary} !important;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-size: 1rem;
  width: 7.143rem;
`;
