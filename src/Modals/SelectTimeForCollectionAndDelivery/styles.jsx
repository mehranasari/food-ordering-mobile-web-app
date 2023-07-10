import styled from "styled-components";
import { Col } from "../../Kit/Column";
import { Row } from "../../Kit/Row";
import Button from "@material-ui/core/Button";
import { theme } from "../../Shared/Theme";
import Drawer from "@mui/material/Drawer";
import { palette } from "../../Shared/Theme/Palette";

export const ItemDrawerWrapper = styled(Row)`
  width: 100%;
  .collectionTimeTitleBold {
    font-weight: bold;
  }
`;

export const StyledSwipeableDrawer = styled(Drawer)`
  z-index: 10003 !important;
  .MuiPaper-root {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.color_background_primary};
    max-width: 800px;
    margin: auto;
  }
  .menuSizeHandlerIconWrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 2.14rem;
  }
`;

export const BodyWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  /* margin-bottom: 5.71rem; */
  min-height: 30rem;
`;

export const SelectCollectionTime = styled.div`
  width: 100%;
  justify-content: center;
  margin-bottom: 5rem;
`;

export const CollectionTimeItem = styled(Col)`
  width: 100%;
  margin-top: 1.42rem;
  padding: 0 1.78rem;
`;

export const ItemWrapper = styled(Row)`
  justify-content: flex-start;
  border: ${(props) =>
    props.selectedCollectionTime && "1px solid" + props.theme.primary};
  position: relative;
  ::before {
    content: "";
    background-color: ${(props) =>
      props.selectedCollectionTime
        ? props.theme.primary
        : props.theme.color_background_secondary};
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: ${(props) => (props.selectedCollectionTime ? 0.1 : 1)};
  }
  font-weight: ${(props) => props.selectedCollectionTime && 600};
  width: 100%;
  border-radius: 10px;
  padding: 15px 25px;
  margin-top: 10px;
`;

export const ConfirmSelection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width:800px;
  height: 5.71rem;
  background-color:${(props) => props.theme.color_background_primary};
  padding: 0 2rem;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  box-shadow: ${(props) => props.theme.box_shadow_primary};
`;

export const ConfirmButton = styled(Button)`
  padding: 1rem 1.7rem !important;
  width: 100%;
  position: relative;
  background: ${(props) =>
    props.disabled
      ? props.theme.color_background_disable
      : props.theme.primary} !important;
  border-radius: 10px !important;
  justify-content: center;
  align-items: center;

  .confirmButtonText {
    font-size: 1.07rem !important;
    font-weight: 600 !important;
    color: ${(props) => props.theme.textColorOfPrimaryButtons};
  }
  .checkoutButtonWrapper {
    display: flex !important;
    align-items: center !important;
  }
`;

export const TimeRangesContainer = styled(Row)`
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const TimeRange = styled(Row)`
  font-size: 0.929rem;
  color: ${palette.blue2};
  background-color: ${palette.blue1};
  border-radius: 1.071rem;
  width: max-content;
  padding: 4px 8px;
  gap: 0.5rem;
  flex-wrap: wrap;
`;
export const BodyContainer = styled(Col)`
  margin-bottom: 7rem;
  justify-content: center;
  align-items: center;

  .staticAlarm {
    width: 100%;
  }
`;
export const Time = styled.div`
  font-size: 3.429rem;
`;
