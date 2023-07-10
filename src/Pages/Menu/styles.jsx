import styled from "styled-components";
import { Row } from "../../Kit/Row";
import { Col } from "../../Kit/Column";
import Button from "@material-ui/core/Button";
import { theme } from "../../Shared/Theme";
import { palette } from "../../Shared/Theme/Palette";

export const VenueMenuWrapper = styled(Row)`
  justify-content: center;
  align-items: start;
`;
export const HeaderContainer = styled(Col)`
  top: ${(props) => props.headerTranslate}px;
  width: 100%;
  position: fixed;
  z-index: 1100;
  transition: 0.3s all ease;
  padding:0;
  box-shadow: ${(props) => props.theme.box_shadow_primary};
  background: ${(props) => props.theme.color_background_primary};
  @media (min-width:800px){
    position: sticky;
 
  }
`;
export const CategoryTabsContainer = styled.div`
  width: 100%;
  overflow: scroll;
  background-color: ${(props) => props.theme.color_background_primary};
  ::-webkit-scrollbar {
    width: 0rem !important;
    cursor: pointer;
  
  }

`;

export const VenueMenuBody = styled(Row)`
  width: 100%;
  // margin-top: ${(props) => (props.headerTranslate === 100 ? 0 : "60px")};
`;

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 11.2rem);
  margin-top:12.143rem;
  @media (min-width: 800px) {
    min-height: unset;
    height: 100%;
    margin-top:0;

  }
`;

export const MenuContainer = styled.div`
  padding: 0 1.071rem;
  margin: 1.1rem 0 22rem 0;
`;

export const SubcategoryContainer = styled.div`
  margin-bottom: 2.5rem;
`;

export const SubcategoryTabsContainer = styled.div`
  background-color: ${(props) => props.theme.color_background_primary};
  width: 100%;
  overflow: scroll;
  z-index: 1099;
  ::-webkit-scrollbar {
    width: 0rem !important;
    cursor: pointer;
  
  }
`;

// export const CategoryName = styled.h4`
//   color: red;
// `;

export const SubcategoryName = styled.h4`
  color: ${(props) => props.theme.color_text_subtitle};
  margin: 0 1rem 1rem 0;
  font-weight: normal;
  font-size: 1.21rem;
`;

export const VenueMenuItemContainer = styled.div`
  width: 100%;
  align-items: center;
  margin-bottom: 1.071rem;
  cursor: pointer;
`;

export const VenueMenuItem = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color_background_secondary};
  border-radius: 1rem;
  align-items: center;
  /* padding: 15px 20px; */
  padding: 15px;
`;

export const VenueMenuItemInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const VenueMenuItemPic = styled.div`
  width: 6.5rem;
  height: 6.5rem;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 14px;
`;

export const VenueMenuItemDesc = styled.div`
  /* justify-content: space-evenly; */
  width: ${(props) => (props.hasImage ? "calc(100% - 110px)" : "100%")};
  height: 80%;
  .VenueMenuItemDescTitle {
    color: ${(props) => props.theme.color_text_primary};
    font-weight: 600;
    font-size: 1.0625rem;
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.714rem;
  }
  .VenueMenuItemDescExDesc {
    color: ${(props) => props.theme.gray4};
    text-align: justify;
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
  .fade {
    position: relative;
    overflow: hidden;
    height: 1.5rem;
  }
  .fade:after {
    content: "";
    text-align: right;
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${(props) => (props.hasImage ? "40%" : "15%")};
    height: 1.5rem;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.color_background_secondary} 0%,
      rgba(249, 249, 249, 0) 100%
    );
  }
  .VenueMenuItemMinPrice {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.714rem;
    font-weight: 600;
    font-size: 1.214rem;
  }
  .costCurrency {
    font-size: 0.714rem;
    color: ${(props) => props.theme.gray4};
    padding-right: 0.286rem;
  }
  .VenueMenuItemDescDiscoun {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .nonActiveStatus {
    font-size: 1.286rem;
    font-weight: 700;
  }
`;

export const ItemSize = styled(Row)`
  width: 100%;
  justify-content: space-between;
  color: ${(props) => props.theme.textColorOfPrimaryButtons};
  margin-top: 1rem;
  align-items: flex-end;

  .selectedSignifier {
    width: 5px;
    height: 15px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.primary};
  }
  .sizeText {
    font-weight: 600;
    font-size: 1rem;
    color: ${(props) => props.theme.textColorOfPrimaryButtons};
    /* margin-bottom: 5px; */
  }
  .costWithoutDiscount {
    display: flex;
    align-items: center;
    .costText {
      font-weight: 600;
      font-size: 1.25rem;
      .costCurrency {
        font-size: 0.8125rem;
        color: ${(props) => props.theme.textColorOfPrimaryButtons};
        font-weight: 100;
      }
    }
  }
  .costWithDiscountWrapper {
    display: flex;
    align-items: flex-end;

    .discountPercent {
      display: flex;
      margin-top: 5px;
      justify-content: center;
      align-items: center;
      height: 2.57rem;
      width: 2.57rem;
      border: 1.5px solid ${palette.red1};
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 900;
      color: ${palette.red1};
    }
    .costWithDiscount {
      margin-right: 0.71rem;
      margin-bottom: -0.5rem;

      .priceWithoutDiscount {
        color: ${(props) => props.theme.color_text_primary_l5};
        font-size: 1rem;
        text-decoration-line: line-through;
        margin-bottom: -0.21rem;
      }
      .priceWithDiscount {
        font-weight: 600;
        font-size: 1.25rem;
        .costCurrency {
          font-size: 0.8125rem;
          color: ${(props) => props.theme.textColorOfPrimaryButtons};
          font-weight: 100;
        }
      }
    }
  }
