import * as Yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const VerifyValidationAddUpdateAddressSchema = Yup.object().shape({
  receiverPhoneNumber: Yup.string()
    .matches(phoneRegExp, "شماره موبایل وارد شده معتبر نمی‌باشد")
    .min(11, "شماره موبایل نمی تواند کمتر از ۱۱ کاراکتر باشد")
    .max(11, "شماره موبایل نمی تواند بیشتر از ۱۱ کاراکتر باشد"),
  address: Yup.string()
    .required("وارد کردن نشانی الزامی است")
    .min(20, "وارد کردن حداقل ۲۰ کاراکتر الزامی می‌باشد")
    .max(120, "حداکثر مقدار کاراکتر مجاز ۱۲۰ حرف می‌باشد"),
  title: Yup.string().max(20, "حداکثر کاراکتر مجاز ۲۰ حرف می‌باشد"),
  details: Yup.string()
    .required("وارد کردن جزییات نشانی الزامی است")
    .max(20, "حداکثر کاراکتر مجاز ۲۰ حرف می‌باشد"),
  phone: Yup.string(),
});
