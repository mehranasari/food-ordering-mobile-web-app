import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { NameSpace } from "../../Routes/NameSpace";
import { setOriginUrl } from "../../Redux/action/auth";
import { Col } from "../../Kit/Column";
import LoadingWithLabel from "../../Shared/LoadingWithLabel";
import PageLayout from "../../Shared/PageLayout";
import styled from "styled-components";
const NextPayContainer = styled(Col)`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  color: ${(props) => props.theme.color_text_primary};
  background: ${(props) => props.theme.color_background_primary};
  @media (min-width: 800px) {
    max-height: 1000px;
    width: 800px;
    height: calc(100vh - 5.7143rem);
    min-height: unset;
  }
`;
const NextPay = ({ onlinePaymentResponse, history, setOriginUrl }) => {
  useEffect(() => {
    onlinePaymentResponse &&
      localStorage.setItem(
        "onlinePaymentResponse",
        JSON.stringify(onlinePaymentResponse)
      );
  }, []);
  useEffect(() => {
    if (onlinePaymentResponse) {
      window.location = `https://nextpay.org/nx/gateway/payment/${onlinePaymentResponse}`;
    } else {
      const originUrl = JSON.parse(
        localStorage.getItem("onlinePaymentBackUrl")
      );
      if (originUrl === NameSpace.unsuccessfulPay) {
        window.location.pathname = originUrl;
        setOriginUrl(NameSpace.url);
      } else if (originUrl === NameSpace.increaseCredit) {
        history.goBack();
      }
    }
  }, [onlinePaymentResponse]);

  return (
    <PageLayout>
      <NextPayContainer>
        <LoadingWithLabel text={"لطفا منتظر بمانید"} />
      </NextPayContainer>
    </PageLayout>
  );
};

NextPay.propTypes = {};

const mapStateToProps = (state) => ({
  onlinePaymentResponse: state.onlinePortals?.onlinePaymentResponse,
});

export default connect(mapStateToProps, { setOriginUrl })(withRouter(NextPay));
