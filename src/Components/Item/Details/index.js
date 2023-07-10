import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConvertToPersianDigitWithComma from "../../../Utils/method/ConvertToPersianDigitWithComma";
import ConvertToPersianDigit from "../../../Utils/method/ConvertToPersianDigitWithComma";
import CheckIcon from "../../../Assets/icons/CheckIcon.jsx";
import ImageSlider from "../../../Shared/ImageSlider";

import {
  ItemDetailsWrapper,
  BodyWrapper,
  ItemPicture,
  ItemDescription,
  ItemSize,
} from "./styles.jsx";

const ItemDetails = ({
  selectedItem,
  itemProperty,
  setItemProperty,
  theme,
  setShowImageModal,
  history,
}) => {
  const [selectedItemSize, setSelectedItemSize] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      if (selectedItem?.prices?.length > 0) {
        onSelectItemSize(selectedItem?.prices[0]);
      }
    }, 0);
  }, []);

  const handlePriceWithDiscount = (price, discountPercent) => {
    return price - (price * discountPercent) / 100;
  };

  const onSelectItemSize = (priceOption) => {
    setItemProperty({
      ...itemProperty,
      itemSize: priceOption,
      itemPrice:
        itemProperty?.itemPrice -
        handlePriceWithDiscount(
          itemProperty?.itemSize?.price || 0,
          itemProperty?.itemSize?.discountPercent || 0
        ) +
        handlePriceWithDiscount(
          priceOption?.price,
          priceOption?.discountPercent
        ),
    });
    setSelectedItemSize(priceOption);
  };
  return (
    <ItemDetailsWrapper>
      {/* {selectedItem?.imageUrlLocation &&
        <ItemPicture src={selectedItem.imageUrlLocation} onClick={() => setShowImageModal(true)}>
          <div className="itemImage" />
        </ItemPicture>} */}
      {selectedItem?.imageUrlLocation && (
        <ImageSlider
          history={history}
          images={[{ src: selectedItem?.imageUrlLocation }]}
        />
      )}
      <BodyWrapper>
        <ItemDescription
          hasImage={selectedItem?.imageUrlLocation ? true : false}
        >
          <div className="name">{selectedItem && selectedItem.name}</div>
          <div className="description">
            {selectedItem && selectedItem.description}
          </div>
        </ItemDescription>
        {selectedItem?.prices?.map(
          (priceOption, priceIndex) =>
            priceOption?.status && (
              <ItemSize
                key={priceIndex}
                value={priceOption?.price}
                onClick={() => {
                  onSelectItemSize(priceOption);
                }}
                selected={
                  selectedItemSize?._id === priceOption?._id ? true : false
                }
              >
                <div className="sizeText">{priceOption?.title}</div>
                {priceOption?.discountPercent === 0 ||
                priceOption?.discountPercent === null ? (
                  <div className="costWithoutDiscount">
                    <div className="costText">
                      {ConvertToPersianDigitWithComma(priceOption?.price)}
                      <span className="costCurrency"> تومان</span>
                    </div>
                  </div>
                ) : (
                  <div className="costWithDiscountWrapper">
                    <div className="discountPercent">
                      {ConvertToPersianDigit(priceOption?.discountPercent)}%
                    </div>
                    <div className="costWithDiscount">
                      <div className="priceWithoutDiscount">
                        {ConvertToPersianDigitWithComma(priceOption?.price)}
                      </div>
                      <div className="priceWithDiscount">
                        {ConvertToPersianDigitWithComma(
                          handlePriceWithDiscount(
                            priceOption?.price,
                            priceOption?.discountPercent
                          )
                        )}
                        <span className="costCurrency"> تومان</span>
                      </div>
                    </div>
                  </div>
                )}
                {selectedItemSize?._id === priceOption?._id && (
                  <div className="checkButton">
                    <CheckIcon fill={theme.textColorOfPrimaryButtons} />
                  </div>
                )}
              </ItemSize>
            )
        )}
      </BodyWrapper>
    </ItemDetailsWrapper>
  );
};

ItemDetails.propTypes = {};
const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});
export default connect(mapStateToProps, {})(ItemDetails);
