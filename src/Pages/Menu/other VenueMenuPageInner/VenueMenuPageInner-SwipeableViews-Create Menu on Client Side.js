import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from "@material-ui/core";
import ItemPopUp from "../Popup/detailItem/ItemPopUp";
import CheckoutItemCountWrapper from "./CheckoutItemCountWrapper";
import ConvertToPersianDigitWithComma from '../../utils/method/ConvertToPersianDigitWithComma';

import { getCategories } from "../../redux/action/category";
import { getSubcategories } from "../../redux/action/subcategory";
import { getItems } from "../../redux/action/item";
import { filterCurrentVenueCartItems } from "../../redux/action/cart";

import {
  VenueMenuBody,
  VenueMenuItemContainer,
  VenueMenuItem,
  VenueMenuItemInfo,
  VenueMenuItemPic,
  VenueMenuItemDesc,
  ItemSize,
  SwipeableViewsContainer,
  CategoryPanel,
  SubcategoryPanel,
} from "./VenueMenuPage.styles";


//Category Tabs Style
const CategoryTabs = withStyles({
  root: {
    borderBottom: '1px solid #E8EAF4',
  },
  indicator: {
    backgroundColor: '#FFDD02',
  },
})(Tabs);

const CategoryTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 60,
    marginRight: theme.spacing(2),
    fontFamily: 'IranSanse',
    fontSize: '1rem'
  },
  selected: {
    color: '#212121',
    fontWeight: 'bold',
    fontSize: '1.125rem',
  },
}))((props) => <Tab disableRipple {...props} />);


const SubcategoryTabs = withStyles({
  root: {
    marginRight: '20px',
    padding: "5px 0 10px 0",
    overflow: 'scroll',
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
    background: "#212121",
    borderRadius: "50px",
  },
})(Tabs);


//Subcategory Tabs Style
const SubcategoryTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 60,
    marginRight: theme.spacing(1),
    padding: '0px 20px',
    fontFamily: 'IranSanse',
    fontSize: '1rem',
    color: '#8D98B7',
    zIndex: 100,
    opacity: 1
  },
  selected: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: '1rem',
  },
}))((props) => <Tab disableRipple {...props} />);



//Create Category Tab panel for show subcategory pills for relevant category
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (<div>{children}</div>)}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



