import React, { useEffect } from "react";
import NeshanMap from "react-neshan-map-leaflet";
import { Formik } from "formik";
import { Textarea } from "../../../Kit/TextArea";
import FormInput from "../../../Kit/FormInput";
import StyledButton from "../../../Shared/StyledButton";
import { VerifyValidationAddUpdateAddressSchema } from "./VerifyValidationAddUpdateAddressSchema";
//utils
import ConvertToPersianDigit from "../../../Utils/method/ConvertToPersianDigit";
import ConvertToEnglishDigit from "../../../Utils/method/ConvertToEnglishDigit";
import ConvertStringToNumber from "../../../Utils/method/ConvertStringToNumber";
//icons
import FillLocationPinIcon from "../../../Assets/icons/FillLocationPinIcon.jsx";
import ColoredInfoIcon from "../../../Assets/icons/ColoredInfoIcon.jsx";
import ErrorIcon from "../../../Assets/icons/ErrorIcon.jsx";

import {
  AddUpdateAddressWrapper,
  MapContainer,
  Form,
  FormRow,
  BackToSelectLocation,
  SubmitLocationButton,
  Label,
} from "./styles.jsx";
import StaticAlert from "../../../Shared/StaticAlert";

const AddUpdateAddress = ({
  selectedAddress,
  onBackToSelectLocation,
  onSubmit,
  userPhone,
  loading,
  theme,
  distanceBetweenCustomerAndVenue,
  maxDistanceOrdering,
}) => {
  let map = null;
  const initialValus = selectedAddress?._id
    ? { ...selectedAddress }
    : {
        address: selectedAddress?.address ? selectedAddress?.address : "",
        title: "",
        receiverPhoneNumber: "0" + userPhone,
        details: "",
        location: selectedAddress?.location,
      };

  const type = selectedAddress?._id ? "edit" : "add";

  const addUpdateAddressHandler = (values) => {
    onSubmit(values);
  };
  useEffect(() => {
    selectedAddress?.location && map?.setView(selectedAddress?.location, 15);
  }, [selectedAddress?.location]);

  return (
    <AddUpdateAddressWrapper>
      <MapContainer>
        <NeshanMap
          options={{
            key: "web.a7afecb75671422dbc0886a1335ab1b6",
            center: selectedAddress.location
              ? selectedAddress?.location
              : [35.729054, 51.42047],
            zoom: 19,
          }}
          onInit={(L, myMap) => {
            myMap.setMapType(theme.map_type);
            map = myMap;
          }}
        />

        <div className="locationPin">
          <FillLocationPinIcon color={theme.primary} />
        </div>
        <div className="map-layer" />
        <BackToSelectLocation onClick={onBackToSelectLocation}>
          ویرایش موقعیت
        </BackToSelectLocation>
        </MapContainer>

      <Formik
        initialValues={initialValus}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          addUpdateAddressHandler(values);
        }}
        enableReinitialize={true}
        validationSchema={VerifyValidationAddUpdateAddressSchema}
        >
        {(subFormik) => {
          return (
            <Form>
              {maxDistanceOrdering < distanceBetweenCustomerAndVenue && (
                <div className="error-alert">
        
                  <StaticAlert
                    text={
                      "نشانی انتخابی شما در محدوده سرویس دهی این فروشگاه نمی‌باشد."
                    }
                    icon={<ErrorIcon />}
                    color={"red2"}
                    hasBgColor={true}
                  />
                </div>
               )}
              <FormRow className="adress">
                <Label>نشانی</Label>
                <Textarea
                  name="address"
                  onChange={(e) =>
                    subFormik.setFieldValue("address", e.target.value)
                  }
                  onBlur={subFormik.onBlur}
                  value={subFormik.values.address}
                  error={
                    subFormik.touched.address ? subFormik.errors.address : null
                  }
                  showErrorMessage={true}
                  showMaxChar={false}
                />

                <StaticAlert
                  text={
                    "جهت اطمینان نشانی را چک کرده و در صورت مغایرت آن را اصلاح کنید."
                  }
                  icon={<ColoredInfoIcon />}
                  color={"blue2"}
                />
              </FormRow>
              <FormRow className="">
                <FormInput
                  label="جزئیات "
                  name="details"
                  onChange={(e) =>
                    subFormik.setFieldValue("details", e.target.value)
                  }
                  onBlur={subFormik.onBlur}
                  value={subFormik.values.details}
                  placeholder={"مثال پلاک ۳، واحد ۴"}
                  require={false}
                  error={
                    subFormik.touched.details ? subFormik.errors.details : null
                  }
                  showErrorMessage={true}
                />
              </FormRow>
              <FormRow>
                <FormInput
                  name="title"
                  onChange={(e) =>
                    subFormik.setFieldValue("title", e.target.value)
                  }
                  onBlur={subFormik.onBlur}
                  value={subFormik.values.title}
                  label="عنوان نشانی "
                  require={false}
                  placeholder={"مثال خانه، شرکت"}
                  error={
                    subFormik.touched.title ? subFormik.errors.title : null
                  }
                  showErrorMessage={true}
                />
              </FormRow>
              <FormRow>
                <FormInput
                  name="receiverPhoneNumber"
                  onChange={(e) => {
                    e.target.value = ConvertToEnglishDigit(e.target.value);
                    e.target.value = ConvertStringToNumber(e.target.value);
                    subFormik.setFieldValue(
                      "receiverPhoneNumber",
                      e.target.value
                    );
                  }}
                  onBlur={subFormik.onBlur}
                  value={ConvertToPersianDigit(
                    subFormik?.values.receiverPhoneNumber
                  )}
                  label="شماره تماس تحویل‌گیرنده"
                  require={false}
                  direction={"ltr"}
                  error={
                    subFormik.touched.receiverPhoneNumber
                      ? subFormik.errors.receiverPhoneNumber
                      : null
                  }
                  showErrorMessage={true}
                />
              </FormRow>

              <SubmitLocationButton>
                <StyledButton
                  submitForm={subFormik.handleSubmit}
                  disabled={loading}
                >
                  {loading
                    ? "لطفا صبر کنید"
                    : type === "add"
                    ? "افزودن نشانی  "
                    : "ویرایش نشانی"}
                </StyledButton>
              </SubmitLocationButton>
            </Form>
          );
        }}
      </Formik>
    </AddUpdateAddressWrapper>
  );
};

export default AddUpdateAddress;
