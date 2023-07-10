import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
//utils
import Constants from "../../../Utils/constants";
import ConvertToPersianDigitWithComma from "../.../../../../Utils/method/ConvertToPersianDigitWithComma";
//components
import Header from "../../../Shared/Header";
import CategoryTabsNavabar from "./tabsComponents/CategoryTabsNavbar";
import SubcategoryTabsNavbar from "./tabsComponents/SubcategoryTabsNavbar";
import VenueMenuPageInnerLoading from "../ContentLoader/VenueMenuPageInnerLoading";
//icons
import MenuEmptyStatusIcon from "../../../Assets/icons/MenuEmptyStatusIcon.jsx";
import DiscountIcon from "../../../Assets/icons/DiscountIcon.jsx";
import PlusIcon from "../../../Assets/icons/PlusIcon.jsx";
import TableServiceIcon from "../../../Assets/icons/TableServiceIcon.jsx";
import CollectionServiceIcon from "../../../Assets/icons/CollectionServiceIcon.jsx";
import DeliveryServiceIcon from "../../../Assets/icons/DeliveryServiceIcon.jsx";
//redux
import { getMenu } from "../../../Redux/action/menu";
import { filterCurrentVenueCartItems } from "../../../Redux/action/cart";
import { setSelectedItem } from "../../../Redux/action/item";

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
  SubcategoryName,
  MenuEmptyStatus,
  HeaderContainer,
  MenuEmptyStatusWrapper,
} from "../styles.jsx";

