import axios from 'axios';

import {
types
} from '../../types';


export const getVenueSettingByVenueId = venueId => async dispatch => {
    dispatch({
        type: types.GET_VENUE_SETTINGS,
      });
  try {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/venueSetting/consumerApp/getVenueSettingByVenueId/${venueId}`);
    dispatch({
      type: types.GET_VENUE_SETTINGS_SUCCESS,
      payload: res?.data
    });
  } catch (err) {
    dispatch({
      type: types.GET_VENUE_SETTINGS_FAIL,
      payload: { msg: err.response?.data.msg, status: err.response.status }
    });
  }
};

