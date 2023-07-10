import React from "react";
import styled from "styled-components";
import { Row } from "./Row";
import { Col } from "./Column";

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

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`;
export const FormGroup = styled(Col)`
  flex-direction: column;
  height: auto;
  width: 100%;
  border-radius: 10px;
  background-color: transparent;
  outline: none;
  position: relative;
  margin-bottom: 0.71rem;

  :focus {
    outline: none;
  }
`;

export const StyledTextArea = styled.textarea`
  flex-direction: column;
  height: auto;
  width: 100%;
  height: auto;
  border-radius: 10px;
  border: 1px solid
    ${(props) => (props.error !== undefined ? props.theme.danger : props.theme.color_border_primary)};
  background-color: ${props=>props.theme.color_text_primary};
  outline: none;
  position: relative;
  resize: none;
  padding: 10px;
  font-family: "IranSanse";
  font-size: 0.75rem;
  color: ${props=>props.theme.color_text_subtitle};
  margin: 8px 0px 8px 0px;

  :focus {
    outline: none;
  }
`;


export const FormInput = styled.input`
  height: 3.57rem;
  width: 100%;
  border-radius: 12px;
  border: 1px solid
    ${(props) => (props.error !== undefined ? props.theme.danger : props.theme.color_border_primary)};
  color: ${(props) => props.readOnly === true && "gray"};
  cursor: ${(props) => props.readOnly === true && "no-drop"};
  direction: rtl;
  font-size: 1rem;
  color: ${props=>props.theme.color_text_primary};
  background-color:${props=>props.theme.color_background_secondary};
  margin-bottom: 5px;
  padding: 0 25px;
  font-family: "IranSanse" !important;
  :focus {
    outline: none;
    background: ${props=>props.theme.color_background_primary};
    border: 2px solid ${props=>props.theme.primary};
    box-sizing: border-box;
    color: ${props=>props.theme.color_text_primary};
    font-size: 1.0625rem;
  }
  ::placeholder {
    direction: rtl;
    color: ${(props) => props.theme.color_text_subtitle};
    /* padding-right: 25px; */
    font-family: "IranSanse" !important;
    letter-spacing: 0;
    font-size: 1rem;
    padding:0 !important;
    margin:0 !important;
  }
`;

export const MobileNumberFormInput = styled.input`
  height: 4rem;
  width: 100%;
  border-radius: 12px;
  border: 1px solid
    ${(props) => (props.error !== undefined ? props.theme.danger : props.theme.color_border_primary)};
  color: ${(props) => props.readOnly === true && "gray"};
  cursor: ${(props) => props.readOnly === true && "no-drop"};
  direction: rtl;
  font-size: 1rem;
  color: ${props=>props.theme.color_text_subtitle};
  background-color: ${props=>props.theme.color_background_secondary};
  margin-bottom: 5px;
  padding: 0 25px;
  font-family: "IranSanse" !important;
  :focus {
    outline: none;
    background: ${props=>props.theme.color_background_primary};
    border: 2px solid ${props=>props.theme.primary};
    box-sizing: border-box;
    color: ${props=>props.theme.color_text_primary};
    font-size: 1.0625rem;
  }
  ::placeholder {
    direction: rtl;
    color: ${(props) => props.theme.color_text_primary};
    /* padding-right: 25px; */
    font-family: "IranSanse" !important;
    letter-spacing: 0;
    font-size: 1rem;
  }
`;


export const FormLabel = styled.label`
  height: 20px;
  background-color: ${props=>props.theme.color_background_primary};
  display: ${(props) => props.show !== true && "none"};
  position: absolute;
  top: -15px;
  right: 10px;
  font-size: 0.75rem;
  padding: 5px 10px 5px 10px;
  justify-content: flex-start;
`;

export const FormError = styled(Col)`
  color: red;
  font-size: 0.75rem;
  justify-content: flex-start;
  width: 100%;
  min-height: 0px;
  padding: 5px 0px 5px 0px;
  height: auto;
`;

export const FormInputDesc = styled(Col)`
  color: ${props=>props.theme.color_text_secondary};
  font-size: 0.75rem;
  line-height: 20px;
  width: 100%;
  display: block;
`;

export const FormIcon = styled(Row)`
  position: absolute;
  left: 10px;
  width: 75px;
  height: 35px;
`;

export const StyledInput = (props) => {
  const { lable, placeholder, focus } = props;
  return (
    <>
          {/* <FormInputGroup className="Form-Input-Group"> */}
      <FormLabel show={focus} className="Form-Label">
        {lable}
      </FormLabel>
      <FormInput {...props} placeholder={placeholder} className="Form-Input" />
      {/* </FormInputGroup> */}

    </>
  );
};
