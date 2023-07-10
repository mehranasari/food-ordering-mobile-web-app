import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import RecordController from "../../../Controller/RecordController";
import ConvertToPersianDigit from "../../../Utils/method/ConvertToPersianDigit";
import ConvertToPersianDigitWithComma from "../../../Utils/method/ConvertToPersianDigitWithComma";
import { RemoveDuplicateObjectsInArray } from "../../../Utils/method/RemoveDuplicateObjectsInArray";

import AddIcon from "../../../Assets/icons/AddIcon.jsx";
import MinusIcon from "../../../Assets/icons/MinusIcon.jsx";
import TrashBasket from "../../../Assets/icons/TrashBasket.jsx";

import {
  ItemExtrasWrapper,
  BodyWrapper,
  ItemSize,
  ItemExtrasGroupDescription,
  ExtraGroupContainer,
  ExtraGroupName,
  ExtraGroupPic,
  ExtraGroupDetails,
  AddExtra,
  CheckoutItemCount,
  PlusCountItem,
  MinusCountItem,
} from "./styles.jsx";
import { theme } from "../../../Shared/Theme";

const ItemExtrasGroups = ({
  itemExtras,
  itemProperty,
  setItemProperty,
  setCheckoutButtonDisable,
  step,
  itemExtrasGroupIndex,
  relatedPreferenceGroupsLength,
  theme
}) => {
  const [selectedItemExtras, setSelectedItemExtras] = useState(
    itemExtras?.items
  );
  const [addedExtras, setAddedExtras] = useState({});

  /* Handles the initialValue of addedExtraState */
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
    let addedExtrasInitialValue = {};
    for (let i = 0; i <= itemExtrasGroupIndex; i++) {
      addedExtrasInitialValue[i] = [];
    }
    setAddedExtras(addedExtrasInitialValue);
  }, []);

  /* Get how many extra has been added */
  const getAddedExtrasLength = () => {
    return (
      addedExtras[itemExtrasGroupIndex] &&
      addedExtras[itemExtrasGroupIndex].reduce((total, currentItem) => {
        return total + currentItem?.quantity;
      }, 0)
    );
  };

  /* Handles the disabling of checkout or continue button */
  useEffect(() => {
    let addedExtrasLength = getAddedExtrasLength();
    if (
      step === itemExtrasGroupIndex + relatedPreferenceGroupsLength + 1 &&
      itemExtras?.minQty > 0 &&
      addedExtrasLength < itemExtras?.minQty
    ) {
      setCheckoutButtonDisable(true);
    }
    if (
      step === itemExtrasGroupIndex + relatedPreferenceGroupsLength + 1 &&
      addedExtrasLength >= itemExtras?.minQty
    ) {
      setCheckoutButtonDisable(false);
    }
  }, [addedExtras, step]);

  const addExtra = (e, extraGroup, extraItemPriceOption) => {
    e.stopPropagation();
    let addedExtrasLength = getAddedExtrasLength();
    if (
      (extraItemPriceOption?.quantity === 0 ||
        extraItemPriceOption?.quantity === undefined) &&
      addedExtrasLength < itemExtras?.maxQty
    ) {
      /* Handles counting of extras */
      let newExtraItemPrices = RecordController.update(
        extraGroup?.extraItemPrices,
        {
          ...extraItemPriceOption,
          quantity: 1,
        }
      );
      let newSelectedExtras = RecordController.update(selectedItemExtras, {
        ...extraGroup,
        extraItemPrices: newExtraItemPrices,
      });
      setSelectedItemExtras(newSelectedExtras);
      let newAddedExtras = RecordController.add(
        addedExtras[itemExtrasGroupIndex],
        {
          ...extraItemPriceOption,
          extraName: extraGroup?.name,
          extraId: extraGroup?._id,
          extraGroupId: itemExtras?._id,
          quantity: 1,
        }
      );
      setAddedExtras({
        ...addedExtras,
        [itemExtrasGroupIndex]: newAddedExtras,
      });

      /* Final set selected itemExtras */
      setItemProperty({
        ...itemProperty,
        itemExtras: {
          ...itemProperty?.itemExtras,
          [`extraGroup_${step - (relatedPreferenceGroupsLength + 1)}`]:
            newAddedExtras,
        },
        finalItemExtras: RemoveDuplicateObjectsInArray([
          ...itemProperty?.finalItemExtras,
          ...newAddedExtras,
        ]),
        itemPrice:
          itemProperty?.itemPrice +
          itemProperty?.quantity *
          (extraItemPriceOption?.price -
            (extraItemPriceOption?.price *
              extraItemPriceOption?.discountPercent) /
            100),
      });
    } else {
      toast.error(`حداکثر ${itemExtras?.maxQty} آیتم را می توانید انتخاب کنید`);
    }
  };

  const addUpExtra = (e, extraGroup, extraItemPriceOption) => {
    e.stopPropagation();
    let addedExtrasLength = getAddedExtrasLength();
    if (addedExtrasLength < itemExtras?.maxQty) {
      /* Handles counting of extras */
      let newExtraItemPrices = RecordController.update(
        extraGroup?.extraItemPrices,
        {
          ...extraItemPriceOption,
          quantity: extraItemPriceOption.quantity + 1,
        }
      );
      let newSelectedExtras = RecordController.update(selectedItemExtras, {
        ...extraGroup,
        extraItemPrices: newExtraItemPrices,
      });
      setSelectedItemExtras(newSelectedExtras);

      let newAddedExtras = RecordController.update(
        addedExtras[itemExtrasGroupIndex],
        {
          ...extraItemPriceOption,
          extraName: extraGroup?.name,
          extraId: extraGroup?._id,
          extraGroupId: itemExtras?._id,
          quantity: extraItemPriceOption?.quantity + 1,
        }
      );
      setAddedExtras({
        ...addedExtras,
        [itemExtrasGroupIndex]: newAddedExtras,
      });

      /* Final set selected itemExtras */
      setItemProperty({
        ...itemProperty,
        itemExtras: {
          ...itemProperty?.itemExtras,
          [`extraGroup_${step - (relatedPreferenceGroupsLength + 1)}`]:
            newAddedExtras,
        },
        finalItemExtras: RemoveDuplicateObjectsInArray([
          ...itemProperty?.finalItemExtras,
          ...newAddedExtras,
        ]),
        itemPrice:
          itemProperty?.itemPrice +
          itemProperty?.quantity *
          (extraItemPriceOption?.price -
            (extraItemPriceOption?.price *
              extraItemPriceOption?.discountPercent) /
            100),
      });
    } else {
      toast.error(`حداکثر ${itemExtras?.maxQty} آیتم را می توانید انتخاب کنید`);
    }
  };

  const deletingExtra = (e, extraGroup, extraItemPriceOption) => {
    e.stopPropagation();
    /* Handles counting of extras */
    let newExtraItemPrices = RecordController.update(
      extraGroup?.extraItemPrices,
      {
        ...extraItemPriceOption,
        quantity: 0,
      }
    );
    let newSelectedExtras = RecordController.update(selectedItemExtras, {
      ...extraGroup,
      extraItemPrices: newExtraItemPrices,
    });
    setSelectedItemExtras(newSelectedExtras);
    let newAddedExtras = RecordController.delete(
      addedExtras[itemExtrasGroupIndex],
      extraItemPriceOption
    );
    setAddedExtras({
      ...addedExtras,
      [itemExtrasGroupIndex]: newAddedExtras,
    });

    /* Final set selected itemExtras */
    setItemProperty({
      ...itemProperty,
      itemExtras: {
        ...itemProperty?.itemExtras,
        [`extraGroup_${step - (relatedPreferenceGroupsLength + 1)}`]:
          newAddedExtras,
      },
      finalItemExtras: RecordController.delete(
        itemProperty?.itemExtras[
        `extraGroup_${step - (relatedPreferenceGroupsLength + 1)}`
        ],
        extraItemPriceOption
      ),
      itemPrice:
        itemProperty?.itemPrice -
        itemProperty?.quantity *
        (extraItemPriceOption?.price -
          (extraItemPriceOption?.price *
            extraItemPriceOption?.discountPercent) /
          100),
    });
  };

  const minusExtra = (e, extraGroup, extraItemPriceOption) => {
    e.stopPropagation();
    /* Handles counting of extras */
    let newExtraItemPrices = RecordController.update(
      extraGroup?.extraItemPrices,
      {
        ...extraItemPriceOption,
        quantity: extraItemPriceOption.quantity - 1,
      }
    );
    let newSelectedExtras = RecordController.update(selectedItemExtras, {
      ...extraGroup,
      extraItemPrices: newExtraItemPrices,
    });
    setSelectedItemExtras(newSelectedExtras);

    let newAddedExtras = RecordController.update(
      addedExtras[itemExtrasGroupIndex],
      {
        ...extraItemPriceOption,
        extraName: extraGroup?.name,
        extraId: extraGroup?._id,
        extraGroupId: itemExtras?._id,
        quantity: extraItemPriceOption?.quantity - 1,
      }
    );
    setAddedExtras({
      ...addedExtras,
      [itemExtrasGroupIndex]: newAddedExtras,
    });

    /* Final set selected itemExtras */
    setItemProperty({
      ...itemProperty,
      itemExtras: {
        ...itemProperty?.itemExtras,
        [`extraGroup_${step - (relatedPreferenceGroupsLength + 1)}`]:
          newAddedExtras,
      },
      finalItemExtras: RemoveDuplicateObjectsInArray([
        ...itemProperty?.finalItemExtras,
        ...newAddedExtras,
      ]),
      itemPrice:
        itemProperty?.itemPrice -
        itemProperty?.quantity *
        (extraItemPriceOption?.price -
          (extraItemPriceOption?.price *
            extraItemPriceOption?.discountPercent) /
          100),
    });
  };

  return (
    <ItemExtrasWrapper>
      <BodyWrapper>
        <ItemExtrasGroupDescription>
          {itemExtras?.maxQty === itemExtras?.minQty ? (
            <>
              <div className="number">{itemExtras?.maxQty}</div>
              آیتم را انتخاب کنید :
            </>
          ) : itemExtras?.minQty === 0 && itemExtras?.maxQty > 0 ? (
            <>
              می توانید حداکثر
              <div className="number">{itemExtras?.maxQty}</div>
              آیتم را انتخاب کنید :
            </>
          ) : (
            <>
              می توانید حداقل
              <div className="number">{itemExtras?.minQty}</div>و حداکثر
              <div className="number">{itemExtras?.maxQty}</div>
              آیتم را انتخاب کنید :
            </>
          )}
        </ItemExtrasGroupDescription>
        {selectedItemExtras?.map((extraGroup, index) => {
          return (
            <ExtraGroupContainer key={extraGroup._id} id={extraGroup._id}>
              <ExtraGroupName>{extraGroup.name}</ExtraGroupName>
              <ExtraGroupPic src={extraGroup?.imageUrlLocation} />
              <ExtraGroupDetails>
                {extraGroup.extraItemPrices.map((extraItemPriceOption) => (
                  extraItemPriceOption.status &&
                  <ItemSize
                    key={extraItemPriceOption?._id}
                    value={extraItemPriceOption?.price}
                  // onClick={(e) =>
                  //   addExtra(e, extraGroup, extraItemPriceOption)
                  // }
                  >
                    <div>
                      <div className="sizeText">
                        {extraItemPriceOption?.title}
                      </div>
                      {extraItemPriceOption?.discountPercent === 0 || extraItemPriceOption?.discountPercent === null ? (
                        <div className="costWithoutDiscount">
                          <div className="costText">
                            {ConvertToPersianDigitWithComma(
                              extraItemPriceOption?.price
                            )}
                            <span className="costCurrency"> تومان</span>
                          </div>
                        </div>
                      ) : (
                        <div className="costWithDiscountWrapper">
                          <div className="discountPercent">
                            {ConvertToPersianDigit(
                              extraItemPriceOption?.discountPercent
                            )}
                            %
                          </div>
                          <div className="costWithDiscount">
                            <div className="priceWithoutDiscount">
                              {ConvertToPersianDigitWithComma(
                                extraItemPriceOption?.price
                              )}
                            </div>
                            <div className="priceWithDiscount">
                              {ConvertToPersianDigitWithComma(
                                extraItemPriceOption?.price -
                                (extraItemPriceOption?.price *
                                  extraItemPriceOption?.discountPercent) /
                                100
                              )}
                              <span className="costCurrency"> تومان</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    {extraItemPriceOption?.quantity > 0 ? (
                      <CheckoutItemCount>
                        <PlusCountItem
                          onClick={(e) =>
                            addUpExtra(e, extraGroup, extraItemPriceOption)
                          }
                        >
                          <AddIcon className={"icon"} fill={theme.color_text_primary} />
                        
                        </PlusCountItem>
                        <div className="countNumber">
                          {ConvertToPersianDigit(
                            extraItemPriceOption?.quantity
                          )}
                        </div>
                        {extraItemPriceOption?.quantity === 1 ? (
                          <MinusCountItem
                            onClick={(e) =>
                              deletingExtra(e, extraGroup, extraItemPriceOption)
                            }
                          >
                            <TrashBasket fill={theme.color_text_primary_l5} />
                          </MinusCountItem>
                        ) : (
                          <MinusCountItem
                            onClick={(e) =>
                              minusExtra(e, extraGroup, extraItemPriceOption)
                            }
                          >
                            <MinusIcon fill={theme.color_text_primary_l5} />
                          </MinusCountItem>
                        )}
                      </CheckoutItemCount>
                    ) : (
                      <AddExtra
                        onClick={(e) =>
                          addExtra(e, extraGroup, extraItemPriceOption)
                        }
                      >
                        <span>افزودن</span>
                      </AddExtra>
                    )}
                  </ItemSize>
                ))}
              </ExtraGroupDetails>
            </ExtraGroupContainer>
          );
        })}
      </BodyWrapper>
    </ItemExtrasWrapper>
  );
};

ItemExtrasGroups.propTypes = {};
const mapStateToProps = (state) => ({
  theme:state.theme.theme

});
export default connect(mapStateToProps, {})(ItemExtrasGroups);
