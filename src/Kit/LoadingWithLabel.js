import React from "react";
import LoadingIcon from '../Assets/icons/LoadingIcon.jsx';
import styled from "styled-components";

const LoadingWithLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1.071rem;
`;

const LoadingText = styled.div`
  display: flex;
  color: ${props=>props.theme.gray4};
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
