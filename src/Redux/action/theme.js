import { types } from '../types';

export const setTheme = (theme) => async (dispatch, getState) => {
  try {
   
      dispatch({
        type: types.SET_THEME,
        payload: theme
      });
   

  } catch (err) {
   
  }
};