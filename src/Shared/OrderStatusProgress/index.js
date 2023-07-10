import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import ConvertToPersianDigit from "../../Utils/method/ConvertToPersianDigit";

import { Col } from "../../Kit/Column";
import { Row } from "../../Kit/Row";
import Constants from '../../Utils/constants';

import ClockIcon from '../../Assets/icons/ClockIcon.jsx';

const BorderLinearProgressWrapper = styled.div`
width: 100%;
height:0.571rem;
background:${props => props.theme[props.color] + "10"};
border-radius: 1rem;
position:relative;
.borderLinearProgress{
    width:${props => props.value}%;
    height: 100%;
    background:${props => props.theme[props.color]};
    border-radius: 1rem;
}
.checkIcon{
    position: absolute;
    top:0.0826rem;
    left:0.5rem;
}




`
export const OrderStatusContainer = styled(Col)`
height: 4.571rem;
width:100%;
 padding: 0.714rem 1.429rem;
 justify-content:center;
 /* gap:1.2rem; */
  background:${props => props.theme[props.bgColor]};
  border-radius: 0.714rem;
  color:${props => props.theme[props.textColor]};
  .title{
    line-height:0;
    margin-top:0.357rem;
    font-weight:700;
  }
  .space-between{
    justify-content: space-between;
    margin-bottom: 1rem;
}
.timer {
    line-height:0;
    margin-top:0.357rem;
    font-weight:700;
    gap: 0.5em;
}
`
    ;


const OrderStatusProgress = ({ order }) => {
    const prepTime = (order?.prepTime * 60 * 1000)
    const isOnlinePay = order?.paymentMethod === Constants.paymentMethod.ZIBAL || order?.paymentMethod === Constants.paymentMethod.NEXT_PAY
    const isAwaitingPay = (isOnlinePay || order?.paymentTime === Constants.peymenetTime.BEFORE_ORDER_CONFIRMATION)
        && (order.paymentStatus === "AWAITING_PAY")
        ? true : false

    //handle  order status for collection service order 
    const isAccepted =
    (order?.orderType === Constants?.orderType?.COLLECTION_SERVICE ||
      order?.orderType === Constants?.orderType?.DELIVERY_SERVICE) &&
    (order?.orderDetails?.type === Constants.pickUpType.SPECIFIC_TIME_PICKUP ||
      order?.orderDetails?.type ===
        Constants.deliveryType.SPECIFIC_TIME_DELIVERY) &&
    order?.orderStatus === "PREPARING"
      ? new Date(order?.orderDetails?.time).getTime() - new Date().getTime() >
        prepTime
      : false;
        
    const orderDate = new Date(order?.orderConfirmationDate).getTime();


    const [time, setTime] = useState({ minutes: "00", seconds: "00" })

    useEffect(() => {
        const interval = (order?.prepTime && !isAccepted) ? setInterval(() => {
            const now = new Date().getTime();
            const distance = (prepTime) - (now - orderDate);
            
            // Time calculations for days, hours, minutes and seconds
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            if (minutes < 0 && seconds < 0) {
                clearInterval(interval)
            }
            else {
                if (seconds < 10) seconds = "0" + seconds
                if (minutes < 10) minutes = "0" + minutes
                setTime({ minutes, seconds })
            }
        }, 1000) : null;
        return () => clearInterval(interval);
    }, [order])

    return (
        <OrderStatusContainer
            bgColor={isAwaitingPay
                ? Constants?.orderStatus?.AWAITING_PAY?.bgColor
                : (isAccepted) ? Constants?.orderStatus?.ACCEPTED?.bgColor
                    : Constants?.orderStatus?.[order?.orderStatus]?.bgColor
            }
            textColor={isAwaitingPay
                ? Constants?.orderStatus?.AWAITING_PAY?.textColor
                : (isAccepted) ? Constants?.orderStatus?.ACCEPTED?.textColor
                    : Constants?.orderStatus?.[order?.orderStatus]?.textColor}>
            <Row className="space-between">
                <div className='title'>
                    {isAwaitingPay ?
                        Constants?.orderStatus?.AWAITING_PAY?.title
                        : (isAccepted) ? Constants?.orderStatus?.ACCEPTED?.title
                            :
                            Constants?.orderStatus[order?.orderStatus]?.title}
                </div>
                {order?.prepTime && order?.orderStatus === "PREPARING" && !isAccepted && <Row className='timer'>
                    <div className="time">{ConvertToPersianDigit(time.seconds)} : {ConvertToPersianDigit(time.minutes)}</div>
                    <ClockIcon />
                </Row>}

            </Row>

            <BorderLinearProgressWrapper
                value={isAwaitingPay
                    ? Constants?.orderStatus?.AWAITING_PAY?.progressPercent
                    : (isAccepted) ? Constants?.orderStatus?.ACCEPTED?.progressPercent
                        : Constants?.orderStatus?.[order?.orderStatus]?.progressPercent}
                color={isAwaitingPay
                    ? Constants?.orderStatus?.AWAITING_PAY?.textColor
                    : (isAccepted) ? Constants?.orderStatus?.ACCEPTED?.textColor
                        : Constants?.orderStatus?.[order?.orderStatus]?.textColor} >
                < div className={"borderLinearProgress"} />
                <div className={"checkIcon"}>
                    {Constants?.orderStatus?.[order?.orderStatus]?.icon}
                </div>
            </BorderLinearProgressWrapper>

        </OrderStatusContainer>
    )
}


export default OrderStatusProgress