import React from "react";
import styled from "styled-components";

import ContainEnglishChar from "../Utils/method/ContainEnglishChar";
import ConvertToPersianDigit from "../Utils/method/ConvertToPersianDigit";
import { Col } from "./Column";
import { Row } from "./Row";

const TextareaWrapper = styled(Col)`
  align-items: flex-start;
  flex-direction: ${(props) => props.labelPosition === "right" && "row"};
  justify-content: ${(props) =>
    props.labelPosition === "right" && "flex-start"};
  height: auto;
  width: 100%;
  min-height: auto;
  max-height: auto;
  border-radius: 0.625rem;
  background-color: transparent;
  outline: none;
  position: relative;
  flex-wrap: wrap;
  :focus {
    outline: none;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TextArea = styled.textarea`
  -webkit-appearance: none;
  flex-direction: column;
  width: ${(props) =>
    props.label
      ? props.labelPosition === "right"
        ? "calc(100% - 7.5rem)"
        : "100%"
      : "100%"};
  max-width: ${(props) =>
    props.label
      ? props.labelPosition === "right"
        ? "calc(100% - 7.5rem)"
        : "100% "
      : "100%"};
  min-height: ${(props) => `${props.height || 114}px`};
  height: ${(props) => `${props.height || 114}px`};
  max-height: ${(props) => `${props.height || 114}px`};
  border-radius: 0.5rem;
  color: ${(props) => props.theme.color_text_subtitle};
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.theme.color_background_secondary};
  position: relative;
  resize: none;
  font-family: ${(props) => props.theme.fontDefault};
  font-size: 1.1rem;
  box-shadow: none;
  -webkit-box-shadow: none;
  padding-right: 1.33rem;
  padding-left: 1.33rem;
  padding-top: 0.625rem;
  padding-bottom: 0;
  box-sizing: border-box;
  ${(props) =>
    props.error === true ? `border: 0.1rem solid #f96262` : `border: none`};
  :focus {
    outline: none;
    border: ${(props) => `0.1rem solid ${props.theme.primary}`};
    background-color: ${(props) => props.theme.color_background_primary};
    box-shadow: 0px 0px 8px ${(props) => props.theme.primary + "20"};
  }
  ::placeholder {
    direction: rtl;
    color: ${(props) => props.theme.text};
    padding-right: 0.625rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

const TextareaHeader = styled(Row)`
  width: 100%;
  background-color: transparent;
  position: relative;
  padding: 0.3125rem 0.625rem 0.3125rem 0.625rem;
  justify-content: space-between;
  box-sizing: border-box;

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const TextareaLabel = styled.label`
  height: 100%;
  background-color: transparent;
  position: relative;
  font-size: 1rem;
  justify-content: flex-start;
  color: ${(props) => props.theme.color_text_subtitle};

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const TextareaMaxCharacter = styled(Row)`
  height: 100%;
  background-color: transparent;
  position: relative;
  font-size: 0.75rem;
  justify-content: flex-start;
  color: ${(props) => props.theme.color_text_subtitle};

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const FormError = styled(Col)`
  color: ${(props) => props.theme.danger};
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 0.5rem;
  margin-top: 0.5rem;
  font-size: 0.75rem;
`;

const TextareaToolsContainer = styled(Row)`
  width: 100%;
  padding: 0.25rem;
  font-size: 0.9rem;
  .language {
    margin-right: 1rem;
  }
`;

export const Textarea = (props) => {
  const {
    label,
    require,
    width,
    error,
    height,
    showMaxChar,
    value,
    tools,
    dir,
    showErrorMessage,
  } = props;

  return (
    <TextareaWrapper width={width} className="textareaWrapper">
      <TextareaHeader>
        <TextareaLabel className="textareaLabel" show={label ? true : false}>
          {require ? label + " * " : label}
        </TextareaLabel>
        <TextareaMaxCharacter>{showMaxChar && 850}</TextareaMaxCharacter>
      </TextareaHeader>
      <TextArea
        {...props}
        className="textarea"
        hasError={error ? true : false}
        height={height}
        dir={dir ? dir : ContainEnglishChar(value) ? "ltr" : " rtl"}
        error={error !== undefined && error !== null ? true : false}
      />
      {showErrorMessage && error && (
        <FormError className="Form-Error">
          {showErrorMessage === false ? null : error}
        </FormError>
      )}
      {tools && (
        <TextareaToolsContainer>
          {tools?.maxChar && (
            <span className="charCount">
              {`تعداد کاراکتر های باقی مانده : ${ConvertToPersianDigit(
                tools?.maxChar - (value?.length % (tools?.maxChar + 1))
              )}
             (${ConvertToPersianDigit(
               Math?.floor(value?.length / (tools?.maxChar + 1)) + 1
             )})`}
            </span>
          )}
          {tools?.showLang && (
            <span className="language">{`زبان : ${
              ContainEnglishChar(value) ? " انگلیسی " : " فارسی "
            }`}</span>
          )}
        </TextareaToolsContainer>
      )}
    </TextareaWrapper>
  );
};