//Component Start
const VenueMenuPageInner = (props) => {

  const {
    venue,
    category,
    subcategory,
    item,
    cart,
    getCategories,
    getSubcategories,
    getItems,
    filterCurrentVenueCartItems,
  } = props;

  useEffect(() => {
    filterCurrentVenueCartItems(venue._id);
  }, [venue._id, cart.allVenuesCartItems])

  useEffect(() => {
    getCategories(venue._id);
    getSubcategories(venue._id);
    getItems(venue._id);
  }, [getCategories, getSubcategories, getItems]);


  //Category Tabs
  const [index, setIndex] = useState(0);
  const handleChange = (event, value) => {
    setIndex(value);
    setNestedIndex(0);
  }
  const handleChangeIndex = (index, indexLatest) => {
    setIndex(index);
    setNestedIndex(0);
  }

  //Subcategory Tabs
  const [nestedIndex, setNestedIndex] = useState(0);
  const handleNestedChange = (event, value) => {
    setNestedIndex(value);
  }
  const handleNestedChangeIndex = (index, indexLatest) => {
    setNestedIndex(index);
  }


  //Item Popup
  const [showItemPopup, setShowItemPopup] = useState(false);

  const closeItemPopUp = () => {
    setShowItemPopup(false);
  }

  const [selectedItem, setSelectedItem] = useState(null);

  const itemPopUp = (item) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setShowItemPopup(true);
    setSelectedItem(item);
  };


  return (
    <>
      { category.loading || category.categories === null ? (<div>loading</div>) : (
        <>
          <VenueMenuBody>
            <CategoryTabs variant="scrollable" value={index} onChange={(e, v) => handleChange(e, v)}>
              {category.categories.map(category => (
                <CategoryTab key={category._id} label={category.name} {...a11yProps({ index })} />
              ))}
            </CategoryTabs>

            <SwipeableViewsContainer>
              {subcategory.loading || subcategory.subcategories === null ? (<div>loading</div>) : (
                <>
                  <div className="subcategoryContainer">
                    {category.categories.map((category, categoryIndex) => (
                      <TabPanel key={category._id} value={index} index={categoryIndex}>
                        <SubcategoryTabs variant="scrollable" scrollButtons="auto" value={nestedIndex} onChange={(e, v) => handleNestedChange(e, v)} >
                          {(subcategory.subcategories.filter(subcategory => subcategory.parentCategory === category._id)).map(subcategory =>
                            <SubcategoryTab key={subcategory._id} label={subcategory.name} />
                          )}
                        </SubcategoryTabs>
                      </TabPanel>
                    ))}
                  </div>

                  {item.loading || item.items === null ? (<div>loading</div>) : (
                    <SwipeableViews axis="x-reverse" index={index} onChangeIndex={(index, indexLatest) => handleChangeIndex(index, indexLatest)} >
                      {category.categories.map(category => (
                        <CategoryPanel key={category._id}>
                          <SwipeableViews animateHeight axis="x-reverse" index={nestedIndex} onChangeIndex={(index, indexLatest) => handleNestedChangeIndex(index, indexLatest)}>
                            {(subcategory.subcategories.filter(subcategory => subcategory.parentCategory === category._id)).map(subcategory =>
                              <SubcategoryPanel key={subcategory._id}>
                                {(item.items.filter(item => item.parentSubcategory === subcategory._id)).map(item => (
                                  <VenueMenuItemContainer key={item._id}>
                                    <VenueMenuItem onClick={itemPopUp(item)}>
                                      <VenueMenuItemInfo>
                                        <VenueMenuItemDesc>
                                          <div className="VenueMenuItemDescTitle">{item.name}</div>
                                          <div className="VenueMenuItemDescExDesc fade">{item.description}</div>
                                        </VenueMenuItemDesc>
                                        <VenueMenuItemPic src={item.imageUrlLocation} />
                                      </VenueMenuItemInfo>
                                      {item.price.map((priceOption, priceIndex) => (
                                        <ItemSize key={priceIndex} value={priceOption.cost}>
                                          <div>
                                            <div className="sizeText">{priceOption.title}</div>
                                            <div className="cost">
                                              <div className="costText">{ConvertToPersianDigitWithComma(priceOption.cost)}<span className="costCurrency"> تومان</span></div>
                                            </div>
                                          </div>
                                          <CheckoutItemCountWrapper item={item} priceIndex={priceIndex} priceOption={priceOption} />
                                        </ItemSize>
                                      ))}
                                    </VenueMenuItem>
                                  </VenueMenuItemContainer>
                                ))}
                              </SubcategoryPanel>
                            )}
                          </SwipeableViews>
                        </CategoryPanel>
                      ))}
                    </SwipeableViews>
                  )}
                </>
              )}

            </SwipeableViewsContainer>
          </VenueMenuBody>
          <ItemPopUp show={showItemPopup} onHide={closeItemPopUp} selectedItem={selectedItem} />
        </>
      )
      }
    </>
  )
}

VenueMenuPageInner.propTypes = {
  category: PropTypes.object.isRequired,
  subcategory: PropTypes.object.isRequired,
  getCategories: PropTypes.func.isRequired,
  getSubcategories: PropTypes.func.isRequired,
  getItems: PropTypes.func.isRequired,
  filterCurrentVenueCartItems: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  category: state.category,
  subcategory: state.subcategory,
  item: state.item,
  cart: state.cart
});

export default connect(mapStateToProps, { getCategories, getSubcategories, getItems, filterCurrentVenueCartItems })(VenueMenuPageInner);
