import {
types
} from '../types';


// Set item to redux
export const setSelectedItem = (item, pageYOffset, history) => async dispatch => {
  try {

    dispatch({
      type: types.SET_ITEM,
      payload: {
        item,
        pageYOffset
      }
    });

    history.push(`/menu/item/${item._id}?0`);

  } catch (err) {
    dispatch({
      type: types.ITEM_ERROR,
      payload: { msg: err.response?.data.msg, status: err.response.status }
    });
  }
};


// Set pageYOffset
export const setPageYOffset = (pageYOffset) => async dispatch => {
  try {

    dispatch({
      type: types.SET_PAGE_Y_OFFSET,
      payload: {
        pageYOffset
      }
    });

  } catch (err) {
    dispatch({
      type: types.ITEM_ERROR,
      payload: { msg: err.response?.data.msg, status: err.response.status }
    });
  }

};

export const clearItem=()=> dispatch =>{
dispatch({
  type:types.CLEAR_ITEM,
})
}