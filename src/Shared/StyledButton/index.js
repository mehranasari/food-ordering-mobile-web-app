import React from "react";
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
//import icons
import NextStepIcon from "../../Assets/icons/NextStepIcon.jsx";


export const MaterialButton = styled(Button)`
  width: 100%;
  display: flex;
  background-color: ${(props) => props.disabled ? props.theme.color_background_disable : props.theme.primary} !important;
  color: ${(props) => props.disabled ? props.theme.color_text_primary_l5 : props.theme.textColorOfPrimaryButtons}!important;
  font-weight: ${(props) => props.disabled ? 200 : 600};
  border-radius: 10px;
  padding: 0.85rem 0;

  :focus {
    outline: none;
  }
`;

export const NextStepIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

export const Text = styled.div`
  font-family: 'IranSanse';
  font-size: 1.2rem;
`;


const StyledButton = ({ nextStepIcon, disabled, children, submitForm ,theme}) => {
  return (
    <MaterialButton disabled={disabled} onClick={() => submitForm()} >
      {nextStepIcon && !disabled && <NextStepIconWrapper><NextStepIcon stroke={theme.textColorOfPrimaryButtons}/></NextStepIconWrapper>}
      <Text>{children}</Text>
    </MaterialButton>
  );
};

StyledButton.propTypes = {
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  theme:state.theme.theme,
});

export default connect(mapStateToProps, {})(StyledButton);
