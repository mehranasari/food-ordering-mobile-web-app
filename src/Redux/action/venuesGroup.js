import axios from "axios";
import { types } from "../types";

// Get Venues Group By url
export const getVenuesGroup = (url) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/venuesGroup/consumerApp/getVenuesGroupByUrl/${url}`
    );
    dispatch({
      type: types.GET_VENUES_GROUP,
      payload: res?.data,
    });

    dispatch({ type: types.CLEAR_ITEM });
    dispatch({ type: types.CLEAR_VENUE });
    dispatch({ type: types.CLEAR_VENUE_EXTERNAL_LINKS });
  } catch (err) {
    dispatch({
      type: types.VENUES_GROUP_ERROR,
      payload: { msg: err.response?.data.msg, status: err.response.status },
    });
  }
};