const VenueMenuPageInner = (props) => {
  const {
    venue,
    menu: { menu, loading },
    cart,
    item: { pageYOffset },
    orderType: { orderType },
    getMenu,
    filterCurrentVenueCartItems,
    setSelectedItem,
    history,
    theme,
    venueOrderSettings,
  } = props;
  //states and constants
  const [navbarTransform, setNavbarTransform] = React.useState(0);
  const scrollRefElement = document.getElementById("ContentsWrapper");

  let oldScrollY = useRef(0);
  const venueMenuBodyRef = useRef();
  //functions
  const pageTitle = () => {
    let title = "";
    if (orderType === Constants.orderType.TABLE_SERVICE) {
      venueOrderSettings?.orderSettings?.tableService?.label
        ? (title = venueOrderSettings?.orderSettings?.tableService?.label)
        : (title = "بر روی میز");
    } else if (orderType === Constants.orderType.COLLECTION_SERVICE) {
      venueOrderSettings?.orderSettings?.collectionService?.label
        ? (title = venueOrderSettings?.orderSettings?.collectionService?.label)
        : (title = "تحویل حضوری");
    } else if (orderType === Constants.orderType.DELIVERY_SERVICE) {
      venueOrderSettings?.orderSettings?.deliveryService?.label
        ? (title = venueOrderSettings?.orderSettings?.deliveryService?.label)
        : (title = "ارسال با پیک");
    }
    return title;
  };

  //Build categories object
  let categories = menu?.map((category) => {
    if (
      category?.subcategories.find((subcategory) => {
        return subcategory?.items.length > 0;
      }) &&
      true
    )
      return {
        name: category?.name,
        categoryId: category?._id,
        node: document.getElementById(category?._id),
      };
  });

  //Remove all categories without any subcateories
  let filteredCategories = categories.filter(
    (category) => category !== undefined
  );

  const [categoryObject, setCategoryObject] = useState(filteredCategories);

  //Build subcategories object
  let allSubcategories = [];
  menu.forEach((category) => {
    allSubcategories.push(category?.subcategories);
  });
  allSubcategories = allSubcategories.flat();

  let subcategories = allSubcategories.map((subcategory) => {
    if (subcategory?.items.length > 0)
      return {
        name: subcategory?.name,
        subcategoryId: subcategory?._id,
        parentCategory: subcategory?.parentCategory,
        node: document.getElementById(subcategory?._id),
      };
  });

  //Remove all subcategories without any items
  let filteredSubcategories = subcategories.filter(
    (subcategory) => subcategory !== undefined
  );

  const [subcategoryObject, setSubcategoryObject] = useState(
    filteredSubcategories
  );

  //Back to privious scroll position if pageYOffset is existed

  //onClick on each item card
  const itemPageHandler = (item, venueUrl) => {
    if (window.innerWidth < 800) {
      setSelectedItem(item, window.pageYOffset, history);
    } else {
      setSelectedItem(item, scrollRefElement.scrollTop, history);
    }
  };

  //Redirect if Order Type doesn't set
  if (orderType === null) {
    return <Redirect to={`/`} />;
  }

  const hasMenu = () => {
    if (menu === null || menu.length === 0) return false;
    else {
      if (menu.every((category) => category.subcategories.length === 0))
        return false;
      return menu.some((category) => {
        return category.subcategories?.some(
          (subcategory) => subcategory?.items?.length !== 0
        );
      });
    }
  };

  const controlDirectionMobile = () => {
    if (window?.scrollY > oldScrollY.current) {
      setNavbarTransform(-50);
    } else if (window?.scrollY < oldScrollY.current) {
      setNavbarTransform(0);
    }

    oldScrollY.current = window?.scrollY;
  };
  const controlDirection = () => {
    if (scrollRefElement?.scrollTop > oldScrollY.current) {
      setNavbarTransform(-50);
    } else {
      setNavbarTransform(0);
    }
    oldScrollY.current = scrollRefElement?.scrollTop;
  };

  //useEffects
  useEffect(() => {
    filterCurrentVenueCartItems(venue?._id, orderType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [venue?._id, cart?.allVenuesCartItems]);

  useEffect(() => {
    getMenu(venue?._id, orderType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getMenu]);
  useEffect(() => {
    setCategoryObject(filteredCategories);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  useEffect(() => {
    if (window.innerWidth < 800) {
      window?.addEventListener("scroll", controlDirectionMobile);
      if (pageYOffset && pageYOffset > 0) {
        window.scrollTo(0, pageYOffset);
      }
    } else {
      scrollRefElement?.addEventListener("scroll", controlDirection);
      if (pageYOffset && pageYOffset > 0) {
        scrollRefElement.scrollTo(0, pageYOffset);
      }
    }
    return () => {
      scrollRefElement?.removeEventListener("scroll", controlDirectionMobile);
      window?.removeEventListener("scroll", controlDirection);
    };
  }, [scrollRefElement]);

  useEffect(() => {
    setSubcategoryObject(filteredSubcategories);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <>
      {loading ? (
        <VenueMenuPageInnerLoading theme={theme} />
      ) : !hasMenu() ? (
        <MenuEmptyStatusWrapper>
          <Header
            disableBoxShadow={true}
            position={"block"}
            previousPage={"/"}
            // translateY={headerTranslate}
            fill={theme.color_text_primary}
            pageTitle={pageTitle()}
            pageIcon={
              orderType === Constants.orderType.TABLE_SERVICE ? (
                <TableServiceIcon
                  fill={theme.primary}
                  stroke={theme.color_text_primary}
                />
              ) : orderType === Constants.orderType.COLLECTION_SERVICE ? (
                <CollectionServiceIcon
                  fill={theme.primary}
                  stroke={theme.color_text_primary}
                  backgroundColor={theme.color_background_primary}
                />
              ) : (
                <DeliveryServiceIcon
                  fill={theme.primary}
                  stroke={theme.color_text_primary}
                />
              )
            }
            menu
            backgroundColor={theme.color_background_primary}
          />

          <MenuEmptyStatus>
            <MenuEmptyStatusIcon
              stroke={theme.color_icon_primary}
              fill={theme.primary}
            />
            <div className="menuEmptyStatusText">
              در حال حاضر منویی در این رستوران در دسترس نیست!
            </div>
          </MenuEmptyStatus>
        </MenuEmptyStatusWrapper>
      ) : (
        <>
          <VenueMenuBody ref={venueMenuBodyRef} onScroll={controlDirection}>
            <HeaderContainer headerTranslate={navbarTransform}>
              <Header
                disableBoxShadow={true}
                position={"block"}
                previousPage={"/"}
                // translateY={headerTranslate}
                fill={theme.color_text_primary}
                pageTitle={pageTitle()}
                pageIcon={
                  orderType === Constants.orderType.TABLE_SERVICE ? (
                    <TableServiceIcon
                      fill={theme.primary}
                      stroke={theme.color_text_primary}
                    />
                  ) : orderType === Constants.orderType.COLLECTION_SERVICE ? (
                    <CollectionServiceIcon
                      fill={theme.primary}
                      stroke={theme.color_text_primary}
                      backgroundColor={theme.color_background_primary}
                    />
                  ) : (
                    <DeliveryServiceIcon
                      fill={theme.primary}
                      stroke={theme.color_text_primary}
                    />
                  )
                }
                menu
                backgroundColor={theme.color_background_primary}
              />
              <CategoryTabsNavabar
                categories={
                  filteredCategories?.length > 0
                    ? filteredCategories
                    : categoryObject
                }
              />
              <SubcategoryTabsContainer>
                <SubcategoryTabsNavbar
                  theme={theme}
                  subcategories={
                    filteredSubcategories?.length > 0
                      ? filteredSubcategories
                      : subcategoryObject
                  }
                />
              </SubcategoryTabsContainer>
            </HeaderContainer>
            <Container>
              <MenuContainer>
                {menu?.map((category) => {
                  return (
                    category?.subcategories?.length > 0 && (
                      <div id={category?._id} key={category?._id}>
                        {category?.subcategories.map(
                          (subcategory) =>
                            subcategory?.items.length > 0 && (
                              <SubcategoryContainer
                                id={subcategory?._id}
                                key={subcategory?._id}
                              >
                                <SubcategoryName>
                                  {subcategory?.name}
                                </SubcategoryName>
                                {subcategory?.items.map((item) => {
                                  let itemInfo = item.prices.reduce(
                                    (
                                      itemInfo,
                                      { discountPercent, price, status }
                                    ) => {
                                      let finalPrice =
                                        price - (price * discountPercent) / 100;
                                      if (
                                        (itemInfo.minPrice > finalPrice ||
                                          itemInfo.minPrice === null) &&
                                        status
                                      )
                                        itemInfo.minPrice = finalPrice;
                                      if (
                                        discountPercent > 0 &&
                                        !itemInfo.hasDscount &&
                                        status
                                      )
                                        itemInfo.hasDscount = true;
                                      return itemInfo;
                                    },
                                    { minPrice: null, hasDscount: false }
                                  );
                                  return (
                                    <VenueMenuItemContainer key={item?._id}>
                                      <VenueMenuItem
                                        onClick={() =>
                                          itemPageHandler(item, venue?.url)
                                        }
                                      >
                                        <VenueMenuItemInfo>
                                          <VenueMenuItemDesc
                                            hasImage={
                                              item?.imageUrlLocation
                                                ? true
                                                : false
                                            }
                                          >
                                            <div className="VenueMenuItemDescTitle">
                                              <div> {item?.name}</div>
                                              {itemInfo.hasDscount && (
                                                <div className="VenueMenuItemDescDiscoun">
                                                  <DiscountIcon />
                                                </div>
                                              )}
                                            </div>
                                            <div className="VenueMenuItemDescExDesc fade">
                                              {item?.description}
                                            </div>
                                            {item?.status ? (
                                              <div className="VenueMenuItemMinPrice">
                                                <PlusIcon
                                                  fill={theme.primary}
                                                  stroke={
                                                    theme.textColorOfPrimaryButtons
                                                  }
                                                />
                                                <div>
                                                  {ConvertToPersianDigitWithComma(
                                                    itemInfo.minPrice
                                                  )}
                                                  <span className="costCurrency">
                                                    {" "}
                                                    تومان
                                                  </span>
                                                </div>
                                              </div>
                                            ) : (
                                              <div className="nonActiveStatus">
                                                غیر فعال
                                              </div>
                                            )}
                                          </VenueMenuItemDesc>
                                          {item?.imageUrlLocation && (
                                            <VenueMenuItemPic
                                              src={item?.imageUrlLocation}
                                            />
                                          )}
                                        </VenueMenuItemInfo>
                                      </VenueMenuItem>
                                    </VenueMenuItemContainer>
                                  );
                                })}
                              </SubcategoryContainer>
                            )
                        )}
                      </div>
                    )
                  );
                })}
              </MenuContainer>
            </Container>
          </VenueMenuBody>
        </>
      )}
    </>
  );
};

VenueMenuPageInner.propTypes = {
  menu: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  getMenu: PropTypes.func.isRequired,
  filterCurrentVenueCartItems: PropTypes.func.isRequired,
  orderType: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  menu: state.menu,
  cart: state.cart,
  item: state.item,
  theme: state.theme.theme,
  orderType: state.orderType,
  venueOrderSettings: state.setting.venueOrderSettings,
});

export default connect(mapStateToProps, {
  getMenu,
  filterCurrentVenueCartItems,
  setSelectedItem,
})(withRouter(VenueMenuPageInner));
