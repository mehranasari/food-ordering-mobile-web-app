import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import ItemPopUp from "../../Popup/itemPopUp/ItemPopUp";
import CheckoutItemCountWrapper from "./CheckoutItemCountWrapper";
import CategoryTabsNavabar from "./tabsComponents/CategoryTabsNavbar";
import SubcategoryTabsNavbar from "./tabsComponents/SubcategoryTabsNavbar";
import ConvertToPersianDigitWithComma from '../../../utils/method/ConvertToPersianDigitWithComma';

import { getMenu } from "../../../redux/action/menu";
import { getCategories } from "../../../redux/action/category";
import { getSubcategories } from "../../../redux/action/subcategory";
import { getItems } from "../../../redux/action/item";
import { filterCurrentVenueCartItems } from "../../../redux/action/cart";

import {
  VenueMenuBody,
  Container,
  SubcategoryTabsContainer,
  MenuContainer,
  SubcategoryContainer,
  VenueMenuItemContainer,
  VenueMenuItem,
  VenueMenuItemInfo,
  VenueMenuItemPic,
  VenueMenuItemDesc,
  ItemSize,
  CategoryName,
  SubcategoryName,
} from "../VenueMenuPage.styles";


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
    getMenu,
    filterCurrentVenueCartItems,
  } = props;

  useEffect(() => {
    filterCurrentVenueCartItems(venue._id);
  }, [venue._id, cart.allVenuesCartItems]);

  useEffect(() => {
    getCategories(venue._id);
    getSubcategories(venue._id);
    getItems(venue._id);
    getMenu(venue._id);
  }, [getCategories, getSubcategories, getItems, getMenu]);


  //Build categories object
  let categories = category.categories.map(category => {
    return {
      name: category.name,
      categoryId: category._id,
      node: document.getElementById(category._id)
    };
  });


  //Build subcategories object
  let subcategories = subcategory.subcategories.map(subcategory => {
    return {
      name: subcategory.name,
      subcategoryId: subcategory._id,
      parentCategory: subcategory.parentCategory,
      node: document.getElementById(subcategory._id)
    };
  });


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
      { category.loading || categories === null ? (<div>loading</div>) : (
        <>
          <VenueMenuBody>
            <CategoryTabsNavabar categories={categories} />
            <Container>
              {subcategory.loading || subcategories === null ? (<div>loading</div>) : (
                <SubcategoryTabsContainer>
                  <SubcategoryTabsNavbar categories={categories} subcategories={subcategories} />
                </SubcategoryTabsContainer>
              )}

              <MenuContainer>
                {categories.map(category => (
                  <div id={category.categoryId} key={category.categoryId}>
                    {/* <CategoryName>{category.name}</CategoryName> */}
                    {(subcategories.filter(subcategory => subcategory.parentCategory === category.categoryId)).map(subcategory => (
                      <SubcategoryContainer id={subcategory.subcategoryId} key={subcategory.subcategoryId}>
                        <SubcategoryName>{subcategory.name}</SubcategoryName>
                        {(item.items.filter(item => item.parentSubcategory === subcategory.subcategoryId)).map(item => (
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
                      </SubcategoryContainer>
                    )
                    )}
                  </div>
                ))}
              </MenuContainer>
            </Container>
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
  getMenu: PropTypes.func.isRequired,
  filterCurrentVenueCartItems: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  category: state.category,
  subcategory: state.subcategory,
  item: state.item,
  cart: state.cart
});

export default connect(mapStateToProps, { getCategories, getSubcategories, getItems, getMenu, filterCurrentVenueCartItems })(VenueMenuPageInner);
