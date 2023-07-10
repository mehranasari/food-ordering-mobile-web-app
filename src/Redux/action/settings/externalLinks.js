import axios from 'axios';

import {
types
} from '../../types';


// Get External Links By venue id
export const getExternalLinksByVenueId = venueId => async dispatch => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/externalLink/consumerApp/getExternalLinksByVenueId/${venueId}`);
    dispatch({
      type: types.GET_EXTERNAL_LINKS,
      payload: res?.data
    });
  } catch (err) {
    dispatch({
      type: types.EXTERNAL_LINKS_ERROR,
      payload: { msg: err.response?.data.msg, status: err.response.status }
    });
  }
};

