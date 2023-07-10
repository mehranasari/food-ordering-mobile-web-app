import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
//import components
import PageLayout from "../../Shared/PageLayout";
import Header from "../../Shared/Header";
import ContentLoading from "./ContentLoader";
//import styles
import { TermsOfUseWrapper, Body, Paragraph } from "./styles.jsx";
//icons
import TermsOfUsePageIcon from "../../Assets/icons/TermsOfUsePageIcon.jsx";
import ConvertToPersianDigit from "../../Utils/method/ConvertToPersianDigit";

const TermsOfUse = ({ theme, venue: { venue } }) => {
  const history = useHistory();
  return (
    <PageLayout>
      <TermsOfUseWrapper>
        <Header
          position={"fixed"}
          onPreviousPageClicked={() => history.goBack()}
          fill={theme.color_text_primary}
          // menu
          venueLogo={false}
          pageTitle={" شرایط استفاده "}
          pageIcon={
            <TermsOfUsePageIcon
              fill={theme.primary}
              stroke={theme.textColorOfPrimaryButtons}
            />
          }
          hasBorder
          backgroundColor={theme.color_background_primary}
        />
        {venue ? (
          <Body>
            <Paragraph>
              قوانین استفاده از خدمات ما <span>({venue?.name})</span>:
              <br />
              ۱. <span>{venue?.name}</span> تابع قوانین و مقررات جمهوری اسلامی
              ایران است و درج هرگونه موارد سیاسی، غیر اخلاقی و مغایر با هنجارهای
              اجتماعی باعث حذف حساب کاربر مورد نظر خواهد شد.
            </Paragraph>
            <Paragraph>
              ۲. استفاده از نام و نام‌خانوادگی حقیقی افراد به منظور ثبت‌نام در
              سایت الزامی است. در صورت مشاهده کلمات رکیک و الفاظ نامناسب، حساب
              كاربر حذف خواهد شد.
            </Paragraph>
            <Paragraph>
              ۳. هنگام سفارش، ثبت یک شماره معتبر و قابل دسترس برای کاربران
              الزامی است.
            </Paragraph>
            <Paragraph>
              ۴. مسئولیت وارد کردن اطلاعات اشتباه و غیر واقعی از قبیل نام و
              نام‌خانوادگی، آدرس و شماره تماس به عهده کاربر است.
            </Paragraph>
            <Paragraph>
              ۵. نشان تجاری <span>{venue?.name}</span>، در اداره کل ثبت شرکت‌ها
              و اداره کل مالکیت صنعتی به ثبت رسیده‌است و تحت پوشش قانون کپی‌رایت
              است.
            </Paragraph>
            <Paragraph>
              ۶. جهت استفاده از تخفیف برای سفارش از <span>{venue?.name}</span>،
              باید روش پرداخت آنلاین و یا اعتباری انتخاب شود و این خدمات در روش
              پرداخت نقدی/کارت بانکی اعمال نمی‌شود.
            </Paragraph>
            <Paragraph>
              ۷. توجه داشته باشید کلیه اصول و رویه‏‌های{" "}
              <span>{venue?.name}</span> منطبق با قوانین جمهوری اسلامی ایران،
              قانون تجارت الکترونیک و قانون حمایت از حقوق مصرف کننده است و
              متعاقباً کاربر نیز موظف به رعایت قوانین مرتبط با کاربر است. در
              صورتی که در قوانین مندرج، رویه‏‌ها و سرویس‏‌های سایت{" "}
              <span>{venue?.name}</span> تغییراتی در آینده ایجاد شود، در همین
              صفحه منتشر و به روز رسانی می شود و شما توافق می‏‌کنید که استفاده
              مستمر شما از سایت به معنی پذیرش هرگونه تغییر است.
            </Paragraph>
          </Body>
        ) : (
          <ContentLoading theme={theme} />
        )}
      </TermsOfUseWrapper>
    </PageLayout>
  );
};
TermsOfUse.propTypes = {
  theme: PropTypes.object.isRequired,
  venue: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
  venue: state.venue,
});

export default connect(mapStateToProps, {})(TermsOfUse);
