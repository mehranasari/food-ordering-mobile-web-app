import React, { useState } from 'react'
import { useHistory, withRouter } from 'react-router-dom';
import { NameSpace } from "../../Routes/NameSpace"
import { connect } from "react-redux";
import PropTypes from "prop-types";
//import components
import PageLayout from "../../Shared/PageLayout";
import BottomBar from "../../Shared/BottomBar";
import Header from "../../Shared/Header"
import PaymentOption from '../../Modals/paymentOption';

//import icons
import NetworkConnectionError from "../../Assets/icons/NetworkConnectionError.jsx"
//import styles
import {
  UnsuccessfulOnlinePortalInner,
  BackToPaymenOptionsButton,

} from "./styles.jsx"
import Constants from '../../Utils/constants';


const UnsuccessfulOnlinePortal = ({ theme, setting, orderType: { orderType }, }) => {
  const history = useHistory()
  const [showPaymentOptionPopUp, setShowPaymentOptionPopUp] = useState(false);
  const [newOrderObject, setNewOrderObject] = useState(null);

  //Create new Order Object
  const creatingNewOrderObject = () => {
    setShowPaymentOptionPopUp(true);
  }

  const handleBackHome = () => {
    history.push(NameSpace.url)
  }
 

  return (
    <>
      <PageLayout>
        <Header
          fill={theme.color_text_primary}
          menu
          venueLogo={true}
          iconBackgroundColor={theme.color_background_primary}
          disableBoxShadow={true}

        />
        <UnsuccessfulOnlinePortalInner>
          <NetworkConnectionError fill="#F65164" />
          <div className="message">
            متأسفیم :(
          </div>
          <div>
            در حال حاضر درگاه انتخابی قادر به ارائه سرویس پرداخت آنلاین نمی‌باشد.
          </div>
          <div className='text'>
            لطفا روش دیگری را برای پرداخت سفارش خود انتخاب کنید:
          </div>

        </UnsuccessfulOnlinePortalInner>
        <BottomBar>
          <BackToPaymenOptionsButton onClick={creatingNewOrderObject}>
            انتخاب روش پرداخت جدید
          </BackToPaymenOptionsButton>
        </BottomBar>
      </PageLayout>
      <PaymentOption
        show={showPaymentOptionPopUp}
        onHide={() => { setShowPaymentOptionPopUp(false); }}
        totalPrice={1000000}
        newOrderObject={newOrderObject}
        paymentMethods={orderType === Constants.orderType.TABLE_SERVICE ? setting?.venueOrderSettings?.orderSettings?.tableService?.paymentMethods : setting?.venueOrderSettings?.orderSettings?.collectionService?.paymentMethods} />
    </>
  )
}

UnsuccessfulOnlinePortal.propTypes = {
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
  setting: state.setting,
  orderType: state.orderType,
});

export default connect(mapStateToProps, {})(withRouter(UnsuccessfulOnlinePortal));


