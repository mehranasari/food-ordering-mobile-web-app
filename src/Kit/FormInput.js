import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { Row } from "./Row";
import { Col } from "./Column";
export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`;
export const FormInputGroup = styled(Col)`
  flex-direction: column;
  height: auto;
  width: 100%;
  border-radius: 0.5rem;
  background-color: transparent;
  position: relative;
  /* @media screen and (max-width: 768px) {
    width: 100%;
  } */
`;

export const CustomFormInput = styled.input`
  height: ${(props) => (props.height ? props.height : "3.429rem")};
  min-height: ${(props) => (props.height ? props.height : "3.429rem")};
  border-radius: 0.5rem;
  ${(props) =>
    props.error === true ? `border: 0.1rem solid #f96262` : `border: none`};
  color: ${(props) =>
    props.readOnly
      ? props.theme.color_text_secondary
      : props.theme.color_text_subtitle};
  cursor: ${(props) => props.readOnly === true && "no-drop"};
  font-size: 1rem;
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.readOnly
      ? props.theme.color_background_disable
      : props.theme.color_background_secondary};
  /* margin-bottom: 0.3125rem; */
  padding: ${(props) =>
    props?.padding
      ? props.padding
      : props.type === "number"
      ? "0 1.33rem 0 1.125rem"
      : props?.direction === "ltr"
      ? "0 0.5rem 0 1.333rem"
      : "0 1.333rem 0 0.5rem"};
  direction: ${(props) => (props.direction ? props.direction : "rtl")};
  font-family: "IranSanse" !important;
  :focus {
    border: 0.1rem solid;
    border-color: ${(props) => props.theme.primary};
    outline: none;
    background-color: ${(props) =>
      props.theme.color_background_primary}!important;
    box-shadow: 0px 0px 8px ${(props) => props.theme.primary + "20"};
  }
  ::placeholder {
    direction: ${(props) =>
      props.direction ? props.direction : "rtl"} !important;
    color: #aab6d3 !important;
    padding-right: 0.625rem;
    text-align: right;
    font-size: 1.067rem;
  }
  //hiddern arrows for input number
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
export const FormLabel = styled.label`
  background-color: transparent;
  position: relative;
  font-size: 1rem;
  padding: 0.3rem 0.625rem 0.3rem 0.625rem;
  color: ${(props) => props.theme.color_text_subtitle};

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  /* animation: fade 300ms ease 10ms 1 forwards ; */
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

export const FormInputDesc = styled(Col)`
  color: ${props=>props.theme.color_text_secondary};
  font-size: 0.75rem;
  line-height: 1.25rem;
  width: 100%;
  display: block;
`;

export const FormIcon = styled(Row)`
  position: absolute;
  top: ${(props) =>
    props.iconPosition === "right" ? "-0.4rem" : props.hasLabel ? "1.8rem" : 0};
  right: ${(props) => (props.iconPosition === "right" ? "1rem" : "unset")};
  left: ${(props) => (props.iconPosition === "right" ? "unset" : "1.25rem")};
  height: 3.5rem;
  min-height: 3.5rem;
`;

const FormInput = (props) => {
  const {
    label,
    icon,
    direction,
    backgroundColor,
    name,
    require,
    error,
    showErrorMessage,
    defaultValue,
    padding,
    iconPosition,
    value,
    height,
    forwardRef,
  } = props;

  const Icon = icon;
  const [state, setState] = useState({ type: props?.type });
  return (
    <>
      <FormInputGroup className="Form-Input-Group">
        {label && (
          <FormLabel className="Form-Label">
            {require ? label + " * " : label}
          </FormLabel>
        )}
        <CustomFormInput
          {...props}
          ref={forwardRef}
          name={name ? name : "Form-Input"}
          backgroundColor={backgroundColor}
          direction={direction}
          error={error !== undefined && error !== null ? true : false}
          className="Form-Input"
          defaultValue={defaultValue}
          padding={padding}
          type={state.type}
          value={value}
          height={height}
        ></CustomFormInput>

        {showErrorMessage && error && (
          <FormError className="Form-Error">
            {showErrorMessage === false ? null : error}
          </FormError>
        )}
        {icon && (
          <FormIcon
            className="Form-Icon"
            hasLabel={label}
            iconPosition={iconPosition}
          >
            <Icon />
          </FormIcon>
        )}
      </FormInputGroup>
    </>
  );
};

export default FormInput;
