import { types } from "../types";
import { theme } from "../../Shared/Theme";
import { lightTheme } from "../../Shared/Theme/LightTheme";
import { darkTheme } from "../../Shared/Theme/DarkTheme";
const initialState = {
  theme: theme,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  const isDarkMode = false;
  switch (type) {
    case types.SET_THEME:
      return {
        ...state,
        theme: isDarkMode
          ? { ...state.theme, ...payload, ...darkTheme }
          : { ...state.theme, ...payload, ...lightTheme },
      };

    default:
      return state;
  }
}
