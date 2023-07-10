import React from "react";
import ContentLoader from "react-content-loader";
import {
  OrderBasicInfoSection,
  OrderVenue,
  VenueDesc,
  OrderInfoContainer,
  OrderRefContainer,
  OrderRef,
  HistoryItemStatus,
  OrderPlaced,
  OrderTyped,
  VenueArea,
  PaymentsDetailsSection,
  PaymentDetailRow,
  TotalPrice,
  ItemSummarySection,
  ItemContainer,
  ItemInfoWrapper,
  BodyWrapper,
} from "../styles.jsx";
const BodyLoading = (props) => (
  <BodyWrapper>
    <OrderBasicInfoSection>
      <OrderVenue>
        <div className="venueLogo">
          <ContentLoader
            rtl
            speed={2}
            width={48}
            height={48}
            viewBox="0 0 48 48"
            backgroundColor={props.theme.color_background_secondary}
            foregroundColor={props.theme.color_background_primary}
            {...props}
          >
            <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
          </ContentLoader>
        </div>

        <VenueDesc>
          <ContentLoader
            rtl
            speed={2}
            width={"100%"}
            height={"48"}
            backgroundColor={props.theme.color_background_secondary}
            foregroundColor={props.theme.color_background_primary}
            {...props}
          >
            <rect x="0" y="0" rx="5" ry="5" width="48" height="20" />
            <rect x="0" y="25" rx="5" ry="5" width="100%" height="14" />
          </ContentLoader>
        </VenueDesc>
      </OrderVenue>
      <OrderInfoContainer>
        <OrderRefContainer>
          <OrderRef>
            <div className="orderInfoTitle">شماره سفارش</div>
            <ContentLoader
              rtl
              speed={2}
              width={93}
              height={30}
              backgroundColor={props.theme.color_background_secondary}
              foregroundColor={props.theme.color_background_primary}
              {...props}
            >
              <rect x="0" y="0" rx="5" ry="5" width="93" height="30" />
            </ContentLoader>
          </OrderRef>
          <HistoryItemStatus>
            <ContentLoader
              rtl
              speed={2}
              width={"100%"}
              height={64}
              backgroundColor={props.theme.color_background_secondary}
              foregroundColor={props.theme.color_background_primary}
              {...props}
            >
              <rect x="0" y="0" rx="10" ry="10" width="100%" height="64" />
            </ContentLoader>
          </HistoryItemStatus>
        </OrderRefContainer>

        <OrderPlaced>
          <div className="orderInfoTitle">زمان سفارش</div>
          <div className="orderPlaced">
            <ContentLoader
              rtl
              speed={2}
              width={174}
              height={25}
              backgroundColor={props.theme.color_background_secondary}
              foregroundColor={props.theme.color_background_primary}
              {...props}
            >
              <rect x="0" y="0" rx="5" ry="5" width="174" height="25" />
            </ContentLoader>
          </div>
        </OrderPlaced>
        <OrderTyped>
          <div className="orderInfoTitle">نوع سفارش</div>
          <div className="OrderTyped">
            <div className="OrderTypedText">
              <ContentLoader
                rtl
                speed={2}
                width={174}
                height={25}
                backgroundColor={props.theme.color_background_secondary}
                foregroundColor={props.theme.color_background_primary}
                {...props}
              >
                <rect x="0" y="0" rx="5" ry="5" width="174" height="25" />
              </ContentLoader>
            </div>
          </div>
        </OrderTyped>
        <VenueArea>
          <div className="orderInfoTitle">زمان و مکان دریافت سفارش</div>
          <ContentLoader
            rtl
            speed={2}
            width={174}
            height={25}
            backgroundColor={props.theme.color_background_secondary}
            foregroundColor={props.theme.color_background_primary}
            {...props}
          >
            <rect x="0" y="0" rx="5" ry="5" width="93" height="25" />
          </ContentLoader>
        </VenueArea>
      </OrderInfoContainer>
    </OrderBasicInfoSection>
    <PaymentsDetailsSection>
      <div className="paymentsDetailsSectionTitle">اطلاعات پرداخت</div>
      <PaymentDetailRow>
        <div className="paymentDetailRowTitle">قیمت آیتم‌ها</div>
        <div className="paymentDetailRowAmount">
          <ContentLoader
            rtl
            speed={2}
            width={60}
            height={23}
            backgroundColor={props.theme.color_background_secondary}
            foregroundColor={props.theme.color_background_primary}
            {...props}
          >
            <rect x="0" y="0" rx="5" ry="5" width="60" height="23" />
          </ContentLoader>
        </div>
      </PaymentDetailRow>
      <PaymentDetailRow>
        <div className="paymentDetailRowTitle">جمع کل تخفیف</div>
        <div className="paymentDetailRowAmount discount">
          <ContentLoader
            rtl
            speed={2}
            width={60}
            height={23}
            backgroundColor={props.theme.color_background_secondary}
            foregroundColor={props.theme.color_background_primary}
            {...props}
          >
            <rect x="0" y="0" rx="5" ry="5" width="60" height="23" />
          </ContentLoader>
        </div>
      </PaymentDetailRow>
      <PaymentDetailRow>
        <div className="paymentDetailRowTitle">انعام</div>
        <div className="paymentDetailRowAmount">
          <ContentLoader
            rtl
            speed={2}
            width={60}
            height={23}
            backgroundColor={props.theme.color_background_secondary}
            foregroundColor={props.theme.color_background_primary}
            {...props}
          >
            <rect x="0" y="0" rx="5" ry="5" width="60" height="23" />
          </ContentLoader>
        </div>
      </PaymentDetailRow>
      <PaymentDetailRow>
        <div className="paymentDetailRowTitle">نحوه پرداخت</div>
        <div className="paymentDetailRowAmount">
          <ContentLoader
            rtl
            speed={2}
            width={60}
            height={23}
            backgroundColor={props.theme.color_background_secondary}
            foregroundColor={props.theme.color_background_primary}
            {...props}
          >
            <rect x="0" y="0" rx="5" ry="5" width="60" height="23" />
          </ContentLoader>
        </div>
      </PaymentDetailRow>
      <TotalPrice>
        <div className="totalPriceTitle">مجموع قیمت</div>
        <div className="totalPriceAmount">
          <ContentLoader
            rtl
            speed={2}
            width={60}
            height={23}
            backgroundColor={props.theme.color_background_secondary}
            foregroundColor={props.theme.color_background_primary}
            {...props}
          >
            <rect x="0" y="0" rx="5" ry="5" width="60" height="23" />
          </ContentLoader>
        </div>
      </TotalPrice>
    </PaymentsDetailsSection>

    {/* Item Summary Section */}
    <ItemSummarySection>
      <div className="itemSummarySectionTitle">خلاصه آیتم‌ها</div>

      <ItemContainer>
        <ItemInfoWrapper>
          <ContentLoader
            rtl
            speed={2}
            width={"100%"}
            height={100}
            backgroundColor={props.theme.color_background_secondary}
            foregroundColor={props.theme.color_background_primary}
            {...props}
          >
            <rect x="0" y="0" rx="5" ry="5" width="100%" height="100" />
          </ContentLoader>
        </ItemInfoWrapper>
      </ItemContainer>
    </ItemSummarySection>
  </BodyWrapper>
);

export default BodyLoading;