`;

export const AddItemToCart = styled.button`
  font-size: 1rem;
  color: ${(props) => props.theme.textColorOfPrimaryButtons};
  font-weight: 400;
  /* background-color: #FAF6E0; */
  padding: 5px 25px;
  border-radius: 8px;
  border: 1.5px solid ${(props) => props.theme.primary};
  font-family: "IranSanse";
`;

export const VenueMenuItemPrice = styled(Row)`
  color: ${(props) => props.theme.textColorOfPrimaryButtons};
  font-weight: 600;
  font-size: 1.125rem;
  justify-content: flex-end;
`;

export const CheckoutWrapper = styled.div`
  display: flex;
  max-width:800px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: ${(props) =>
    props.showCheckoutPopup && props.theme.color_background_primary};
  padding: 0 1.714rem;
  position: fixed;
  bottom: 0;
  z-index: 1100;
  box-shadow: ${(props) =>
    props.showCheckoutPopup && props.theme.box_shadow_primary};
  @media only screen and (max-width: 335px) {
    height: 60px;
  }
  @media (min-width:800px){
    bottom: 2.857rem;
    @media (min-height:1080px){
    bottom: calc((100vh - 1000px) / 2);

  }
`;

export const UpNavigationWrapper = styled.div(
  ({ position, show }) =>
    `
transform: ${!show && `translateY(200px)`};
cursor:pointer;
// animation: checkoutButtonAnimation ease 0.3s;
  transition: all ease 0.3s;
  position:fixed;
  bottom: ${position + 5}px;
  left:1.5rem;
  @media (min-width:800px){
    transform: ${!show && `translateY(400px)`};
    bottom: calc(3rem + ${position + 5}px );
    left:calc(50% - 370px);

    @media (min-height:1080px){
    bottom: calc(50% - 500px + ${position + 5}px);
  }
  }
`
);
export const UpNavigationContainer = styled(Row)`
  background: ${(props) => props.theme.color_background_primary};
  border-radius: 100%;
  box-shadow: ${(props) => props.theme.box_shadow_primary};
  width: 3.429rem;
  height: 3.429rem;
  justify-content: center;
  align-items: center;
`;

export const CheckoutButton = styled(Button)`
  @keyframes checkoutButtonAnimation {
    from {
      transform: translateY(80px);
    }
    to {
      transform: translateY(0px);
    }
  }
  animation: checkoutButtonAnimation ease 0.3s;
  transition: all ease 0.3s;
  width: 100%;
  padding: 1.07rem 1.07rem !important;
  background: ${(props) => props.theme.primary} !important;
  border-radius: 10px !important;
  justify-content: center !important;
  align-items: center !important;
  @media only screen and (max-width: 335px) {
    padding: 10px 1rem !important;
  }
  .checkoutButtonText {
    margin-right: 10px !important;
    font-weight: 900 !important;
    font-size: 1.07rem !important;
    color: ${(props) => props.theme.textColorOfPrimaryButtons};
  }
  .checkoutButtonCounter {
    position: absolute !important;
    right: -15px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${palette.red1};
    color: ${palette.white};
    border-radius: 8px;
  }

  .checkoutButtonWrapper {
    display: flex !important;
    align-items: center !important;
  }
`;

export const CheckoutItemCount = styled.div`
  display: flex;
  align-items: center;
  width: 38%;
  justify-content: space-between;

  .countNumber {
    font-weight: 600;
    font-size: 1.375rem;
  }
`;

export const PlusCountItem = styled(Button)`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  height: 35px !important;
  width: 35px !important;
  background-color: #faf6e0 !important;
  border: ${(props) => props.theme.primary} 1.5px solid !important;
  border-radius: 8px !important;
  min-width: unset !important;
  color: ${(props) => props.theme.textColorOfPrimaryButtons};
`;

export const MinusCountItem = styled(Button)`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  height: 35px !important;
  width: 35px !important;
  background-color: unset !important;
  border: 1.5px solid ${(props) => props.theme.gray7} !important;
  border-radius: 8px !important;
  min-width: unset !important;
`;

export const MenuEmptyStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  .menuEmptyStatusText {
    width: 60%;
    text-align: center;
    color: ${(props) => props.theme.gray3};
    line-height: 1.7;
    font-size: 1.21rem;
    margin-top: 2.5rem;
  }
`;
export const MenuEmptyStatusWrapper = styled(Col)`
  width: 100%;
  height: 100vh;
  flex-wrap: nowrap;
`;

export const StaticAlertWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-top: 10px;
  @media (min-width: 800px) {
    max-width: 800px;
    bottom: 2.857rem;
    @media (min-height: 1080px) {
      bottom: calc((100vh - 1000px) / 2);
    }
  }
`;
export const StaticAlertContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.color_background_primary};
  padding: 0px 1.286rem 2.143rem 1.286rem;
  @media (min-width: 800px) {
    border-bottom-right-radius: 2.857rem;
    border-bottom-left-radius: 2.857rem;
  }
`;
