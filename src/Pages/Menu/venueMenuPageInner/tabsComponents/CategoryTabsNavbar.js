import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import throttle from "lodash/throttle";
import Tabs from "../../../../Kit/Tabs";

import { CategoryTabsContainer } from "../../styles.jsx";

const noop = () => {};

function useThrottledOnScroll(callback, delay) {
  const scrollRefElement = document.getElementById("ContentsWrapper");
  const throttledCallback = useMemo(() => {
    return callback ? throttle(callback, delay) : noop;
  }, [callback, delay]);

  useEffect(() => {
    if (throttledCallback === noop) return undefined;
    if (window.innerWidth < 800) {
      window.addEventListener("scroll", throttledCallback);
    } else if (scrollRefElement) {
      scrollRefElement.addEventListener("scroll", throttledCallback);
    }
    return () => {
      window.removeEventListener("scroll", throttledCallback);
      scrollRefElement?.removeEventListener("scroll", throttledCallback);
      throttledCallback.cancel();
    };
  }, [throttledCallback]);
}

const CategoryTabsNavabar = ({ categories, headerTranslate }) => {
  const categoryTabHeight = 200;
  const [categoryActiveState, setCategoryActiveState] = useState(null);
  const scrollRefElement = document.getElementById("ContentsWrapper");
  const categoriesItemsRef = useRef([]);

  useEffect(() => {
    categoriesItemsRef.current = categories;
    // Corresponds to 10 frames at 60 Hz
    findCategoryActiveIndex();
  }, [categories]);

  const categoryClickedRef = useRef(false);
  const unsetCategoryClickedRef = useRef(null);
  const findCategoryActiveIndex = useCallback(() => {
    // set default if categoryActiveState is null
    if (categoryActiveState === null)
      setCategoryActiveState(categories[0]?.categoryId);

    // Don't set the categoryActive index based on scroll if a link was just clicked
    if (categoryClickedRef.current) return;

    let categoryActive;
    for (let i = categoriesItemsRef.current.length - 1; i >= 0; i -= 1) {
      // No categoryId if we're near the top of the page
      if (document.documentElement.scrollTop < 0) {
        categoryActive = { categoryId: null };
        break;
      }

      const categoryItem = categoriesItemsRef.current[i];
      if (window.innerWidth < 800) {
        if (
          categoryItem.node &&
          // categoryItem.node.offsetTop < document.documentElement.scrollTop + document.documentElement.clientHeight / 8 + categoryTabHeight *********************************
          categoryItem.node.offsetTop < window.pageYOffset + categoryTabHeight
        ) {
          categoryActive = categoryItem;
          break;
        }
      } else {
        if (
          categoryItem.node &&
          // categoryItem.node.offsetTop < document.documentElement.scrollTop + document.documentElement.clientHeight / 8 + categoryTabHeight *********************************
          categoryItem.node.offsetTop <
            scrollRefElement.scrollTop + categoryTabHeight
        ) {
          categoryActive = categoryItem;
          break;
        }
      }
    }

    if (categoryActive && categoryActiveState !== categoryActive.categoryId) {
      setCategoryActiveState(categoryActive.categoryId);
    }
  }, [categoryActiveState, categoriesItemsRef.current]);

  // // Corresponds to 10 frames at 60 Hz
  useThrottledOnScroll(
    categories?.length > 0 ? findCategoryActiveIndex : null,
    166
  );

  const categoryHandleClick = (e, categoryId) => {
    // Used to disable findCategoryActiveIndex if the page scrolls due to a click
    categoryClickedRef.current = true;
    unsetCategoryClickedRef.current = setTimeout(() => {
      categoryClickedRef.current = false;
    }, 1000);

    if (categoryActiveState !== categoryId) {
      setCategoryActiveState(categoryId);

      if (window && window.innerWidth < 800) {
        window.scrollTo({
          top:
            document.getElementById(categoryId).getBoundingClientRect().top +
            window.pageYOffset -
            120,
          behavior: "smooth",
        });
      } else if (scrollRefElement) {
        scrollRefElement.scrollTo({
          top:
            document.getElementById(categoryId).getBoundingClientRect().top +
            scrollRefElement.scrollTop -
            200,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(
    () => () => {
      clearTimeout(unsetCategoryClickedRef?.current);
    },
    []
  );

  return (
    <CategoryTabsContainer headerTranslate={headerTranslate}>
      <Tabs
        variant="scrollable"
        value={
          categoryActiveState ? categoryActiveState : categories[0]?.categoryId
        }
        tabs={categories}
        labelKey={"name"}
        valueKey={"categoryId"}
        onChange={(e, newVal) => categoryHandleClick(e, newVal)}
      />
    </CategoryTabsContainer>
  );
};

export default CategoryTabsNavabar;
