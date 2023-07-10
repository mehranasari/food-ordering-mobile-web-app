import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";
//import actions
import { clearError } from "../../Redux/action/ordersHistory"
//import components
import PageLayout from "../../Shared/PageLayout";
import BottomBar from "../../Shared/BottomBar";
import Header from "../../Shared/Header"
import StaticAlert from '../../Shared/StaticAlert';
import { NameSpace } from '../../Routes/NameSpace';

//import icons
import ErrorBoxIcon from "../../Assets/icons/ErrorBoxIcon.jsx"
import ErrorIcon from "../../Assets/icons/ErrorIcon.jsx"
//import styles
import {
  UnsuccessfulOrderInner,
  BackHomeButton,

} from "./styles.jsx"


const UnsuccessfulOrder = ({ errorMsg, clearError, theme }) => {
  const history = useHistory()
  const handleBackHome = () => {
    history.push({ pathname: NameSpace.url });
  }
  useEffect(() => {
    if (!!!errorMsg) history.push({ pathname: NameSpace.url });
    return (() => {
      clearError()
    })
  }, [])

  return (
    <>
      {errorMsg &&
        <PageLayout>
          <Header
            fill={theme.color_text_primary}
            previousPage={NameSpace.url}
            menu
            venueLogo
            iconBackgroundColor={theme.color_background_primary}
            disableBoxShadow={true}

          />
          <UnsuccessfulOrderInner>
            <div className="icon">
              <ErrorBoxIcon />
            </div>
            <div className="message">
              متأسفیم :(
            </div>
            <div>
              سفارش شما به دلیل زیر ثبت نشد!
            </div>
            <div className="staticAlarm">
              <StaticAlert text={errorMsg} icon={<ErrorIcon />} hasBgColor={true} color={"red2"} />
            </div>
          </UnsuccessfulOrderInner>
          <BottomBar>
            <BackHomeButton onClick={handleBackHome}>
              بازگشت به صفحه اصلی
            </BackHomeButton>
          </BottomBar>
        </PageLayout>}
    </>

  )
}
UnsuccessfulOrder.propTypes = {
  clearError: PropTypes.func.isRequired,
  errorMsg: PropTypes.string.isRequired,

};
const mapStateToProps = (state) => ({
  errorMsg: state?.ordersHistory?.error.msg,
  theme: state.theme.theme

})
export default connect(mapStateToProps, { clearError })(UnsuccessfulOrder);

