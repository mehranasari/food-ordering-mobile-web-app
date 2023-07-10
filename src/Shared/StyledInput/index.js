import React from "react";
import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`;

export const FormGroup = styled.div`
  flex-direction: column;
  height: auto;
  width: 100%;
  border-radius: 1rem;
  background-color: transparent;
  outline: none;
  position: relative;
  margin-bottom: 1rem;

  :focus {
    outline: none;
  }
`;

export const StyledTextArea = styled.textarea`
  flex-direction: column;
  height: auto;
  width: 100%;
  border-radius: 1rem;
  background-color: ${props => props.theme.color_background_primary};
  outline: none;
  position: relative;
  resize: none;
  padding: 1rem;
  font-family: "IranSanse";
  font-size: 1rem;
  color: ${(props) => props.theme.color_text_primary_l5};
  margin: 8px 0px 8px 0px;


  :focus {
    outline: none;
    background-color: ${props => props.theme.color_background_primary};
    border: 2px solid ${props => props.theme.primary};
    /* box-shadow: 0px 0px 8px ${props => props.theme.primary}; */
    color: ${props => props.theme.color_text_primary};
    box-sizing: border-box;
    font-size: 1rem;
  }
`;

export const FormInput = styled.input`
  direction: rtl;
  height: 3.8rem;
  width: 100%;
  border-radius: 0.7rem;
  border: 1.5px solid ${props => props.theme.color_border_primary};
  color: ${props => props.theme.color_text_primary};
  background-color: ${props => props.theme.color_background_secondary};
  font-size: 1rem;
  margin-bottom: 0.5rem;
  padding: 0 2rem;
  font-family: "IranSanse" !important;

  :focus {
    outline: none;
    background-color: ${props => props.theme.color_background_primary};
    border: 2px solid ${props => props.theme.primary};
    /* box-shadow: 0px 0px 8px ${props => props.theme.primary}; */
    color: ${props => props.theme.color_text_primary};
    box-sizing: border-box;
    font-size: 1rem;
  }

  ::placeholder {
    direction: rtl;
    color: ${props => props.theme.color_text_placeholder};
    font-family: "IranSanse" !important;
    letter-spacing: 0;
    font-size: 1rem;
  }
`;

export const MobileNumberFormInput = styled.input`
  direction: rtl;
  height: 4rem;
  width: 100%;
  border-radius: 1rem;
  border: 1px solid ${props => props.theme.color_border_primary};
  font-size: 1rem;
  color: ${props => props.theme.color_text_primary};
  background-color: ${props => props.theme.color_background_secondary};
  margin-bottom: 0.5rem;
  padding: 0 2rem;

  :focus {
    outline: none;
    background-color: ${props => props.theme.color_background_primary};
    border: 2px solid ${props => props.theme.primary};
    /* box-shadow: 0px 0px 8px ${props => props.theme.primary}; */
    color: ${props => props.theme.color_text_primary};
    box-sizing: border-box;
    font-size: 1rem;
  }
`;


export const FormLabel = styled.label`
  height: 20px;
  background-color: ${props => props.theme.color_background_primary};
  display: ${(props) => props.show !== true && "none"};
  position: absolute;
  top: -15px;
  right: 10px;
  font-size: 0.75rem;
  padding: 5px 10px 5px 10px;
  justify-content: flex-start;
`;

export const FormInputDesc = styled.div`
  color: ${props => props.theme.color_text_secondary};
  font-size: 0.75rem;
  line-height: 1.2rem;
  width: 100%;
  display: block;
`;

export const FormIcon = styled.div`
  position: absolute;
  left: 10px;
  width: 75px;
  height: 35px;
`;

export const StyledInput = (props) => {
  const { lable, placeholder, focus } = props;
  return (
    <>
      <FormLabel show={focus} className="Form-Label">
        {lable}
      </FormLabel>
      <FormInput {...props} placeholder={placeholder} className="Form-Input" />
    </>
  );
};
