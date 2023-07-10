import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ConvertToPersianDigit from "../../Utils/method/ConvertToPersianDigit";
import Header from "../../Shared/Header";
import MenuSizeHandlerIcon from "../../Assets/icons/MenuSizeHandlerIcon.jsx";
import DownArrow from "../../Assets/icons/DownArrow.jsx";

import CheckIcon from "../../Assets/icons/CheckIcon.jsx";

import {
  ItemDrawerWrapper,
  StyledSwipeableDrawer,
  BodyWrapper,
  Accordion,
  AccordionSummary,
  ItemWrapper,
  SelectTableWrapper,
  TableAreaName,
  TableAreaListWrapper,
  // ConfirmSelection,
  // ConfirmButton,
} from "./styles.jsx";

const TableService = ({
  history,
  show,
  onHide,
  tableNumberHandler,
  tableServiceOrderSettings,
  theme,
}) => {
  const [windowlocal] = useState(window.location.pathname);

  useEffect(() => {
    /**Handles the back navigation */
    show && history.push({ pathname: windowlocal });
    show &&
      window.addEventListener("popstate", (event) => {
        onHide();
      });
    return () => {
      window.removeEventListener("popstate", () => null);
    };
  }, [show]);

  const [selectedTableNumber, setSelectedTableNumber] = useState({
    tableArea: null,
    tableName: null,
    tableNumber: null,
    id: null,
    areaRangeId: null,
  });

  //On Submit Selection
  const handleSumbit = (selectedTableNumber) => {
    tableNumberHandler(selectedTableNumber);
    setSelectedTableNumber(selectedTableNumber);
    onHide();
    history.goBack();
  };

  //On hide drawwer and deselect item selection
  const onHideAndDeselect = () => {
    onHide();
    history.goBack();
    // setSelectedTableNumber({
    //   tableArea: null,
    //   tableName: null,
    //   tableNumber: null,
    //   id: null,
    //   areaRangeId: null
    // });
  };

  //Build tables object
  let tableService = tableServiceOrderSettings.areaRanges.map(
    (tableAreaItem) => {
      let tableNumbers = [];
      for (let i = tableAreaItem.rangeFrom; i <= tableAreaItem.rangeTo; i++) {
        tableNumbers.push({
          tableName: `میز ${ConvertToPersianDigit(i)}`,
          tableNumber: i,
          id: tableAreaItem._id + i,
        });
      }
      return {
        _id: tableAreaItem._id,
        name: tableAreaItem.name,
        tables: tableNumbers,
        status: tableAreaItem.status,
      };
    }
  );
  const tableService_ = tableService?.filter((item) => item.status);

  return (
    <ItemDrawerWrapper>
      <StyledSwipeableDrawer
        disableSwipeToOpen={true}
        anchor={"bottom"}
        open={show}
        onClose={onHideAndDeselect}
        onOpen={() => {
          onHide();
          history.goBack();
        }}
      >
        {/* <div className="menuSizeHandlerIconWrapper">
          <MenuSizeHandlerIcon />
        </div> */}
        <Header
          onClose={() => {
            onHide();
            history.goBack();
          }}
          pageTitle={
            <div>
              <span className="tableNumberTitleBold">شماره میز </span>خود را
              انتخاب کنید :
            </div>
          }
          isModal={true}
          disableBoxShadow={true}
        />

        <BodyWrapper>
          <SelectTableWrapper>
            <TableAreaListWrapper>
              {tableService_.map(
                (tableAreaItem) =>
                  tableAreaItem.status && (
                    <Accordion
                      square
                      key={tableAreaItem._id}
                      defaultExpanded={tableService_?.length === 1}
                    >
                      <AccordionSummary
                        expandIcon={<DownArrow color={theme.color_icon_primary}/>}
                        aria-controls={`panel${tableAreaItem._id}-content`}
                        id={`panel${tableAreaItem._id}-header`}
                      >
                        <TableAreaName>{tableAreaItem.name}</TableAreaName>
                      </AccordionSummary>
                      {tableAreaItem.tables.map((eachTableItem, index) => (
                        <ItemWrapper
                          key={index}
                          selectedTableNumber={
                            selectedTableNumber.id === eachTableItem.id
                              ? true
                              : false
                          }
                          onClick={() =>
                            handleSumbit({
                              tableArea: tableAreaItem.name,
                              tableName: eachTableItem.tableName,
                              tableNumber: eachTableItem.tableNumber,
                              id: eachTableItem.id,
                              areaRangeId: tableAreaItem._id,
                            })
                          }
                        >
                          <div className="title">{eachTableItem.tableName}</div>
                          {selectedTableNumber.id === eachTableItem.id && (
                            <div className="checkButton">
                              <CheckIcon
                                fill={theme.textColorOfPrimaryButtons}
                              />
                            </div>
                          )}
                        </ItemWrapper>
                      ))}
                    </Accordion>
                  )
              )}
            </TableAreaListWrapper>
          </SelectTableWrapper>

          {/* <ConfirmSelection>
            <ConfirmButton onClick={handleSumbit}>
              <div className="confirmButtonWrapper">
                <div className="confirmButtonText">تأیید شماره میز</div>
              </div>
            </ConfirmButton>
          </ConfirmSelection> */}
        </BodyWrapper>
      </StyledSwipeableDrawer>
    </ItemDrawerWrapper>
  );
};

TableService.propTypes = {};
const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps, {})(withRouter(TableService));
