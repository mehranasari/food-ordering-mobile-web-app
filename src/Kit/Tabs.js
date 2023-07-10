import * as React from "react";
import { Tabs as MuiTabs, Tab } from "@mui/material";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

const CustomTabs = styled(MuiTabs)`
  border-bottom: ${(props) => "1px solid " + props.theme.color_border_primary};
  .MuiTabs-indicator {
    background-color: ${(props) => props.theme.primary} !important;
  }
  .MuiTabs-scrollButtonsHideMobile{
    display:none;
  }
  *::-webkit-scrollbar {
    width: 0rem !important;
    height: 0rem !important;
    cursor: pointer;
  
  }
`;
export const CustomTab = styled(Tab)`
&.MuiTab-root{
    color: ${(props) => props.theme.color_text_subtitle};
    margin-right:0;
}
  &.MuiTab-root.Mui-selected {
    color: ${(props) => props.theme.color_text_primary} !important;
  }
`;

const Tabs = (props) => {
  const {
    value,
    onChange,
    tabs,
    labelKey = "name",
    valueKey = "value",
    theme,
    ...rest
  } = props;

  return (
    <CustomTabs value={value} onChange={onChange} {...rest}>
      {tabs?.map((tab) => (
        <CustomTab
          value={tab[valueKey]}
          label={tab[labelKey]}
          key={tab[valueKey]}
        />
      ))}
    </CustomTabs>
  );
};

Tabs.propTypes = {
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps, {})(Tabs);
