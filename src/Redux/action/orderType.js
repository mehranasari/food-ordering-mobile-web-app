import { types } from '../types';

// Add itmes to cart by customers
export const setOrderType = (orderType, history) => async (dispatch, getState) => {
  try {
    if (orderType === 'TABLE_SERVICE' || orderType === 'COLLECTION_SERVICE'|| orderType === 'DELIVERY_SERVICE') {
      dispatch({
        type: types.SET_ORDERTYPE,
        payload: orderType
      });
      localStorage.setItem('orderType', JSON.stringify(getState().orderType.orderType));
      history.push(`/menu/`);
    }

  } catch (err) {
    dispatch({
      type: types.ORDERTYPE_ERROR,
      payload: { msg: err.response?.data.msg, status: err.response.status }
    });
  }
};