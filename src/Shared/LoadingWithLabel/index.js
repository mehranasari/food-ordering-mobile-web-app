import React from "react";
import styled from "styled-components";

//import icons
import LoadingIcon from '../../Assets/icons/LoadingIcon.jsx';

const LoadingWithLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const LoadingText = styled.div`
  display: flex;
  color: ${(props) => props.theme.color_text_subtitle};
  font-size: 1rem;
  margin-right: 10px;
`;

const LoadingWithLabel = ({ text }) => {
  return (
    <LoadingWithLabelWrapper>
      <LoadingIcon />
      <LoadingText>{text}</LoadingText>
    </LoadingWithLabelWrapper>
  );
};

export default LoadingWithLabel;
