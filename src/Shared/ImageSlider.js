import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export const ImageSliderContainer = styled.div`
position: relative;
  .yarl__slide_image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: unset !important;
    max-height: unset !important;
  }
  .yarl__flex_center {
    background-color: white;
  }
  .yarl__slide{
    padding:0;
  }
`;

export const ImageSliderDotsContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
position: absolute;
bottom: 1.5rem;
direction: ltr;
`;

export const ImageSliderDot = styled.div`
width: 0.438rem;
height: 0.438rem;
background-color:${(props) => (props.isActive === "true" ? "#FFFFFF" : "rgba(255, 255, 255, 0.5)")};
border-radius: 50%;
margin: 0 0.5rem;
z-index: 1;
`;

const ImageSlider = ({ images, history }) => {
  const [showLightBox, setShowLightBox] = useState(false);
  const [imageIndexActive, setImageIndexActive] = useState(0);
  const [windowlocal] = useState(window.location.pathname);

  useEffect(() => {
    /**Handles the back navigation */
    showLightBox && history.push(windowlocal);
    showLightBox &&
      window.addEventListener("popstate", (event) => {
        setShowLightBox(false);
      });
    return () => {
      window.removeEventListener("popstate", () => null);
    };
  }, [showLightBox]);

  const slides = images?.map(({ src }) => ({
    src,
    key: src,
  }));

  return (
    <ImageSliderContainer>
      {/* <ImageSliderDotsContainer>
        {images?.map((image, index) => {
          return (
            <ImageSliderDot key={index} isActive={index === imageIndexActive ? "true" : "false"} />
          )
        })}
      </ImageSliderDotsContainer> */}
      <Lightbox
        slides={slides}
        inline={{ style: { width: "100%", height: "16rem" } }}
        plugins={[Inline]}
        on={{ click: () => setShowLightBox(true), view: (index) => { setImageIndexActive(index) } }}
        carousel={{ finite: true, }}
      />
      <Lightbox
        open={showLightBox}
        close={() => {
          setShowLightBox(false)
          history.goBack()
        }}
        slides={slides}
        plugins={[Zoom, Thumbnails]}
        carousel={{ finite: true, }}
      />
    </ImageSliderContainer>
  );
};

export default ImageSlider;
