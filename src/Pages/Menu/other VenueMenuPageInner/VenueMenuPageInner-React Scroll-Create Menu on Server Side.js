import React, { useState, useEffect, useRef } from 'react';
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
    menu: { menu, loading },
    cart,
    getMenu,
    filterCurrentVenueCartItems,
  } = props;

  useEffect(() => {
    filterCurrentVenueCartItems(venue._id);
  }, [venue._id, cart.allVenuesCartItems]);

  useEffect(() => {
    getMenu(venue._id);
  }, [getMenu]);

  let test = menu.map(category => {
    return {
      name: category.name,
      categoryId: category._id,
      node: document.getElementById(category._id)
    };
  })

  const [state, setstate] = useState(test);
  useEffect(() => {
    setstate(test);
  }, [loading]);


  //Build categories object
  // let categories = menu.map(category => {
  //   return {
  //     name: category.name,
  //     categoryId: category._id,
  //     node: document.getElementById(category._id)
  //   };
  // });

  //Build subcategories object
  // let subcategories = [];
  // menu.map(category => {
  //   subcategories.push(category.subcategories);
  // })
  // subcategories = subcategories.flat();


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
      { loading || menu === null ? (<div>loading</div>) : (
        <>
          <VenueMenuBody>
            <CategoryTabsNavabar categories={test.length > 0 ? test : state} />
            <Container>
              <SubcategoryTabsContainer>
                {/* <SubcategoryTabsNavbar subcategories={subcategories} /> */}
              </SubcategoryTabsContainer>
              <MenuContainer>
                {menu.map(category => {
                  return (
                    <div id={category._id} key={category._id}>
                      {
                        category.subcategories.map(subcategory => (
                          <SubcategoryContainer id={subcategory._id} key={subcategory._id}>
                            <SubcategoryName>{subcategory.name}</SubcategoryName>
                            {
                              subcategory.items.map(item => (
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
                              ))
                            }
                          </SubcategoryContainer>
                        ))
                      }
                    </div>
                  )
                })}
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
  menu: PropTypes.object.isRequired,
  getMenu: PropTypes.func.isRequired,
  filterCurrentVenueCartItems: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  menu: state.menu,
  cart: state.cart
});

export default connect(mapStateToProps, { getMenu, filterCurrentVenueCartItems })(VenueMenuPageInner);
