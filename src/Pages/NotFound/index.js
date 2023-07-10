import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ConvertToPersianDigit from "../../Utils/method/ConvertToPersianDigit";
import { NameSpace } from "../../Routes/NameSpace";
//import images
import Image404 from "../../Assets/Images/404.png";
//import components
import Header from "../../Shared/Header";
import { Col } from "../../Kit/Column";
import MaterialButton from "../../Shared/StyledButton";
import PageLayout from "../../Shared/PageLayout";
import ContentLoading from "./ContentLoader"
//icon
import DefaultLogo from "../../Assets/icons/DefaultLogo.jsx";
import PhoneIcon from "../../Assets/icons/PhoneIcon.jsx";
//styles
import {
  NotFoundPageWrapper,
  NotFoundImage,
  NotFoundPageContainer,
  NotFoundTitle,
  NotFoundDesc,
  NotFoundTextContainer,
  VenueInfo,
  VenueName,
  BottomContainer,
  ContactOption,
} from "./styles.jsx";

const NotFound = ({
  theme,
  venue: { venue },
  history,
}) => {

  return (
    <PageLayout>
      <NotFoundPageWrapper>
        <Header
          fill={theme?.color_text_primary}
          menu
          venueLogo={false}
          iconBackgroundColor={theme?.white}
          disableBoxShadow={true}
          position={"fixed"}
        />
        {venue && venue?.logo?.logoUrlLocation ? (
          <NotFoundPageContainer>
            <Col className="container">
              <VenueInfo>
                {venue?.logo?.logoUrlLocation ? (
                  <img
                    className="venueLogo"
                    src={
                      venue?.logo?.logoUrlLocation
                    }
                  />
                ) : (
                  <div className="venueLogo">
                    <DefaultLogo stroke={theme.color_icon_primary}/>
                  </div>
                )}
                <VenueName>{venue?.name}</VenueName>
              </VenueInfo>
              <NotFoundImage>
                <img src={Image404} />
              </NotFoundImage>
              <NotFoundTextContainer>
                <NotFoundTitle>
                  صفحه‌ای که دنبال آن بودید، یافت نشد :(
                </NotFoundTitle>
                <NotFoundDesc>
                  اگر فکر می کنید این مشکل از طرف {venue?.name} است،
                  <br />
                  <b>لطفاً با ما از طریق زیر تماس بگیرید:</b>
                </NotFoundDesc>
              </NotFoundTextContainer>
            </Col>
            <BottomContainer>
              {venue?.phoneNumber && (
                <ContactOption
                  href={`tel:${venue?.phoneNumber}`}
                  onclick="ga('send', 'event', {eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
                  rel="noopener noreferrer"
                >
                  <PhoneIcon fill={theme.primary} stroke={theme.color_icon_primary} />
                  <div className="contactOptionTitle">
                    {ConvertToPersianDigit(venue?.phoneNumber)}
                  </div>
                  <div className="blankSpace" />
                </ContactOption>
              )}
              <MaterialButton submitForm={() => history.push(NameSpace.url)}>
                هدایت به صفحه اصلی
              </MaterialButton>
            </BottomContainer>
          </NotFoundPageContainer>
        ) : (
          <NotFoundPageContainer><ContentLoading theme={theme}/></NotFoundPageContainer>
        )}

      </NotFoundPageWrapper>
    </PageLayout>
  );
};
NotFound.propTypes = {
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
  venue: state.venue,
});
export default connect(mapStateToProps, { })(
  withRouter(NotFound)
);
