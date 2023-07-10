import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { NameSpace } from "../../Routes/NameSpace";
import { setOriginUrl } from "../../Redux/action/auth";
import { Col } from "../../Kit/Column";
import styled from "styled-components";
const ZibalContainer = styled(Col)`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  @media (min-width: 800px) {
    max-height: 1000px;
    height: calc(100vh - 5.7143rem);
    min-height: unset;
  }
`;
const Zibal = ({ onlinePaymentResponse, history, setOriginUrl }) => {
  useEffect(() => {
    onlinePaymentResponse &&
      localStorage.setItem(
        "onlinePaymentResponse",
        JSON.stringify(onlinePaymentResponse)
      );
  }, []);

  useEffect(() => {
    if (onlinePaymentResponse) {
      if (document?.forms["zibalForm"]) document?.forms["zibalForm"].submit();
    } else {
      const originUrl = JSON.parse(localStorage.getItem("onlinePaymentBackUrl"));
      if (originUrl === NameSpace.unsuccessfulPay) {
        window.location.pathname = originUrl;
        setOriginUrl(NameSpace.url);
      } else if (originUrl === NameSpace.increaseCredit) {
        history.goBack();
      }
    }
  }, [document?.forms["zibalForm"]]);

  return (
    <ZibalContainer>
      <div
        dangerouslySetInnerHTML={{
          __html: onlinePaymentResponse
            ? onlinePaymentResponse
            : JSON.parse(localStorage.getItem("onlinePaymentResponse")),
        }}
      ></div>
    </ZibalContainer>
  );
};

Zibal.propTypes = {};

const mapStateToProps = (state) => ({
  onlinePaymentResponse: state.onlinePortals?.onlinePaymentResponse,
});

export default connect(mapStateToProps, { setOriginUrl })(withRouter(Zibal));
