import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import throttle from "lodash/throttle";
import { withStyles } from "@material-ui/core/styles";
import { Tabs as MuiTabs, Tab } from "@mui/material";
import styled from "styled-components";

//Subcategory Tabs Style

export const SubcategoryTabs = styled(MuiTabs)`
  root: {
  }
  .MuiTabs-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    background-color: ${(props) =>
      props.theme.color_background_selected_subcategory};
    border-radius: 50px;
  }
  .MuiTabs-flexContainer {
    padding: 0px 0.5rem;
  }
  .MuiTabs-scrollButtonsHideMobile {
    display: none;
  }
`;

export const SubcategoryTab = styled(Tab)`
  &.MuiTab-root {
    text-transform: none;
    min-width: 60;
    padding: 0px 20px;
    font-family: IranSanse;
    font-size: 1rem;
    margin-right:0;
    color: ${(props) => props.theme.color_text_primary_l5};
  };
    z-index: 100;
    opacity: 1;
    padding-top: 5px;
  }
  &.MuiTab-root.Mui-selected {
    color: ${(props) => props.theme.color_text_selected_subcategory};
    font-weight: 600;
    font-size: 1rem;
    padding-top: 5px;
 
  }
`;

const noop = () => {};

function useThrottledOnScroll(callback, delay) {
  const scrollRefElement = document.getElementById("ContentsWrapper");
  const throttledCallback = useMemo(
    () => (callback ? throttle(callback, delay) : noop),
    [callback, delay]
  );

  useEffect(() => {
    if (throttledCallback === noop) return undefined;

    if (window.innerWidth < 800)
      window.addEventListener("scroll", throttledCallback);
    else scrollRefElement.addEventListener("scroll", throttledCallback);
    return () => {
      window.removeEventListener("scroll", throttledCallback);
      scrollRefElement.removeEventListener("scroll", throttledCallback);
      throttledCallback.cancel();
    };
  }, [throttledCallback]);
}

const SubcategoryTabsNavbar = ({ subcategories, theme }) => {
  const subcategoryTabHeight = 200;
  const [subcategoryActiveState, setSubcategoryActiveState] = useState(null);

  const subcategoriesItemsRef = useRef([]);
  const scrollRefElement = document.getElementById("ContentsWrapper");

  useEffect(() => {
    subcategoriesItemsRef.current = subcategories;
    findSubcategoryActiveIndex();
  }, [subcategories]);

  const subcategoryClickedRef = useRef(false);
  const unsetSubcategoryClickedRef = useRef(null);
  const findSubcategoryActiveIndex = useCallback(() => {
    // set default if subcategoryActiveState is null
    if (subcategoryActiveState === null)
      setSubcategoryActiveState(subcategories[0].subcategoryId);

    // Don't set the subcategoryActive index based on scroll if a link was just clicked
    if (subcategoryClickedRef.current) return;
    let subcategoryActive;
    for (let i = subcategoriesItemsRef.current.length - 1; i >= 0; i -= 1) {
      // No subcategoryId if we're near the top of the page
      if (document.documentElement.scrollTop < 0) {
        subcategoryActive = { subcategoryId: null };
        break;
      }

      const subcategoryItem = subcategoriesItemsRef.current[i];
      if (window.innerWidth < 800) {
        if (
          subcategoryItem.node &&
          // subcategoryItem.node.offsetTop < document.documentElement.scrollTop + document.documentElement.clientHeight / 8 + subcategoryTabHeight ***************************
          subcategoryItem.node.offsetTop <
            window.pageYOffset + subcategoryTabHeight
        ) {
          subcategoryActive = subcategoryItem;
          break;
        }
      } else if (scrollRefElement) {
        if (
          subcategoryItem.node &&
          // subcategoryItem.node.offsetTop < document.documentElement.scrollTop + document.documentElement.clientHeight / 8 + subcategoryTabHeight ***************************
          subcategoryItem.node.offsetTop <
            scrollRefElement.scrollTop + subcategoryTabHeight
        ) {
          subcategoryActive = subcategoryItem;
          break;
        }
      }
    }

    if (
      subcategoryActive &&
      subcategoryActiveState !== subcategoryActive?.subcategoryId
    ) {
      setSubcategoryActiveState(subcategoryActive?.subcategoryId);
    }
  }, [subcategoryActiveState, subcategories]);

  // Corresponds to 10 frames at 60 Hz
  useThrottledOnScroll(
    subcategories.length > 0 ? findSubcategoryActiveIndex : null,
    166
  );

  const subcategoryHandleClick = (subcategoryId) => () => {
    // Used to disable findSubcategoryActiveIndex if the page scrolls due to a click
    subcategoryClickedRef.current = true;
    unsetSubcategoryClickedRef.current = setTimeout(() => {
      subcategoryClickedRef.current = false;
    }, 1000);

    if (subcategoryActiveState !== subcategoryId) {
      setSubcategoryActiveState(subcategoryId);

      if (window && window.innerWidth < 800)
        window.scrollTo({
          top:
            document.getElementById(subcategoryId).getBoundingClientRect().top +
            window.pageYOffset -
            120,
          behavior: "smooth",
        });
      else if (scrollRefElement) {
        scrollRefElement.scrollTo({
          top:
            document.getElementById(subcategoryId).getBoundingClientRect().top +
            scrollRefElement.scrollTop -
            200,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(
    () => () => {
      clearTimeout(unsetSubcategoryClickedRef.current);
    },
    []
  );
  return (
    <SubcategoryTabs
      variant="scrollable"
      value={
        subcategoryActiveState
          ? subcategoryActiveState
          : subcategories[0]?.subcategoryId
      }
    >
      {subcategories.map((subcategory) => (
        <SubcategoryTab
          key={subcategory?.subcategoryId}
          label={subcategory?.name}
          onClick={subcategoryHandleClick(subcategory?.subcategoryId)}
          value={subcategory?.subcategoryId}
        />
      ))}
    </SubcategoryTabs>
  );
};

export default SubcategoryTabsNavbar;
