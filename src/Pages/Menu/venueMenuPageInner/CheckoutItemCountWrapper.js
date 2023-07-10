import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import ConvertToPersianDigit from '../../../Utils/method/ConvertToPersianDigit';

import { addItemToCart, plusCountItem, minusCountItem, deletingItemFromCart } from "../../../Redux/action/cart";

import AddIcon from "../../../Assets/icons/AddIcon.jsx";
import MinusIcon from "../../../Assets/icons/MinusIcon.jsx";
import TrashBasket from "../../../Assets/icons/TrashBasket.jsx";

import {
  AddItemToCart,
  CheckoutItemCount,
  PlusCountItem,
  MinusCountItem
} from "../styles.jsx";


const CheckoutItemCountWrapper = ({ cart, item, priceIndex, priceOption, addItemToCart, plusCountItem, minusCountItem, deletingItemFromCart, orderType }) => {

  const thisCartItem = cart.currentVenueCart && cart.currentVenueCart.items.find(cartItem => cartItem.itemId === item._id && cartItem.priceId === priceOption._id);

  //Adding Item to Cart
  const addingItemToCart = (e, priceOption, priceIndex, item) => {
    e.stopPropagation();
    const selectedItemForCart = {
      itemId: item._id,
      name: item.name,
      imageUrlLocation: item.imageUrlLocation,
      parentVenue: item.parentVenue,
      // parentCategory: item.parentCategory,
      // parentSubcategory: item.parentSubcategory,
      // status: item.status,
      tableService: item.tableService,
      collectionService: item.collectionService,
      priceIndex: priceIndex,
      priceId: priceOption._id,
      discountPercent: parseInt(priceOption.discountPercent),
      discountPrice: parseInt(priceOption.discountPercent / 100 * priceOption.price),
      priceAmountWithoutDiscount: parseInt(priceOption.price),
      priceAmount: parseInt(priceOption.price - priceOption.discountPercent / 100 * priceOption.price),
      priceTitle: priceOption.title,
      quantity: 1,
      orderType: orderType
    }
    addItemToCart(selectedItemForCart);
  }

  //Add up count Item in cart
  const addUpItemInCart = (e, item) => {
    e.stopPropagation();
    plusCountItem(item);
  }

  //Minus count Item in cart
  const minusItemInCart = (e, item) => {
    e.stopPropagation();
    minusCountItem(item);
  }

  //Deleting count Item in cart
  const deletingItemInCart = (e, item) => {
    e.stopPropagation();
    deletingItemFromCart(item);
  }

  return (
    <>
      {thisCartItem && true ?
        (<CheckoutItemCount>
          <PlusCountItem onClick={e => addUpItemInCart(e, thisCartItem)}>
            <AddIcon fill="#212121" />
          </PlusCountItem>
          <div className="countNumber">{ConvertToPersianDigit(thisCartItem.quantity)}</div>
          {thisCartItem.quantity === 1 ?
            (
              <MinusCountItem onClick={e => deletingItemInCart(e, thisCartItem)}>
                <TrashBasket fill="#9e9e9e" />
              </MinusCountItem>
            ) :
            (
              <MinusCountItem onClick={e => minusItemInCart(e, thisCartItem)}>
                <MinusIcon fill="#9e9e9e" />
              </MinusCountItem>
            )}
        </CheckoutItemCount>) :
        (<AddItemToCart onClick={e => addingItemToCart(e, priceOption, priceIndex, item)}>افزودن</AddItemToCart>)
      }
    </>
  )
}

CheckoutItemCountWrapper.propTypes = {
  addItemToCart: PropTypes.func.isRequired,
  cart: PropTypes.object.isRequired,
  plusCountItem: PropTypes.func.isRequired,
  minusCountItem: PropTypes.func.isRequired,
  deletingItemFromCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { addItemToCart, plusCountItem, minusCountItem, deletingItemFromCart })(CheckoutItemCountWrapper);